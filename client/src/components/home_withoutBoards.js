import React from "react"
import "./styles/style_home_withoutBoards.css"
import noDashboards from "../images/home_noDashboards.svg"



const home_withoutBoard = () => (
    <div className="withoutBoard__container">
        <div className="withoutBoard__textContainer">
            <p className="textContainer__h2">
                You don't have any boards yet
            </p>
            <p className="textContainer__h1">
                Create one!
            </p>
        </div>
        <div className="withoutBoard__Image">
            <img src={noDashboards} />
        </div>
    </div>
)

export default home_withoutBoard