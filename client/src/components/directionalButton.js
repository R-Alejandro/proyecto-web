import React from 'react'
import {Link} from 'react-router-dom'
import './styles/style_direccionalButton.css'

const directionalButton = ({ layer , route}) => (
    <div className="directionalButton_container">
        <Link to={route}>
            <a>
                {layer}
            </a>
        </Link>
    </div>
)

export default directionalButton