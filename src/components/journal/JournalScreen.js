import React from 'react'
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';

export const JournalScreen = ({history}) => {

    const { auth } = useSelector( state => state.ui );
    const { active} = useSelector( state => state.notes );

    const mensaje = ( active.id !== 'noActive' ) ? <NoteScreen/> : <NothingSelected/>
    console.log(active.id)

    return (
        <div className="journal__main-content relative">
            {auth
            ?(
                <>
            <Sidebar/>

            <main>

            <TransitionGroup className="grilla-login">

            <CSSTransition
                        key={active.id}
                        addEndListener={(node, done) => {
                            node.addEventListener("transitionend", done, false);
                          }}
                        timeout={1600}
                        classNames="page"
                        unmountOnExit
                        >
                        {mensaje}
            </CSSTransition>
            </TransitionGroup>

                
                {/* <NothingSelected/> */}
            </main>
            </>

            )
            :(
                <></>
            )

            }
        </div>
    )
}
