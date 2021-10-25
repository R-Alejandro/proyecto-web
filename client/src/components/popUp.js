import React from "react";
import Plus from "../images/plus_Icon.svg"
import Close from "../images/close_Icon.svg"
import { Modal, ModalBody} from "reactstrap"

import 'bootstrap/dist/css/bootstrap.min.css'
import "../components/styles/style_popUp.css"

class popUp extends React.Component {
    state={
        open: true,
        // open: false,
    }

    handleOpenModal = () =>{
        this.setState({open: !this.state.open})
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
                            <button className ="popUp_modal__closeIconContainer" onClick={this.handleOpenModal}>
                                <img src={Close}/>
                            </button>
                            <h1>Create New Dashboard</h1>
                            <form>
                                <input type="text" name="name" placeholder="Dashboard Name" onChange="" />
                                <input type="text" name="label" placeholder="label" onChange="" />
                                <input type="text" name="description" placeholder="Description" onChange="" />
                                {/* <input type={type} name={name} placeholder={label} onChange={onChange} /> */}

                            </form>
                            <input type="submit" value="CREATE"/>
                        </ModalBody>
                    </Modal>
            </>
        )
    }
}

export default popUp