import React from "react"
import "../components/styles/style_dashboard.css"

class dashboard extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="dashboard__dashboard_container">
                <div className="dashboar_container__content">
                    <div className="container__titleDashboard_container">
                        {/* ---------------Nombre del tablero-------------- */}
                        <p className="titleDashboard_title">
                            {this.props.name}
                        </p>
                        {/* ---------------ID del tablero-------------- */}
                        <p className="titleDashboard_id">
                            #{this.props.tableID}
                        </p>
                    </div>
                    <hr />
                    {/* ---------------Descripcion del tablero-------------- */}
                    <p className="dashboard__description">
                        {this.props.description}
                    </p>
                </div>
            </div>
        )
    }

}

export default dashboard