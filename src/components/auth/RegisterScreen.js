import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
export const RegisterScreen = ({history,increment}) => {

    const dispatch = useDispatch();

    const { msgError } = useSelector( state => state.ui );
    

    const [ formValues, handleInputChange] = useForm({
        name: 'Jorge',
        email:'jorge@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;
   
    const handleRegister = (e) => {
        e.preventDefault();
        if ( isFormValid()) {
            dispatch( startRegisterWithEmailPasswordName( email,password,name))
        }
    }

    const isFormValid = () => {

        if ( name.trim().length ===0 ) {
            dispatch( setError('name is required') )
            
            return false;
        }

        else if ( !validator.isEmail( email ) ){
            dispatch( setError('email no es valido') )
            return false;
        }

        else if( password !== password2 || password.length < 5 ){
            dispatch( setError('Password should be at least 5 character and match each other') )
            return false
        }
        dispatch( removeError() )
        return true;
    }
    
   
    return (
        <div className="relative">
            
                
           <h3 className="auth__title">Register</h3>

           <form onSubmit={handleRegister}>

               {
                   msgError &&
                   (
                        <div className="auth__alert-error">
                        {msgError}
                        </div>
                    )
                }

                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <input
                    className="mb-5 auth__input "
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    value={ password2 }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
    
                Register
                </button>
           
                <Link to="/auth/login" className="link">
                    Already registered?
                </Link>

           </form>
                </div>
    )
}
