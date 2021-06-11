import React from "react";
import styles from "../Header/Header.module.css";
import {NavLink} from 'react-router-dom';
import { reduxForm, Field } from 'redux-form'

const Header = (props) => {

  console.log('Header.jsx, props.isAuth: ', props.isAuth)
  console.log('Header.jsx, props.data: ', props.data)
  return (
    <header className={styles.header} >
      <img
        src="https://opportunities.sriexecutive.com/wp-content/uploads/2018/08/IMG-Academy.jpg"
        className="imagine"
        alt="23"
      />

      <div>
        <NavLink to={"/login/"}>
          { props.isAuth ? <div className={styles.authLink}>{props.id}</div> : <span><div>Login</div></span>} 
        </NavLink>
        { props.isAuth ? <div><button onClick={()=> {props.logout()}}>Logout</button></div> : ''} 
      </div>
    </header>
  );
};

export default Header;
