import React from 'react'
import styles from './ProfileInfo.module.css'
import Preloader from '../../../MultiComponents/Preloader';
import photo from "../../../../assets/images/avatar.png";
import ProfileStatusWithHook from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

  console.log('props in profileInfo', props)
  if (!props.profile.contacts) {

    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {

    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F21800000%2FBanner-P-summer448-21813774-2560-1024.jpg&f=1&nofb=1" alt=""/></div>
      <div className={styles.avatar}>
        <img src={props.profile.photos.large || photo} className={styles.mainPhoto}/>
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

        <div>
          <div>
            <b>Full name </b>: {props.profile.fullName}
          </div>
          <div>
            <b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes": "no"}
          </div>
            {props.profile.lookingForAJob &&
            <div><b>My professional skills</b>: {props.profile.lookingForAJobDescription}</div>}
            <div>
              <b>About me {props.profile.aboutMe}</b>
            </div>
          <div>
            <b>Contacts </b>:
                {/*{ if (true) {} else*/}
                { Object.keys(props.profile.contacts).map(key => {
                  return <Contact key={key} contactTitle={key} contactValue={props.profile[key]}/>
                }) }}
          </div>
        </div>
      </div>
      <div>{props.profile.fullName}</div>
      <div><ProfileStatusWithHook status={props.status} updateProfileStatus={props.updateProfileStatus}/></div>
    </div>
  )
}

const Contact = ({contactTitle, contactValue}) => {
  return <div><b>{contactTitle}:</b>{contactValue}</div>
}

export default ProfileInfo