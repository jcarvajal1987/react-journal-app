import React, { useRef, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'

export const AuthRouter = ({location,match}) => {
    
    
    const timeout = { enter: 1600, exit: 1600 }

    const [alto,] = useState()
    
    
    
    const pTag = useRef();
    
    
    
    // useLayoutEffect(() => {
    //     setAlto(`${pTag.current.clientHeight}px`)
    //     console.log(pTag.current.clientHeight)
    // }, [])
    
    const mystyle = {
        height: alto
      };
      
    return (
        <div className="auth__main relative">
            <div ref={pTag} style={mystyle} className="auth__box-container">

                <TransitionGroup className="grilla-login"> 

                    <CSSTransition
                    timeout={timeout}
                    classNames='page'
                    key={location.pathname}
                    
                    >
                        <Switch location={location}>
                            <Route exact path={`${match.url}/login`} component={LoginScreen}/>
                            
                            <Route exact path={`${match.url}/register`} component={RegisterScreen}/>
                            
                            <Redirect to="/auth/login"/>
                        </Switch>
                    </CSSTransition>

                </TransitionGroup>
            </div>
        </div>
    )
}
