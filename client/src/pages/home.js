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
    componentDidMount() {
        const email = cookies.get('email');

        axios.get(`http://localhost:3001/dashboards/get/${email}`)
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
                        // <WithoutBoard/>
                        <div>

                            <Dashboard
                                name="dbName"
                                tableID="5as45d115as58-ad5sa451d-1d5as1dd"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et est sed lectus cursus dapibus a ac quam. Maecenas a augue molestie, egestas massa ac, porta urna. Vivamus ac odio et sapien placerat sollicitudin sed sed nisi. Fusce orci quam, maximus vitae ligula et, ultricies vestibulum tellus. Phasellus a porta mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et est sed lectus cursus dapibus a ac quam. Maecenas a augue molestie, egestas massa ac, porta urna. Vivamus ac odio et sapien placerat sollicitudin sed sed nisi. Fusce orci quam, maximus vitae ligula et, ultricies vestibulum tellus. Phasellus a porta mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et est sed lectus cursus dapibus a ac quam. Maecenas a augue molestie, egestas massa ac, porta urna. Vivamus ac odio et sapien placerat sollicitudin sed sed nisi. Fusce orci quam, maximus vitae ligula et, ultricies vestibulum tellus. Phasellus a porta mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et est sed lectus cursus dapibus a ac quam. Maecenas a augue molestie, egestas massa ac, porta urna. Vivamus ac odio et sapien placerat sollicitudin sed sed nisi. Fusce orci quam, maximus vitae ligula et, ultricies vestibulum tellus. Phasellus a porta mi."
                            />
                            <Dashboard
                                name="dbName"
                                tableID="5as45d115as58-ad5sa451d-1d5as1dd"
                                description="Music"
                            />
                            <Dashboard
                                name="dbName"
                                tableID="5as45d115as58-ad5sa451d-1d5as1dd"
                                description="Music"
                            />
                            <Dashboard
                                name="dbName"
                                tableID="5as45d115as58-ad5sa451d-1d5as1dd"
                                description="Music"
                            />
                        </div>
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

