import React from "react"
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import downArrow from "./../images/navBar_downArrow_blue.svg"
import settings from "./../images/settings_Icon.svg"
import axios from "axios"

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style_allDashboards_menuOfDashboard.css'
import Cookies from "universal-cookie"
const cookies = new Cookies()

class allDashboards_menuOfDashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    host = window.location.hostname;

    deleteHandler = () => {
        const dashboard = {
            email: cookies.get('email')
        }
        axios.delete(`http://${this.host}:3001/dashboards/delete/${this.props.idDashboard}`, {data: dashboard})
            .then(res => {
                if (res.data.error){
                    alert(res.data.deleteDashboardsError)
                }else {
                    
                    alert(res.data.result)
                    window.location.href = `http://${this.host}:3000/home`;
                }
                
            })
    }
    render() {
        return (
            <div className="menuDashboards__container">
                <p className="menuDashboards__name menuDashboards__openSans_blue">{this.props.name}</p>
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
                        {this.props.labels.split(",").map((e) =>
                            <DropdownItem className="menuDashboards__DropItemActive">
                                {e}
                            </DropdownItem>
                        )}

                    </DropdownMenu>
                </UncontrolledDropdown>
                <div className="menuDashboards__diviction"></div>
                <p className="menuDashboards__description menuDashboards__openSans_light">{this.props.description}</p>
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
                        {/* <DropdownItem tag="button" className="menuDashboards__DropItemActive">
                            Edit dashboard
                        </DropdownItem> */}
                        <DropdownItem tag="button" className="menuDashboards__DropItemActive" onClick={this.deleteHandler}>
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
    }
}

export default allDashboards_menuOfDashboard