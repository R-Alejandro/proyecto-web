import React from "react"
import Input from "../components/input"
import './../components/styles/style_singUp.css'

import nameIcon from './../images/singUp_name.svg'
import emailIcon from './../images/singUp_email.svg'
import nickNameIcon from './../images/singUp_nickName.svg'
import passwordIcon from './../images/singUp_password.svg'

class singUp extends React.Component {
    render() {
        return (
            <div className="singUp__AllContainer">
                <div>

                </div>
                <div className="allContainer__form">
                    <form>
                        <Input
                            icon = {nameIcon}
                            label = "Nombre"
                            type = "text"
                            name = "name"
                        />
                        <Input
                            icon = {emailIcon}
                            label = "Email"
                            type = "text"
                            name = "email"
                        />
                        <Input
                            icon = {nickNameIcon}
                            label = "Nickname"
                            type = "text"
                            name = "Nickname"
                        />
                        <Input
                            icon = {passwordIcon}
                            label = "Password"
                            type = "password"
                            name = "password"
                        />
                        <label className="form__checkbox">
                            <input type="checkbox" name="check" />
                            check
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default singUp