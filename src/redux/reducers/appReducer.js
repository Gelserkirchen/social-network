import { authAPI } from '../../api/api'
import {getAuthUserData} from './authReducer';


const APP_INITIALIZED = 'APP_INITIALIZED'

const initialState = {
  initialized: false,
}

const initReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_INITIALIZED:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

export default initReducer

export const setInitStatus = () => ({
  type: APP_INITIALIZED
})

export const appInit = () => {
  return (dispatch) => {
      const promise = dispatch(getAuthUserData())
      Promise.all([promise]).then(() => {
        dispatch(setInitStatus())
      })
  }
}


