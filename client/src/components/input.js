import React from "react"

const input = ({icon, label, type, name}) => (

    <label>
        <img src={icon}/>
        {label}
        <input type={type} name={name} />
        <hr/>
    </label>
)

export default input