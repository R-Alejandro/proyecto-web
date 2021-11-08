import React from "react";
import axios from "axios";
import Plus from "../images/plus_Icon.svg"
import Close from "../images/close_Icon.svg"
import { Modal, ModalBody } from "reactstrap"
import Cookies from 'universal-cookie'
import Tag from "./tag";

import 'bootstrap/dist/css/bootstrap.min.css'
import "../components/styles/style_popUp.css"

const cookies = new Cookies()

class all_dashboard__popUp extends React.Component {
    state = {
        //open: true,
        open: false,
        name: '',
        labels: [],
        description: ''
    }
    host = window.location.hostname;

    constructor(props) {
        super(props)
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
        const component = {
            name: this.state.name,
            description: this.state.description
        };

        //const idDashboard = window.location.href.split(this.host + "dashboard/", -1);

        console.log('dashboard', component)
        axios.post(`http://${this.host}:3001/dashboards/${this.props.idDashboard}/new`, component)
            .then(res => {
                if (res.data) {
                    console.log('Post-It Creado')
                    this.handleOpenModal()
                    window.location.href = `http://${this.host}:3000/dashboard/${this.props.idDashboard}`;
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
                        Create Post-It
                    </span>

                </button>
                <Modal isOpen={this.state.open}>
                    <ModalBody className="popUp_modal__container">
                        <button className="popUp_modal__closeIconContainer" onClick={this.handleOpenModal}>
                            <img src={Close} />
                        </button>
                        <h1>Create New Post-It</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="popUp_modal__inputContainer">
                                <input className="popUp_modal__input" type="text" name="name" placeholder="Post-It Name" onChange={this.handleChange} />
                                <hr />
                                <input className="popUp_modal__input" type="text" name="description" placeholder="Description" onChange={this.handleChange} />
                                <hr />
                            </div>
                            <input className="popUp_modal__submit" type="submit" value="CREATE" />
                        </form>

                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default all_dashboard__popUp