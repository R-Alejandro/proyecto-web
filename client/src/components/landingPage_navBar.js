import React from "react"
import DirectionalButton from './directionalButton'

import Logo from './../images/navBar_Logo.svg'

import './styles/style_landingPage_navBar.css'
import Cookies from "universal-cookie"
const cookies = new Cookies()

const landingPage_navBar = () => (
    <div className="landingPage_navbar__content">
        <div className="landingPage_navbar__Logo">
            <img src={Logo} />
            <p>Fire Dashboard</p>
        </div>
        {
            (!cookies.get('email')) ?
            <div className="landingPage_navbar__directionalButons">
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

export default landingPage_navBar