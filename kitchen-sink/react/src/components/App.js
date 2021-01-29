import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { TailwindMobileTheme } from 'tailwind-mobile/react';

import routes from '../routes';
import HomePage from '../pages/HomePage';

function App() {
  const [theme, setTheme] = useState('ios');
  return (
    <TailwindMobileTheme.Provider value={theme}>
      <div className={`relative min-h-screen ${theme}`}>
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
      </div>
    </TailwindMobileTheme.Provider>
  );
}

export default App;
