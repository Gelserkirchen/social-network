import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../MultiComponents/FormsControl/FormsControl';
import { valueValidator } from '../Utils/Validators/validators';
import styles from '../Login/Login.module.css';
import { Redirect } from 'react-router';


const LoginForm = (props) => {
    // debugger
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field component={Input} name={"login"} validate={[valueValidator]} placeholder={"Login"} /></div>
                <div><Field component={Input} name={"password"} validate={[valueValidator]} placeholder={"Password"} type={"password"}/></div>
                {props.error && <div className={styles.errorEmailLoginStyle}>{props.error}</div>}
                <div><Field component={"input"} name={"rememberMe"} type="checkbox" />Remember Me</div>
                <div><button>Login</button></div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        if (!props.isAuth) {
            props.login(formData.login, formData.password, formData.rememberMe)
        }
    }
    
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login 