import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Route from 'react-router-dom/es/Route';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer'
import {connect, Provider} from 'react-redux';
import Preloader from './components/MultiComponents/Preloader';
import { compose } from 'redux';
import {appInit} from './redux/reducers/appReducer';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import store from './redux/redux-store';

const DialogsContainer = React.lazy(() => import('./components/Dialoges/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

// import {rerenderEntireTree} from './index';

class App extends React.Component {
  componentDidMount() {
    this.props.appInit()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
        <div className='app-wrapper'>
          <HeaderContainer/>
          <NavBar/>
          <div className='app-wrapper-content'>
            <Route path='/Dialogs' render={() => {
              return <React.Suspense fallback={<Preloader/>}>
                  <DialogsContainer/>
              </React.Suspense>
            }}/>

            <Route path='/Profile/:userId?' render={() => {
              return <React.Suspense fallback={<Preloader/>}>
                  <ProfileContainer/>
              </React.Suspense>
            } }/>
            <Route path='/Users' component={() => <UsersContainer/>}/>
            <Route path='/News' component={() => <News/>}/>
            <Route path='/Music' component={Music}/>
            <Route path='/Settings' component={Settings}/>
            <Route path='/Login' render={() => <LoginContainer/>}/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  connect(mapStateToProps, {appInit}),
)(App)

let SocialNetworkApp = (props) => {
  return <HashRouter>
    <Provider store={store}>
        <AppContainer/>
    </Provider>
  </HashRouter>
}



export default SocialNetworkApp