import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { TailwindMobileProvider } from 'tailwind-mobile/react';

import routes from '../routes';
import HomePage from '../pages/HomePage';

function App() {
  const [theme, setTheme] = useState('ios');
  return (
    <TailwindMobileProvider theme={theme}>
      <div
        className={`absolute left-0 top-0 w-full h-full min-h-screen twm-${theme}`}
      >
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
    </TailwindMobileProvider>
  );
}

export default App;
