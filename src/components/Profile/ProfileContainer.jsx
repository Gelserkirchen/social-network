import { getProfile, getProfileStatus, updateProfileStatus } from '../../redux/reducers/profileReducer'
import React from 'react'
import {connect} from 'react-redux';
import Profile from './Profile';
import { withRouter } from 'react-router';
import { withAuthRedirectComponent } from '../HOC/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) {
        userId = this.props.authorisedUserId
      }
      this.props.getProfile(userId)
      this.props.getProfileStatus(userId)
    }
    render() {    
      return <Profile {...this.props}/>
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
  connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus}),
  withRouter,
)(ProfileContainer)



