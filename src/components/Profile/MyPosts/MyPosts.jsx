import React from 'react'
import styles from './MyPosts.module.css'
import Post from './MyPost/Post';
import { reduxForm, Field } from 'redux-form'
import { valueValidator, maxLengthValidator} from '../../Utils/Validators/validators'
import { TextArea } from '../../MultiComponents/FormsControl/FormsControl';

const maxLengthValidator10 = maxLengthValidator(10)

const MyPosts = React.memo((props) => {

  let posts = props.profilePage.PostsData.map(element => {
    return <Post message={element.message}/>
  })

  const submitMessage = (values) => {
    props.addPost(values.messageFormComponent)
  }

  return (
    <div>
      <h3>My posts</h3>
      <MessageReduxForm onSubmit={submitMessage}/>
      <div className={styles.posts}>
        {posts}
      </div>
    </div>
  )
})

const MessageComponent = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={TextArea}
               name={"messageFormComponent"}
               placeholder={"enter text here"}
               validate={[valueValidator, maxLengthValidator10]}/>
      </div>
      <div className={ styles.buttons }>
        <button>Add post</button>
      </div>
    </form>
  )
}

const MessageReduxForm = reduxForm({form: 'profileMessages'})(MessageComponent)

export default MyPosts