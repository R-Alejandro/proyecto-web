import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import Input from "../components/input_signing"
import SignDirection from "../components/left_signDirection"
import './../components/styles/style_signUp.css'

import nameIcon from './../images/signUp_name.svg'
import emailIcon from './../images/signUp_email.svg'
import nickNameIcon from './../images/signUp_nickName.svg'
import passwordIcon from './../images/signUp_password.svg'
import logoImage from './../images/LogoName.svg'

class signUp extends React.Component {
    state = {
        email: '',
        name: '',
        nickname: '',
        password: ''
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            name: this.state.name,
            nickname: this.state.nickname,
            password: this.state.password
        };
        console.log()
        console.log('USEEEERRR', user)
        axios.post(`http://localhost:3001/auth/signup`, user)
            .then(res => {
                if (res.data.estado) {
                    console.log('USUARIO CREADO')
                } else {
                    console.log('ERRRORRRRR')
                }

                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="signUp__AllContainer">
                <div className="allContainer__leftMenu">
                    <div className="leftMenu__upPart"></div>
                    <div className="leftMenu__midlePart">
                        <SignDirection
                            label="SIGN IN"
                            route="/signIn"
                            color="signDirection__a_white"
                        />
                        <div className="midlePart__select">
                            <div className="select__left"></div>
                            <SignDirection
                                label="SIGN UP"
                                route="/signUp"
                                color="signDirection__a_black"
                            />
                        </div>
                    </div>
                    <div className="leftMenu__downPart"></div>

                </div>
                <div className="allContainer__rightForm">
                    <Link to="home">
                        <img src={logoImage} className="rightForm__logo" />
                    </Link>
                    <form onSubmit={this.handleSubmit} className="rightForm__form">
                        <Input
                            icon={nameIcon}
                            label="Name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                        />
                        <Input
                            icon={emailIcon}
                            label="Email"
                            type="text"
                            name="email"
                            onChange={this.handleChange}
                        />
                        <Input
                            icon={nickNameIcon}
                            label="Nickname"
                            type="text"
                            name="nickname"
                            onChange={this.handleChange}
                        />
                        <Input
                            icon={passwordIcon}
                            label="Password"
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                        />
                        <div className="form__checkbox">
                            <input type="checkbox" name="check" />
                            <p>
                                I agree to the
                                <Link to="#">
                                    <a> terms & services</a>
                                </Link>
                            </p>
                        </div>
                        <div className="form__linkAndSumbitContainer">
                            <Link to="signIn">
                                <a>Already have an account?</a>
                            </Link>
                            <Link to="confirmation/email" >
                                <input type="submit" value="SIGN UP" />
                            </Link>
                        </div>
                    </form>
                    <signUpForm />
                </div>
            </div>
        )
    }
}

export default signUp