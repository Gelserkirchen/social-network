import { stopSubmit } from 'redux-form'
import { authAPI } from '../../api/api'

const SET_USER_DATA = 'samuraiNetwork/auth/SET_USER_DATA'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                isAuth: true,
                ...action.data,
            }
        default:
            return state
    }
}

export default authReducer

export const setAuthUserData = (id, login, email, isAuth) => ({
    type: SET_USER_DATA,
    data: {id, login, email, isAuth}    
}) 

export const getAuthUserData = () => {
    return async (dispatch) => {
        let response = await authAPI.me();

        if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(
                    response.data.data.id, 
                    response.data.data.login, 
                    response.data.data.email,
                    true,
                    ))
        } else {
                dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let nameOfError = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
            dispatch(stopSubmit('login', {_error: nameOfError}))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout();

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }

    }
}




