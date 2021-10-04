import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import Input from "../components/input_singing"
import SingDirection from "../components/left_singDirection"
import './../components/styles/style_singUp.css'

import signUpForm from "../components/signUpForm"

import nameIcon from './../images/singUp_name.svg'
import emailIcon from './../images/singUp_email.svg'
import nickNameIcon from './../images/singUp_nickName.svg'
import passwordIcon from './../images/singUp_password.svg'
import logoImage from './../images/LogoName.svg'

class singUp extends React.Component {
    state = {
        email: '',
        name: '',
        nickname: '',
        password: ''
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})
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
                if(res.data.estado){
                    console.log('USUARIO CREADO')
                }else{
                    console.log('ERRRORRRRR')
                }
                    
                console.log(res);
                console.log(res.data);
                this.handleRedirect(res);
            })
    }
    //redireccionamiento temporal
    handleRedirect = res => {
        if (res.status === 201){
            window.location.href = 'http://localhost:3000/confirmation/email';
        }else{
            console.log('ERROR AL REGISTRAR EL USUARIO')
        }
    }

    render() {
        return (
            <div className="singUp__AllContainer">
                <div className="allContainer__leftMenu">
                    <div className="leftMenu__upPart"></div>
                    <div className="leftMenu__midlePart">
                        <SingDirection
                            label="SING IN"
                            route="/singIn"
                            color="singDirection__a_white"
                        />
                        <div className="midlePart__select">
                            <div className="select__left"></div>
                            <SingDirection
                                label="SING UP"
                                route="/singUp"
                                color="singDirection__a_black"
                            />
                        </div>
                    </div>
                    <div className="leftMenu__downPart"></div>

                </div>
                <div className="allContainer__rightForm">
                    <img src={logoImage} className="rightForm__logo" />
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
                            <Link to="singIn">
                                <a>Already have an account?</a>
                            </Link>
                            <input type="submit" value="SING UP" />
                            {/* <Link to="confirmation/email" >
                                
                            </Link> */}
                        </div>
                    </form>
                    <signUpForm />
                </div>
            </div>
        )
    }
}

export default singUp