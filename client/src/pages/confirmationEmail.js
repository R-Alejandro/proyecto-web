import React from "react";
import axios from "axios"
import Cookies from "universal-cookie";
const cookies = new Cookies()

class ConfirmationEmail extends React.Component {
    /*getUser = () =>{
       axios.get(`http://localhost:3001/users/one/`)
       .then(res => {
           console.log(res);
       }) 
    }*/
    render() {
        return (
            <div>
                confirmacion email 
                <div>
                    {cookies.get('email')}
                </div>                
            </div>

        )
    }
}

export default ConfirmationEmail;