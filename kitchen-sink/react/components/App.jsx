import React, { useEffect, useLayoutEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App as KonstaApp } from 'konsta/react';

import routes from '../routes.js';
import HomePage from '../pages/Home.jsx';

function App() {
  const [theme, setTheme] = useState(
    window.location.search.includes('theme=material') ? 'material' : 'ios'
  );
  const [currentColorTheme, setCurrentColorTheme] = useState('');
  const [currentVibrant, setCurrentVibrant] = useState(false);
  const [currentMonochrome, setCurrentMonochrome] = useState(false);
  const setVibrant = (value) => {
    const htmlEl = document.documentElement;
    if (value) {
      htmlEl.classList.add('k-md-vibrant');
    } else {
      htmlEl.classList.remove('k-md-vibrant');
    }
    setCurrentVibrant(value);
  };
  const setMonochrome = (value) => {
    const htmlEl = document.documentElement;
    if (value) {
      htmlEl.classList.add('k-md-monochrome');
    } else {
      htmlEl.classList.remove('k-md-monochrome');
    }
    setCurrentMonochrome(value);
  };
  const setColorTheme = (color) => {
    const htmlEl = document.documentElement;
    htmlEl.classList.forEach((c) => {
      if (c.includes('k-color')) htmlEl.classList.remove(c);
    });
    if (color) htmlEl.classList.add(color);
    setCurrentColorTheme(color);
  };
  useEffect(() => {
    window.setTheme = (t) => setTheme(t);
    window.setMode = (mode) => {
      if (mode === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    };
  }, []);
  const inIFrame = window.parent !== window;
  useLayoutEffect(() => {
    if (window.location.href.includes('safe-areas')) {
      const html = document.documentElement;
      if (html) {
        html.style.setProperty(
          '--k-safe-area-top',
          theme === 'ios' ? '44px' : '24px'
        );
        html.style.setProperty('--k-safe-area-bottom', '34px');
      }
    }
  }, [theme]);
  return (
    <KonstaApp theme={theme} safeAreas={!inIFrame}>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
          <Route
            path="/"
            element={
              <HomePage
                theme={theme}
                setTheme={setTheme}
                colorTheme={currentColorTheme}
                setColorTheme={setColorTheme}
                vibrant={currentVibrant}
                setVibrant={setVibrant}
                monochrome={currentMonochrome}
                setMonochrome={setMonochrome}
              />
            }
          />
        </Routes>
      </Router>
    </KonstaApp>
  );
}

export default App;
