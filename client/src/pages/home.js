import React, { Fragment } from "react";
import DirectionalButton from '../components/directionalButton'

const home = () => (
    <Fragment>
        <DirectionalButton
            layer="Sing In"
            route="/signin"
        />
        <DirectionalButton
            layer="Sing Up"
            route="/signup"
        />
    </Fragment>
)

export default home
