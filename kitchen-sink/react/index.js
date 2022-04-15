import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './components/App';

const root = createRoot(document.getElementById('app'));
root.render(React.createElement(App));
