import React from "react"
import './styles/style_input_singing.css'

const input = ({ icon, label, type, name, onChange }) => (

    <div className="singing__contentInput">
        <div className="contentInput__input">
            <img src={icon} />
            <input type={type} name={name} placeholder={label} onChange={onChange} />
        </div>
        <hr className="contentInput__bar"/>
    </div>
)

export default input