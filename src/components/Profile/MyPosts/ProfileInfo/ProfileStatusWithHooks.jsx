import React, {useState, useEffect} from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../../MultiComponents/Preloader";
import { render } from "@testing-library/react";

const ProfileStatusWithHook = (props) => {

  const [editStatus, setEditStatus] = useState(false)
  const [status, updateStatus] = useState(props.status)

  useEffect(()=> {
      setEditStatus(props.status)
  }, [props.status])

  const toggleStatus = () => {
    setEditStatus(!editStatus)
    props.updateProfileStatus(status)
  }

  const updateLocalStatus = (e) => {
    updateStatus(e.currentTarget.value)
  }

  return (
    <div>
      {!editStatus && (
        <div>
          <span onDoubleClick={toggleStatus}><b>Status:</b> {status}</span>
        </div>
      )}
      {editStatus && (
        <div>
          <input onChange={updateLocalStatus} autoFocus={true} onBlur={toggleStatus} type="text" value={status} />
        </div>
      )}
    </div>
  )
}

export default ProfileStatusWithHook;
