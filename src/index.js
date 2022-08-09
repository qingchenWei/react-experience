import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.less';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

const react = createRoot(document.getElementById('root'))

react.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);