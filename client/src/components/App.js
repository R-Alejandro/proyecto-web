import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../pages/home"
import singIn from "../pages/singIn"
import singUp from "../pages/singUp"
import NotFound from '../pages/notFound'
import './styles/fonts.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/singIn" component={singIn} />
        <Route exact path="/singUp" component={singUp} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
