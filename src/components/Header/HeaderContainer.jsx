import React from 'react'
import {connect} from 'react-redux';
// import {authAction} from './../../redux/reducers/auth_Reducer'
import Header from './Header'
import { getAuthUserData, logout } from '../../redux/reducers/authReducer';
import { compose } from 'redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
      this.props.getAuthUserData()
    }

    render() {
      return <Header {...this.props.data.auth} logout={this.props.logout}/>
    }
}

let mapStateToProps = (data) => {
  return {
    data: data
  }
}

export default connect(mapStateToProps, {
    getAuthUserData,
    logout
})(HeaderContainer)