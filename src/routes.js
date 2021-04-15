import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Dashboard from './containers/game-dashboard/game-dashboard.container'

function Routes(props) {

  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter >


  )
}

export default Routes;
