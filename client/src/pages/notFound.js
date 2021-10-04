import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "./../images/NF_404.svg"
import './../components/styles/style_notFound.css'

const notFound = () => (
    <div className="notFound__content">
        <div className="content__bg"></div>
        <div>
            <p>Page not found, please click  &nbsp;
            <Link to="Home">
                <a>
                    HERE
                </a>
            </Link>
            &nbsp; to go home </p>
        </div>
        <img src={NotFoundImage} />
    </div>
)

export default notFound