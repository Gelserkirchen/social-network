import React from 'react'
import styles from './Post.module.css'

const Post = (props) => {
  return (
      <div className={styles.item}>
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.3dyuriki.com%2FAvatar%2Fmister-Bin-film-Avatar.jpg&f=1&nofb=1" alt=""/>
        {props.message}
        <div>
          <span>like</span>
        </div>
      </div>
  )
}

export default Post