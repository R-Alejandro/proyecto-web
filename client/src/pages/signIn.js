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


class signIn extends React.Component {
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
                    <Link to="home">
                        <img src={logoImage} className="rightForm__logo" />
                    </Link>
                    {/* <form onSubmit={this.handleSubmit} className="rightForm__form"> */}
                    <form className="rightForm__form">
                        <Input
                            icon={emailIcon}
                            label="Email"
                            type="text"
                            name="email"
                            // onChange={this.handleChange}
                        />
                        <Input
                            icon={passwordIcon}
                            label="Password"
                            type="password"
                            name="password"
                        // onChange={this.handleChange}
                        />
                        <div className="form__linkAndSumbitContainer">
                            <Link to="signIn">
                                <a>Forgot Password?</a>
                            </Link>
                            <Link to="confirmation/email" >
                                <input type="submit" value="SIGN IN" />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default signIn