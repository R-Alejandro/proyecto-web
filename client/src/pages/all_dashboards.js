import React from "react"
import Home_navBar from '../components/home_navBar'
import AllDashboards_menuOfDashboard from '../components/allDashboards_menuOfDashboard'
import PosIt from "../components/posIt"
import PopUp from "../components/all_dashboard__popUp"

import axios from "axios"
import Cookies from "universal-cookie"

const cookies = new Cookies()

class all_dashboards extends React.Component {

    
    host = window.location.href.split("dashboard/", 1)
    
    componentDidMount(){
        console.log("el id del tablero es", window.location.href.split(this.host+"dashboard/", -1))
    }

    render(){
        return(
            <>
                <Home_navBar/>
                <PopUp/>
                <AllDashboards_menuOfDashboard
                    name="name Dashboards"
                    labels="a"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et est sed lectus cursus dapibus a ac quam. Maecenas a augue molestie, egestas massa ac, porta urna. Vivamus ac odio et sapien placerat sollicitudin sed sed nisi. Fusce orci quam, maximus vitae ligula et, ultricies vestibulum tellus. Phasellus a porta mi."
                />

                <div className="all_dashboards__postIt_container">
                    <PosIt
                        name = "Post Name"
                        description = "equisdedededededed"
                    />
                    <PosIt
                        name = "Post Name"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et est sed lectus cursus dapibus a ac quam. Maecenas a augue molestie, egestas massa ac, porta urna. Vivamus ac odio et sapien placerat sollicitudin sed sed nisi. Fusce orci quam, maximus vitae ligula et, ultricies vestibulum tellus. Phasellus a porta mi."
                    />
                    <PosIt
                        name = "Post Name"
                        description = "equisdedededededed"
                    />
                    <PosIt
                        name = "Post Name"
                        description = "equisdedededededed"
                    />
                    <PosIt
                        name = "Post Name"
                        description = "equisdedededededed"
                    />
                    <PosIt
                        name = "Post Name"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et est sed lectus cursus dapibus a ac quam. Maecenas a augue molestie, egestas massa ac, porta urna. Vivamus ac odio et sapien placerat sollicitudin sed sed nisi. Fusce orci quam, maximus vitae ligula et, ultricies vestibulum tellus. Phasellus a porta mi."
                    />
                    <PosIt
                        name = "Post Name"
                        description = "equisdedededededed"
                    />
                    <PosIt
                        name = "Post Name"
                        description = "equisdedededededed"
                    />
                    <PosIt
                        name = "Post Name"
                        description = "equisdedededededed"
                    />
                    <PosIt
                        name = "Post Name"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et est sed lectus cursus dapibus a ac quam. Maecenas a augue molestie, egestas massa ac, porta urna. Vivamus ac odio et sapien placerat sollicitudin sed sed nisi. Fusce orci quam, maximus vitae ligula et, ultricies vestibulum tellus. Phasellus a porta mi."
                    />
                    <PosIt
                        name = "Post Name"
                        description = "equisdedededededed"
                    />
                    <PosIt
                        name = "Post Name"
                        description = "equisdedededededed"
                    />
                    <PosIt
                        name = "Post Name"
                        description = "equisdedededededed"
                    />
                    <PosIt
                        name = "Post Name"
                        description = "equisdedededededed"
                    />
                    <PosIt
                        name = "Post Name"
                        description = "equisdedededededed"
                    />
                    <PosIt
                        name = "Post Name"
                        description = "equisdedededededed"
                    />
                </div>
            </>
        )
    }
}

export default all_dashboards