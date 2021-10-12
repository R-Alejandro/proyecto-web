import React from 'react'
import { Link } from "react-router-dom";
import HomeReal_navBar from '../components/homeReal_navBar';
import Cookies from "universal-cookie";
const cookies = new Cookies()

class homeReal extends React.Component{
    render (){
        return(
            
            <HomeReal_navBar
                name = {cookies.get('nickname')}
                cookie = {cookies}

            />
        )
    }
}

export default homeReal

