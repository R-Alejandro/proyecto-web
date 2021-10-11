import React, { Fragment } from "react";
import Home_navBar from "../components/home_navBar";
import Dashboard from './../images/home_dashboard.svg'

import './../components/styles/style_home.css'

const home = () => (
    <div className="home__content">
        <Home_navBar/>        
        
        <div className="home_dashboard__content">
            <p>
                what are you waiting for <br/>
                <span>JOIN US</span>
            </p>
            <img src = {Dashboard}/>
        </div>
    </div>
)

export default home
