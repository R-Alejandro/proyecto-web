import React from "react"
import DirectionalButton from './directionalButton'

import Logo from './../images/home_navbar_logo.svg'

import './styles/style_homeReal_navBar.css'

class homeReal_navBar extends React.Component {
    constructor(props){
        super(props)
    }
    // if user is auth 
    componentDidMount(){
        if(!this.props.cookie.get('email')){
            window.location.href = 'http://localhost:3000/signin';
            alert('No se ha iniciado sesion')
        }
    }

    logoutHandler = () => {
        this.props.cookie.remove('nickname')
        this.props.cookie.remove('email')
        window.location.href = 'http://localhost:3000/home';

    }
    render() {
        return (
            <div className="home_navbar__content">
                <div className="home_navbar__Logo">
                    <img src={Logo} />
                    <p>Fire Dashboard</p>
                </div>
                <div>
                    <h2>Bienvenido {this.props.name}</h2>
                </div>
                <div className="home_navbar__directionalButons">
                    <button onClick={() => this.logoutHandler()}> Log Out</button>
                </div>
            </div>
        )
    }

}

export default homeReal_navBar