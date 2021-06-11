import {addMessageToDialog} from '../../redux/reducers/messagesReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirectComponent } from '../HOC/withAuthRedirect'

const mapStateToProps = (state) => {
  return {
    dialogPages: state.dialogPages
  }
}

export default compose(
  withAuthRedirectComponent,
  connect(mapStateToProps, {
    addMessageToDialog
  }),
)(Dialogs)