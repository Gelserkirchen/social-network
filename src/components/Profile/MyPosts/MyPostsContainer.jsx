import MyPosts from './MyPosts';
import {addPost} from '../../../redux/reducers/profileReducer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
}

const MyPostsContainer = connect(mapStateToProps, {
  addPost
})(MyPosts)

export default MyPostsContainer