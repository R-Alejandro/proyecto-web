import React from "react"
import './styles/style_input_singing.css'

const input = ({ icon, label, type, name }) => (

    <div className="singing__contentInput">
        <div className="contentInput__input">
            <img src={icon} />
            <input type={type} name={name} placeholder={label} />
        </div>
        <hr className="contentInput__bar"/>
    </div>
)

export default input