import { profileAPI } from '../../api/api'

const ADD_POST = 'ADD_POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const GET_USER_PROFILE_STATUS = 'GET_USER_PROFILE_STATUS'

export const addPostAction = (text) => ({
  type: ADD_POST,
  value: text
})

export const setProfileUsersAction = (profile) => (
  {type: SET_USERS_PROFILE,
   value: profile}
)

export const getProfileStatusAction = (value) => ({
  type: GET_USER_PROFILE_STATUS,
  status: value
})

const initialState = {
  PostsData: [
    {id: '1', message: 'Hi it is my first post'},
    {id: '2', message: 'This is second post'}
  ],
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  if (!action) {
    return 
  }

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        PostsData: [...state.PostsData, {id: action.id, message: action.value, likes: '0'}],
      }

    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.value
      }

    case GET_USER_PROFILE_STATUS:
      return {
        ...state,
        status: action.status
      }  
    
    default:
      return state
  }
}

export default profileReducer

// Thunk for get profile 
export const getProfile = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getUsersProfile(userId);
    dispatch(setProfileUsersAction(response.data))
  }
}

// Thunk for get profile 
export const getProfileStatus = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(getProfileStatusAction(response.data))
  }
}

// Thunk for updating profile status
export const updateProfileStatus = (status) => {
  return async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
      dispatch(getProfileStatusAction(status))
    }
  }
}

// Thunk for add post form messages in profile
export const addPost = (text) => {
  return (dispatch) => {
    dispatch(addPostAction(text))
  }
}