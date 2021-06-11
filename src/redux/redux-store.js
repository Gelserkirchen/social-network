import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';
import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import initReducer from './reducers/appReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPages: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  PCwithDataFromRouter: profileReducer,
  app: initReducer,
  form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store