import {getProfile, getProfileStatus, savePhoto, updateProfileStatus} from '../../redux/reducers/profileReducer'
import React from 'react'
import {connect} from 'react-redux';
import Profile from './Profile';
import { withRouter } from 'react-router';
import { withAuthRedirectComponent } from '../HOC/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    refreshProfile() {
      // debugger
      let userId = this.props.match.params.userId
      if (!userId) {
        userId = this.props.profile.authorisedUserId
      }
      this.props.getProfile(userId)
      this.props.getProfileStatus(userId)
    }

    componentDidMount() {
      this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      //console.log('i am here, and here are props', this.props)
      if (this.props.match.params.userId != prevProps.match.params.userId) {
        this.refreshProfile()
      }

    }

  render() {
    return <Profile {...this.props}
    isOwner={!this.props.match.params.userId}
    savePhoto={this.props.savePhoto}/>
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage,
    isAuth: state.auth.isAuth,
    authorisedUserId: state.auth.userId,
  }
}

export default compose(
  withAuthRedirectComponent,
  connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus, savePhoto}),
  withRouter,
)(ProfileContainer)



