import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Cookies from "universal-cookie"
import emailSVG from '../images/email_confirmation.svg'
import "../components/styles/style_confirmationEmail.css"

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
            <div className="confirmationEmail__container">
                <div className="confirmationEmail__textContainer">
                    <p className="textContainer__h1">
                        Email Confirmation
                    </p>
                    <p className="textContainer__h2">
                        Check your email & click the link to activate your &nbsp; account
                    </p>
                    <Link to="../signIn" className="textContainer__Link">
                        <p>
                            Go Sing in
                        </p>
                    </Link>
                </div>
                <div className="confirmationEmail__Image">
                    <img src={emailSVG}/>
                </div>
            </div>

        )
    }
}

export default ConfirmationEmail;