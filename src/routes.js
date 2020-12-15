import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './modules/home';
import PilotsList from './modules/pilots/pilotsList';
import StarShipsList from './modules/starships/starShipsList';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/pilots' component={PilotsList} />
    <Route path='/starships' component={StarShipsList} />
  </Switch>
);

export default Routes;
