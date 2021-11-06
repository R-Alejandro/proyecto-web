import React from "react"
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import downArrow from "./../images/navBar_downArrow_blue.svg"
import settings from "./../images/settings_Icon.svg"


import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style_allDashboards_menuOfDashboard.css'

const allDashboards_menuOfDashboard = ({ name, labels, description }) => (
    <div className="menuDashboards__container">
        <p className="menuDashboards__name menuDashboards__openSans_blue">{name}</p>
        <div className="menuDashboards__diviction"></div>
        <UncontrolledDropdown className="menuDashboards__dropDown">
            <DropdownToggle
                tag="div"
                className="menuDashboards__nameContent menuDashboards__openSans_blue"
            >
                <p>labels</p>
                <img className="nameContent__arrowIcon" src={downArrow} />
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem className="menuDashboards__DropItemActive">
                    {labels}
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
        <div className="menuDashboards__diviction"></div>
        <p className="menuDashboards__description menuDashboards__openSans_light">{description}</p>
        <div className="menuDashboards__diviction"></div>
        <UncontrolledDropdown className="menuDashboards__dropDown">
            <DropdownToggle
                tag="div"
                className="menuDashboards__nameContent menuDashboards__openSans_blue"
            >
                <p>Settings</p>
                <img className="nameContent__arrowIcon" src={settings} />
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem tag="button" className="menuDashboards__DropItemActive">
                    Edit dashboard
                </DropdownItem>
                <DropdownItem tag="button" className="menuDashboards__DropItemActive">
                    Delete dashboard
                </DropdownItem>
                {/* <DropdownItem className="home_navbar__DropItemActive" tag="button" onClick={() => this.logoutHandler()}>
                    <div className="home_navbar__directionalButons">
                        Log Out
                    </div>
                </DropdownItem> */}
            </DropdownMenu>
        </UncontrolledDropdown>
    </div>
)

export default allDashboards_menuOfDashboard