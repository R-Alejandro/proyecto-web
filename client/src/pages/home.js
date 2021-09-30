import React, { Fragment } from "react";
import DirectionalButton from '../components/directionalButton'

const home = () => (
    <Fragment>
        <DirectionalButton
            layer="Sing In"
            route="/singIn"
        />
        <DirectionalButton
            layer="Sing Up"
            route="/singUp"
        />
    </Fragment>
)

export default home
