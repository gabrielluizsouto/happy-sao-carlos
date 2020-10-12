import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes() {
    return (
      <BrowserRouter>
        <Switch> //garantir que será exibido apenas uma rota por vez
            <Route path="/" exact component={Landing}/>
            <Route path="/app" component={OrphanagesMap}/>
        </Switch>
      </BrowserRouter>
    );
}

export default Routes;
