import React, { useState } from "react"
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'


import Logo from './../images/navBar_Logo.svg'
import menuIcon from "./../images/navBar_menu_Icon.svg"
import profileIcon from "./../images/navBar_Profile_Icon.svg"
import downArrow from "./../images/navBar_downArrow.svg"

import './styles/style_home_navBar.css'

class home_navBar extends React.Component {

    constructor(props) {
        super(props)
    }



    // if user is auth 
    componentDidMount() {

        // --------------------------------------------------------------Descomentar esto al subir
        if(!this.props.cookie.get('email')){
            window.location.href = 'http://localhost:3000/signin';
            alert('No se ha iniciado sesion')
        }
    }

    logoutHandler = () => {
        this.props.cookie.remove('nickname')
        this.props.cookie.remove('email')
        window.location.href = 'http://localhost:3000/';

    }

    render() {
        return (
            <div className="home_navbar__content">
                <d className="home_navbar__menuIcon">
                    <img src={menuIcon} />
                </d>
                <Link to="/home" className="home_navbar__Logo">
                    <img src={Logo} />
                </Link>

                <UncontrolledDropdown className="home_navBar__profileDropDownContent">
                    <DropdownToggle
                        tag="div"
                        className="home_navBar__profileContent"
                    >
                        <img className="profileContent__profileIcon" src={profileIcon} />
                        <img className="profileContent__arrowIcon" src={downArrow} />
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem header> {!this.props.name ? "Usuario" : this.props.name} </DropdownItem>
                        {/* <DropdownItem className="home_navbar__DropItemActive">Profile</DropdownItem>
                        <DropdownItem className="home_navbar__DropItemActive">Settings</DropdownItem> */}
                        <DropdownItem divider />
                        <DropdownItem className="home_navbar__DropItemActive" tag="button" onClick={() => this.logoutHandler()}>
                            <div className="home_navbar__directionalButons">
                                Log Out
                            </div>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }

}

export default home_navBar