import React from 'react'
import './styles/style_tag.css'

const label = ({ name, value, onChange }) => (
    <label className="tag__container">
        <div className="tag__point"></div>
        <input type="checkbox" value={value} onChange={onChange}/>
        <div className="tag__checkmark"><div className="tag__point"></div>{name}</div>
        
    </label>
)

export default label