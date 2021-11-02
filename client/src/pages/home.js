import React from 'react'
import Home_navBar from '../components/home_navBar'
import Cookies from "universal-cookie"
import Dashboard from "../components/dashboard"
import PopUp from "../components/popUp"
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
                    data: res.data.dashboards
                })
                console.log(res.data.dashboards)
            })
    }

    render() {
        return (
            <div>
                <Home_navBar
                    name={cookies.get('nickname')}
                    cookie={cookies}
                />
                <PopUp />

                <div className="home__dashboardsContainer">
                    {this.state.data.length == 0 ?
                        <center><div> <h2>Aun no tienes tableros creados, Crea uno :D</h2></div></center> :
                        this.state.data.map((e) =>
                            <Dashboard
                                name={e.dsb_name}
                                tableID={e.dsb_uuid}
                                description={e.dsb_description}
                            />
                        )}
                    <Dashboard
                        name="tablero"
                        tableID="1031515610-asdas-dfge"
                        description="lorem"
                    />

                </div>

            </div>
        )
    }
}

export default home

