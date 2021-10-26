import React from 'react'
import { Link } from "react-router-dom"
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
    componentDidMount(){
        const email = cookies.get('email');
        
        axios.get(`http://localhost:3001/dashboards/${email}`)
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
                <PopUp/>

                <div className="home__dashboardsContainer">
                    {this.state.data.map((e) => 
                        <Dashboard 
                            name={e.dsb_name}
                            tableID={e.dsb_uuid}
                            description = {e.dsb_description}
                        />
                    )}
                    <Dashboard 
                        name="Table Name"
                        tableID="TableID"
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at tincidunt eros, nec pulvinar nisi. Nam eu ligula dapibus felis aliquam fringilla. Nam non est porta, pretium risus sed, rhoncus arcu. Nunc congue et tortor in maximus. Praesent eget condimentum nibh. Phasellus quis arcu quis felis porta fermentum nec sed nisi. Proin auctor, nisi nec dictum tincidunt, odio mi ullamcorper augue, eget auctor arcu mi non risus. Nam consectetur sit amet sapien nec porta. Nulla tincidunt, turpis nec eleifend fringilla, enim est mattis enim, nec efficitur risus dolor at mi. Suspendisse elementum ornare auctor."
                    />
                    
                    
                </div>

            </div>
        )
    }
}

export default home

