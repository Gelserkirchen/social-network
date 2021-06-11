import React from 'react'
import Users from './Users';
import {connect} from 'react-redux';
import {
  follow, unfollow,
  setCurrentPageAction,
  setTotalCountOfUsers,
  setUsersAction, toggleFetchingStatus,
  getUsers, 
  toggleButtonStatus, 
} from '../../redux/reducers/usersReducer';
import Preloader from '../MultiComponents/Preloader';
import { compose } from 'redux';
import {
  getButtonDisabledInfo,
  getButtonStatusToToggle,
  getCountOfUsers, getFetchingStatus,
  getPageNumber,
  getUserDataFromState,
  getUsersToSetThemOnPage
} from '../../redux/reducers/usersSelector';

class UsersContainer extends React.Component {
  props = {}

  componentDidMount() {
    this.props.getUsers()
  }

  render() {

    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users usersCount={this.props.usersCount}
               usersOnPage={this.props.usersOnPage}
               currentPage={this.props.currentPage}
               getUsers={this.props.getUsers}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               usersData={this.props.usersData}
               toggleButtonStatus={this.props.toggleButtonStatus}
               buttonsDisabledArray={this.props.buttonsDisabledArray}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    usersData: getUserDataFromState(state),
    usersOnPage: getUsersToSetThemOnPage(state),
    usersCount: getCountOfUsers(state),
    currentPage: getPageNumber(state),
    isFetching: getFetchingStatus(state),
    toggleButtonStatus: getButtonStatusToToggle(state),
    buttonsDisabledArray: getButtonDisabledInfo(state)
  }
}

export default compose(connect(mapStateToProps, {
  follow,
  unfollow,
  setUsersAction,
  setCurrentPageAction,
  setTotalCountOfUsers,
  toggleFetchingStatus,
  toggleButtonStatus,
  getUsers
}))(UsersContainer)

