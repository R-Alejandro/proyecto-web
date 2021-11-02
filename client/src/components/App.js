import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import landingPage from "../pages/landingPage"
import signIn from "../pages/signIn"
import signUp from "../pages/signUp"
import NotFound from '../pages/notFound'
import confirmationEmail from "../pages/confirmationEmail"
import home from "../pages/home"
import Dashboards from "../pages/dashboards"
import './styles/fonts.css'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={landingPage} />
        <Route exact path="/signin" component={signIn} />
        <Route exact path="/signup" component={signUp} />
        <Route exact path="/home" component={home} />
        <Route exact path="/confirmation/email" component={confirmationEmail} />
        <Route path="/dashboard/" component={Dashboards} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
