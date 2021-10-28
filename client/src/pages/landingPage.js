import React, { Fragment } from "react";
import LandingPage_navBar from "../components/landingPage_navBar";
import Dashboard from './../images/landingPage_dashboard.svg'

import './../components/styles/style_landingPage.css'

const landingPage = () => (
    <div className="landingPage__content">
        <LandingPage_navBar/>        
        
        <div className="landingPage_dashboard__content">
            <p>
                what are you waiting for <br/>
                <span>JOIN US</span>
            </p>
            <img src = {Dashboard}/>
        </div>
    </div>
)

export default landingPage
