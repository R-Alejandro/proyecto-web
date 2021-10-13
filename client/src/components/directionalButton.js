import React from 'react'
import { Link } from 'react-router-dom'
import './styles/style_direccionalButton.css'

const directionalButton = ({ layer, route }) => (
    <Link className="directionalButton_container" to={route}>
        {layer}
    </Link>
)

export default directionalButton