import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../../MultiComponents/Preloader";
import { render } from "@testing-library/react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  toggleStatus = () => {
      this.setState ({
        editMode: !this.state.editMode
      })

      this.props.updateProfileStatus(this.state.status)   
  }

  updateLocalStatus = (e) => {
      this.setState({
        status: e.currentTarget.value
      })
  }

  componentDidUpdate(prevProps, prevState) {
      if (this.props.status != prevProps.status) {
        this.setState({
            status: this.props.status
          })
      }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.toggleStatus}><b>Status:</b> {this.state.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input onChange={this.updateLocalStatus} autoFocus={true} onBlur={this.toggleStatus} type="text" value={this.state.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
