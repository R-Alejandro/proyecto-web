import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../pages/home"
import singIn from "../pages/singIn"
import singUp from "../pages/singUp"
import NotFound from '../pages/notFound'
import ConfirmationEmail from "../pages/confirmationEmail"
import './styles/fonts.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/signin" component={singIn} />
        <Route exact path="/signup" component={singUp} />
        <Route exact path="/confirmation/email" component={ConfirmationEmail} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
