import React from 'react'
import './styles/style_tag.css'

const label = ({ label, value, onChange }) => (
    <label className="tag__container">
        <div className="tag__point"></div>
        <input name="labels" type="checkbox" value={value} onChange={onChange}/>
        <div className="tag__checkmark"><div className="tag__point"></div>{label}</div>
        
    </label>
)

export default label