import { profileAPI } from '../../api/api'

const ADD_POST = 'ADD_POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const GET_USER_PROFILE_STATUS = 'GET_USER_PROFILE_STATUS'
const SAVE_PHOTOS_SUCCESS = 'SAVE_PHOTOS_SUCCESS'

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

export const savePhotoSuccess = (photos) => (
  {
  type: SAVE_PHOTOS_SUCCESS,
  photos: photos
})

const initialState = {
  PostsData: [
    {id: '1', message: 'Hi it is my first post'},
    {id: '2', message: 'This is second post'}
  ],
  profile: {
    photos: {
      small: null,
      large: null
    },
  },
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

    case SAVE_PHOTOS_SUCCESS:
      debugger
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
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

// Thunk for updating profile photo
export const savePhoto = (file) => {
  return async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
      debugger
      dispatch(savePhotoSuccess(response.data.data.photos))
    }
  }
}

// Thunk for add post form messages in profile
export const addPost = (text) => {
  return (dispatch) => {
    dispatch(addPostAction(text))
  }
}