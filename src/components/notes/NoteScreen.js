import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {



    const dispatch = useDispatch()

    const { active:note } = useSelector(state => state.notes);
    const [ formValues, handleInputChange, reset] = useForm( note );
    const { body, title, id } = formValues;

    const activeId = useRef( note.id )
    

    useEffect(() => {
        
        
        if ( note.id !== activeId.current ){
            activeId.current = note.id
            reset( note );
        }
        
    }, [note, reset]);

    useEffect(() => {
        dispatch( activeNote( formValues.id, {...formValues}) )
    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch(startDeleting( id  ));
    }
    
    return (
        <>
                      
        <div className="notes__main-content relative">
            <NotesAppBar/>

        <TransitionGroup className="grilla-login">

        <CSSTransition
                    key={note.id}
                    addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                      }}
                    timeout={1600}
                    classNames="page"
                    unmountOnExit
                    >
            

            <div className="notes__content relative">
                {id}
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                    />

                <textarea className="notes__textarea"
                    placeholder="What happened today"
                    value={body} 
                    name="body"
                    onChange={handleInputChange}
                    ></textarea>

                {
                    (note.url)
                    &&
                    (<div className="notes__image">
                        <img 
                            src={note.url}
                            alt="imagen"
                            />
                    </div>)
                }

            </div>
            
            </CSSTransition>
            </TransitionGroup>
            <button
                className="btn btn-danger"
                onClick={ handleDelete }
                >
                delete
            </button>

        </div>
                    </>
    )
}
