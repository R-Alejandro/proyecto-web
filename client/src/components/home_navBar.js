import React from "react"
import DirectionalButton from './directionalButton'

import Logo from './../images/home_navbar_logo.svg'

import './styles/style_home_navBar.css'

const home_navBar = () => (
    <div className="home_navbar__content">
        <div className="home_navbar__Logo">
            <img src={Logo} />
            <p>Fire Dashboard</p>
        </div>
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
    </div>
)

export default home_navBar