import React from "react"
import DirectionalButton from './directionalButton'

import Logo from './../images/home_navbar_logo.svg'

import './styles/style_homeReal_navBar.css'

const homeReal_navBar = () => (
    <div className="home_navbar__content">
        <div className="home_navbar__Logo">
            <img src={Logo} />
            <p>Fire Dashboard</p>
        </div>
        <div className="home_navbar__directionalButons">
            <input type="submit" value="LOG OUT" />
        </div>
    </div>
)

export default homeReal_navBar