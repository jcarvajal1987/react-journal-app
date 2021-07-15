import React from 'react'
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {

    const { notes } = useSelector(state => state.notes)


    return (
        
        <div className="journal__entries">
            <TransitionGroup>
             {
                 notes.map( note => (
                    <CSSTransition
                    key={note.id}
                    timeout={500}
                    classNames="item"
                  >
                     <JournalEntry
                     key={ note.id }
                     { ...note } 
                     />
                     </CSSTransition>
                     ))
                    }
                    </TransitionGroup>
        </div>
    )
}
