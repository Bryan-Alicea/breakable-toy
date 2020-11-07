import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import LeagueIndexContainer from "./LeagueIndexContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LeagueIndexContainer}/>
        <Route exact path="/leagues" component={LeagueIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
