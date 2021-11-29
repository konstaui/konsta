import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { App as KonstaApp } from 'konsta/react';

import routes from '../routes.js';
import HomePage from '../pages/Home.jsx';

function App() {
  const [theme, setTheme] = useState('ios');
  useEffect(() => {
    window.setTheme = (t) => setTheme(t);
    window.setMode = (mode) => {
      if (mode === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    };
  }, []);
  const inIFrame = window.parent !== window;
  return (
    <KonstaApp theme={theme} safeAreas={!inIFrame}>
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
    </KonstaApp>
  );
}

export default App;
