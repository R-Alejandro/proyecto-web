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

class popUp extends React.Component {
    state = {
        //open: true,
        open: false,
        name: '',
        labels: [],
        description: ''
    }

    handleOpenModal = () => {
        this.setState({ open: !this.state.open })
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    handleArray = event => {
        const label = [...this.state.labels]
        if (event.target.checked) {
            label.push(event.target.value)
        } else {
            let i = label.indexOf(event.target.value)
            label.splice(i, 1)
        }
        this.setState({ labels: label })
    }

    handleSubmit = event => {
        event.preventDefault();
        const dashboard = {
            name: this.state.name,
            labels: this.state.labels,
            description: this.state.description,
            email: cookies.get('email')
        };

        console.log('dashboard', dashboard)
        axios.post(`http://localhost:3001/dashboards/new`, dashboard)
            .then(res => {
                if (res.data) {
                    console.log('TABLERO CREADO')
                    this.handleOpenModal()
                    window.location.href = 'http://localhost:3000/home';
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
                                {/* <input className="popUp_modal__input" type="text" name="labels" placeholder="label" onChange={this.handleChange} /> */}
                                <label className="inputContainer__Label">Labels</label><br />
                                <div className="inputContainer__tagsContainer">
                                    <Tag
                                        label="Sports"
                                        value="1"
                                        onChange={this.handleArray}
                                    />
                                    <Tag
                                        label="Music"
                                        value="2"
                                        onChange={this.handleArray}
                                    />
                                    <Tag
                                        label="Education"
                                        value="3"
                                        onChange={this.handleArray}
                                    />
                                    <Tag
                                        label="Design"
                                        value="4"
                                        onChange={this.handleArray}
                                    />
                                    <Tag
                                        label="Programming"
                                        value="5"
                                        onChange={this.handleArray}
                                    />
                                    <Tag
                                        label="Maths"
                                        value="6"
                                        onChange={this.handleArray}
                                    />
                                    <Tag
                                        label="Science"
                                        value="7"
                                        onChange={this.handleArray}
                                    />
                                    <Tag
                                        label="Biology"
                                        value="8"
                                        onChange={this.handleArray}
                                    />
                                    <Tag
                                        label="Technology"
                                        value="9"
                                        onChange={this.handleArray}
                                    />
                                </div>

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

export default popUp