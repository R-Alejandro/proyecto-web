import React from 'react'
import { Link } from "react-router-dom"
import Home_navBar from '../components/home_navBar'
import Cookies from "universal-cookie"
import Dashboard from "../components/dashboard"
import PopUp from "../components/popUp"
import WithoutBoard from '../components/home_withoutBoards'

import axios from 'axios'
import "../components/styles/style_home.css"
const cookies = new Cookies()

class home extends React.Component {

    state = {
        data: []
    }

    host = window.location.hostname;

    componentDidMount() {
        const email = cookies.get('email');
        axios.get(`http://${this.host}:3001/dashboards/get/${email}`)
            .then(res => {
                this.setState({
                    data: res.data.dashboards[0]
                })
                console.log(res.data.dashboards[0])
            })
    }

    render() {
        return (
            <div>
                <Home_navBar
                    name={cookies.get('nickname')}
                    cookie={cookies}
                />
                <PopUp/>

                <div className="home__dashboardsContainer">
                    {this.state.data.length == 0 ?
                        <WithoutBoard/>
                        :
                        this.state.data.map((e) =>
                            <Dashboard
                                name={e.dsb_name}
                                tableID={e.dsb_uuid}
                                description={e.dsb_description}
                            />
                        )}


                </div>

            </div>
        )
    }
}

export default home

