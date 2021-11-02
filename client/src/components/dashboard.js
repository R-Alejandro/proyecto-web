import React, {useState, useEffect} from "react"
import "../components/styles/style_dashboard.css"
import { Link } from "react-router-dom"


class dashboard extends React.Component {

    constructor(props) {
        super(props)
    }

    route = "/dashboard/"+ this.props.tableID;
    render() {
        return (
            <Link className="dashboard__link" to={this.route}>
                <div className="dashboard__dashboard_container">
                    <div className="dashboar_container__content">
                        <div className="container__titleDashboard_container">
                            {/* ---------------Nombre del tablero-------------- */}
                            <p className="titleDashboard_title">
                                {this.props.name}
                            </p>
                            {/* ---------------ID del tablero-------------- */}
                            <p className="titleDashboard_id">
                                #{this.props.tableID.split("-", 1)}
                            </p>
                        </div>
                        <hr />
                        {/* ---------------Descripcion del tablero-------------- */}
                        <p className="dashboard__description">
                            {this.props.description}
                        </p>
                    </div>
                </div>
            </Link>
        )
    }

}

export default dashboard