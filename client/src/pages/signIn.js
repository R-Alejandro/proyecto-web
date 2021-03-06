import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import Input from "../components/input_signing"
import SignDirection from "../components/left_signDirection"
import './../components/styles/style_signUp.css'
import './../components/styles/style_signIn.css'

import emailIcon from './../images/signUp_email.svg'
import passwordIcon from './../images/signUp_password.svg'
import logoImage from './../images/LogoName.svg'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class signIn extends React.Component {
    state = {
        email: '',
        password: ''
    }
    host = window.location.hostname;

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        console.log()
        console.log('USEEEERRR', user)
        axios.post(`http://${this.host}:3001/auth/login`, user)
            .then(res => {
                if (res.data) {
                    console.log('INTENTO DE LOGEO')
                } else {
                    console.log('ERRROR LOGEO')
                }

                console.log(res);
                //console.log(res.data);
                this.handleRedirect(res);
            })
    }
    //redireccionamiento temporal
    handleRedirect = res => {
        console.log('RES', res.data);
            //here set the cookies
        if(!res.data){
            console.log('USUARIO O CONTRASEÑA INCORRECTA')
            alert('USUARIO O CONTRASEÑA INCORRECTA')
            window.location.href = `http://${this.host}:3000/signin`;
        } else{
            cookies.set('email', res.data.email)
            cookies.set('nickname', res.data.nickname)
            window.location.href = `http://${this.host}:3000/home`;
        }
        
    }
    render() {
        return (
            <div className="signIn__AllContainer">
                <div className="signIn__allContainer__leftMenu">
                    <div className="signIn__leftMenu__upPart"></div>
                    <div className="signIn__leftMenu__midlePart">
                        <div>
                            <div className="signIn__midlePart__select">
                                <div className="signIn__select__left"></div>
                                <SignDirection
                                    label="SIGN IN"
                                    route="/signIn"
                                    color="signDirection__a_black"
                                />
                            </div>
                            <SignDirection
                                label="SIGN UP"
                                route="/signUp"
                                color="signDirection__a_white"
                            />
                        </div>
                    </div>
                    <div className="signIn__leftMenu__downPart"></div>
                </div>
                <div className="allContainer__rightForm signIn__allContainer__rightForm">
                    <Link to="/">
                        <img src={logoImage} className="rightForm__logo" />
                    </Link>
                    <form onSubmit={this.handleSubmit} className="rightForm__form">
                        <Input
                            icon={emailIcon}
                            label="Email"
                            type="text"
                            name="email"
                            onChange={this.handleChange}
                        />
                        <Input
                            icon={passwordIcon}
                            label="Password"
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                        />
                        <div className="form__linkAndSumbitContainer">
                            <Link to="signIn">
                                <a>Forgot Password?</a>
                            </Link>
                            <input type="submit" value="SIGN IN" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default signIn