import React from "react"
import Home_navBar from '../components/home_navBar'
import AllDashboards_menuOfDashboard from '../components/allDashboards_menuOfDashboard'
import PosIt from "../components/posIt"
import PopUp from "../components/all_dashboard__popUp"
import WithoutBoard from "../components/home_withoutBoards"
import axios from "axios"
import Cookies from "universal-cookie"

import CloseIcon from "../images/close_postIt_icon.svg"
import "../components/styles/style_postIt.css"

const cookies = new Cookies()

class all_dashboards extends React.Component {

    state = {
        component: [],
        dashboard: []
    }

    host = window.location.href.split("dashboard/", 1)
    idDashboard = window.location.href.split(this.host + "dashboard/", -1);
    componentDidMount() {


        axios.get(`http://localhost:3001/dashboards/${this.idDashboard[1]}`)
            .then(res => {
                this.setState({
                    dashboard: res.data.dashboard,
                    component: res.data.component
                })
            })
        console.log("id dashboard", this.idDashboard[1]);
    }

    deleteHandler = (uuid) => {
        console.log(uuid)
        axios.delete(`http://localhost:3001/dashboards/${uuid}/delete`)
            .then(res => {
                if (res.data.error){
                    alert(res.data.error)
                }else {
                    alert(res.data.message)
                }
                window.location.href = `http://localhost:3000/dashboard/${this.idDashboard[1]}`;
            })
    }

    render() {
        return (
            <>
                <Home_navBar
                    name={cookies.get('nickname')}
                    cookie={cookies}
                />
                <PopUp
                    idDashboard={this.idDashboard[1]}
                />
                <div>
                    {this.state.dashboard.length == 0 ?
                        <WithoutBoard />
                        :
                        this.state.dashboard.map((e) =>
                            <AllDashboards_menuOfDashboard
                                name={e.dsb_name}
                                labels={e.labels}
                                description={e.dsb_description}
                                idDashboard={this.idDashboard[1]}
                            />
                        )}
                </div>
                <div className="all_dashboards__postIt_container">
                    {this.state.component.length == 0 ?
                        <WithoutBoard /> //hacer componente con el nombre posit
                        :
                        this.state.component.map((e) =>
                            // <PosIt
                            //     name={e.cp_name}
                            //     description={e.cp_description}
                            // />
                            <div className="postIt__container">
                                <div>
                                    <p className="postIt_name">{e.cp_name}</p>
                                    <img src={CloseIcon} onClick={() => this.deleteHandler(e.cp_uuid)} />
                                </div>
                                <p className="postIt_description">{e.cp_description}</p>
                            </div>
                        )}

                </div>
            </>
        )
    }
}

export default all_dashboards