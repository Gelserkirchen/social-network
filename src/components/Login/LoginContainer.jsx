import {login} from '../../redux/reducers/authReducer';
import {connect} from 'react-redux';
import { compose } from 'redux';
import Login from './Login'

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default compose(
    connect(mapStateToProps, {
      login
    }),
  )(Login)