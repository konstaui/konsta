import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { App as TailwindMobileApp } from 'tailwind-mobile/react';

import routes from '../routes.js';
import HomePage from '../pages/Home.jsx';

function App() {
  const [theme, setTheme] = useState('ios');
  return (
    <TailwindMobileApp theme={theme}>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path}>
              <route.component />
            </Route>
          ))}
          <Route path="/">
            <HomePage theme={theme} setTheme={setTheme} />
          </Route>
        </Switch>
      </Router>
    </TailwindMobileApp>
  );
}

export default App;
