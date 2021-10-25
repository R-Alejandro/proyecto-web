import React from "react";
import axios from "axios";
import Plus from "../images/plus_Icon.svg"
import Close from "../images/close_Icon.svg"
import { Modal, ModalBody} from "reactstrap"
import Cookies from 'universal-cookie'

import 'bootstrap/dist/css/bootstrap.min.css'
import "../components/styles/style_popUp.css"

const cookies = new Cookies()

class popUp extends React.Component {
    state={
        // open: true,
        open: false,
        dashboardName: '',
        dashboardLabels: '',
        dashboardDesc: ''
    }

    handleOpenModal = () =>{
        this.setState({open: !this.state.open})
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault();
        const dashboard = {
            dashboardName: this.state.dashboardName,
            dashboardLabels: this.state.dashboardLabels,
            dashboardDesc: this.state.dashboardDesc,
            email: cookies.get('email')
        };

        console.log('dashboard', dashboard)
        axios.post(`http://localhost:3001/dashboards/new`, dashboard)
            .then(res => {
                if (res.data) {
                    console.log('TABLERO CREADO')
                } else {
                    console.log('ERRRORRRRR')
                }

                console.log(res);
                console.log(res.data);
                //this.handleRedirect(res);
            })
    }

    render() {
        return (
            <>
                <button className="popUp__button" onClick={this.handleOpenModal}>
                    <div className="button__plusICon">
                        <img src={Plus} />
                    </div>
                    <span>
                        Create Dashboard
                    </span>

                </button>
                    <Modal isOpen={this.state.open}>
                        <ModalBody>
                            <button onClick={this.handleOpenModal}>
                                <img src={Close}/>
                            </button>
                            <h1>Create New Dashboard</h1>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" name="dashboardName" placeholder="Dashboard Name" onChange={this.handleChange} />
                                <input type="text" name="dashboardLabels" placeholder="label" onChange={this.handleChange} />
                                <input type="text" name="dashboardDesc" placeholder="Description" onChange={this.handleChange} />
                                {/* <select multiple="multiple" name="labels">
                                    <option>sports</option>
                                    <option>music</option>
                                    <option>education</option>
                                </select> */}
                                {/* <input type={type} name={name} placeholder={label} onChange={onChange} /> */}
                                <input type="submit" value="CREATE"/>
                            </form>
                            
                        </ModalBody>
                    </Modal>
            </>
        )
    }
}

export default popUp