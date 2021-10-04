import React from "react"
import {Link} from 'react-router-dom'
import './styles/style_left_singDirection.css'

const singDirection = ({route, label, color}) =>(
    <div className={color}>
        <Link to={route}>
            <a >
                {label}
            </a>
        </Link>
    </div>
)

export default singDirection