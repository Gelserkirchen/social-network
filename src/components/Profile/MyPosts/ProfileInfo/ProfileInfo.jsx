import React from 'react'
import styles from './ProfileInfo.module.css'
import Preloader from '../../../MultiComponents/Preloader';
import photo from "../../../../assets/images/avatar.png";
import ProfileStatusWithHook from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

  // debugger
  if (!props.profile) {
    // console.log('props in profileInfo', props)
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {

    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  debugger

  return (
    <div>
      <div><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F21800000%2FBanner-P-summer448-21813774-2560-1024.jpg&f=1&nofb=1" alt=""/></div>
      <div className={styles.avatar}>
        <img src={props.profile.photos.large || photo} className={styles.mainPhoto}/>
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
      </div>
      <div>{props.profile.fullName}</div>
      <div><ProfileStatusWithHook status={props.status} updateProfileStatus={props.updateProfileStatus}/></div>
    </div>
  )
}

export default ProfileInfo