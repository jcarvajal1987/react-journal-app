import { firebase } from '../firebase/firebase-config';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    Switch,
    Route,
    withRouter,
    Redirect

  } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { login } from '../actions/auth';
import { AuthRouter } from './AuthRouter'
import { JournalRouter } from './JournalRouter'
import { isAuth, notAuth } from '../actions/ui';
import { startLoadingNotes } from '../actions/notes'


const AppRouter = ({location,match,history}) => {


    const currentKey = location.pathname.split('/')[1] || '/'
    const timeout = { enter: 1600, exit: 1600 }

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ));
                setIsLoggedIn( true );
                history.replace(`${match.url}journal/home`);
                dispatch( isAuth() );
                dispatch(startLoadingNotes( user.uid ))
            } else {
                setIsLoggedIn( false );
                history.replace('/auth/login');
                setTimeout(() => {
                    dispatch( notAuth() );
                }, 1600);
            }
            setChecking(false);
        })
    }, [ dispatch, setChecking, setIsLoggedIn, history,match.url ])

    if ( checking ) {
        return (
            <h1>Espere...</h1> 
        )
    }
    
    return (
        
                <TransitionGroup className="grilla-login">
                    <CSSTransition
                    timeout={timeout}
                    classNames='page'
                    key={currentKey}
                    
                    >
                            <Switch location={location}>
                                <Route path={`${match.url}journal`} isLoggedIn={isLoggedIn} component={JournalRouter}/>
                                <Route path={`${match.url}auth`}component={AuthRouter}/>
                                <Redirect to="/auth/login"/>
                            </Switch>
                            </CSSTransition>
                </TransitionGroup>
            
    )
}

export default withRouter(AppRouter)
