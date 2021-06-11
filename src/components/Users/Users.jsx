import React from "react";
import styles from "./Users.module.css";
import photo from "../../assets/images/avatar.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {

  const numberOfPages = Math.ceil(props.usersCount / props.usersOnPage);

  const pages = [];

  // set only 8 pages instead of several thouthands 
  for (let i = 1; i <= 8; i++) {
    if (i === 8) {
      pages.push("...");
      pages.push(numberOfPages);
    } else {
      pages.push(i);
    }
  }

  return (
    <div>
      <div>
        {pages.map((number) => {
          return (
            <span
              className={
                props.currentPage === number
                  ? styles.selectedPhoto
                  : styles.unselectedItem
              }
              onClick={(e) => {
                props.getUsers(number);
              }}
            >
              {number}
            </span>
          );
        })}
      </div>
      {props.usersData.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/Profile/" + u.id}>
                <img
                  src={u.photos.small === null ? photo : u.photos.small}
                  alt=""
                  className={styles.usersPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followType === true ? (
                <button
                  disabled = {props.buttonsDisabledArray.some(id => id === u.id)}
                  onClick={ () => props.unfollow(u.id) }
                >
                  {" "} Unfollow {" "} </button>) : 
              (
                <button
                  disabled = {props.buttonsDisabledArray.some(id => id === u.id)}
                  onClick={ () => props.follow(u.id) }
                >
                  {" "}
                  Follow{" "}
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.followType}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
