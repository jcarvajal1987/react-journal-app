
import { types } from '../types/types'

export const setError = ( err ) => ({
    
    type: types.uiSetError,
    payload: err
});

export const removeError = ( err ) => ({
    
    type: types.uiRemoveError
});

export const finishLoading = () => ({
    
    type: types.uiFinishLoading
});
export const startLoading = () => ({
    
    type: types.uiStartLoading
});

export const isAuth = () => ({
    
    type: types.uiIsAuth
});
export const notAuth = () => ({
    
    type: types.uiNotAuth
});



