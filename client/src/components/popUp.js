import React from "react";
import axios from "axios";
import Plus from "../images/plus_Icon.svg"
import Close from "../images/close_Icon.svg"
import { Modal, ModalBody } from "reactstrap"
import Cookies from 'universal-cookie'

import 'bootstrap/dist/css/bootstrap.min.css'
import "../components/styles/style_popUp.css"

const cookies = new Cookies()

class popUp extends React.Component {
    state = {
        open: true,
        // open: false,
        name: '',
        labels: '',
        description: ''
    }

    handleOpenModal = () => {
        this.setState({ open: !this.state.open })
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault();
        const dashboard = {
            dashboardName: this.state.name,
            dashboardLabels: this.state.labels,
            dashboardDesc: this.state.description,
            email: cookies.get('email')
        };

        console.log('dashboard', dashboard)
        axios.post(`http://localhost:3001/dashboards/new`, dashboard)
            .then(res => {
                if (res.data) {
                    console.log('TABLERO CREADO')
                    this.handleOpenModal()
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
                    <ModalBody className="popUp_modal__container">
                        <button className="popUp_modal__closeIconContainer" onClick={this.handleOpenModal}>
                            <img src={Close} />
                        </button>
                        <h1>Create New Dashboard</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="popUp_modal__inputContainer">
                                <input className="popUp_modal__input" type="text" name="name" placeholder="Dashboard Name" onChange={this.handleChange} />
                                <hr />
                                <input className="popUp_modal__input" type="text" name="labels" placeholder="label" onChange={this.handleChange} />
                                <hr />
                                <input className="popUp_modal__input" type="text" name="description" placeholder="Description" onChange={this.handleChange} />
                                <hr />
                            </div>
                            {/* <select multiple="multiple" name="labels">
                                    <option>sports</option>
                                    <option>music</option>
                                    <option>education</option>
                                </select> */}
                            {/* <input type={type} name={name} placeholder={label} onChange={onChange} /> */}
                            <input className="popUp_modal__submit" type="submit" value="CREATE" />
                        </form>

                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default popUp