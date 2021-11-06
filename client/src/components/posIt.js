import React from 'react'
import CloseIcon from "../images/close_postIt_icon.svg"
import "./styles/style_postIt.css"

const posIt = ({ name, description }) => {
    return (
        <div className="postIt__container">
            <div>
                <p className="postIt_name">{name}</p>
                <img src={CloseIcon} />
            </div>
            <p className="postIt_description">{description}</p>
        </div>
    );
};

export default posIt;