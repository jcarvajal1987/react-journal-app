
import React from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { JournalScreen } from '../components/journal/JournalScreen'


export const JournalRouter = ({location,match}) => {
    

    const timeout = { enter: 1600, exit: 1600 }


    
     
    

    
    
      
    return (
        

                <TransitionGroup className="relative"> 

                    <CSSTransition
                    timeout={timeout}
                    classNames='page'
                    key={location.pathname}
                    
                    >
                        <Switch location={location}>

                            
                            
                                <Route exact path={`${match.url}/home`} component={JournalScreen}/>
                                <Route exact path={`${match.url}/otro`} component={JournalScreen}/>
                                <Redirect to={`${match.url}/home`}/>
                               


                            
                        </Switch>
                    </CSSTransition>

                </TransitionGroup>
            
    )
}
