import React from "react"
import DirectionalButton from './directionalButton'

import Logo from './../images/home_navbar_logo.svg'

import './styles/style_home_navBar.css'
import Cookies from "universal-cookie"
const cookies = new Cookies()

const home_navBar = () => (
    <div className="home_navbar__content">
        <div className="home_navbar__Logo">
            <img src={Logo} />
            <p>Fire Dashboard</p>
        </div>
        {
            (!cookies.get('email')) ?
            <div className="home_navbar__directionalButons">
                <DirectionalButton
                    layer="SIGN IN"
                    route="/signin"
                />
                <DirectionalButton
                    layer="SIGN UP"
                    route="/signup"
                />
            </div>
            : <div> <h2>{cookies.get('nickname')} </h2></div>
        }



    </div>
)

export default home_navBar