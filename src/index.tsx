import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.scss'

import './fonts/MazzardH-Bold.otf'
import './fonts/MazzardH-Medium.woff2'
import './fonts/MazzardH-Regular.woff2'
import './fonts/Move-X-Bold.otf'
import './fonts/NeueMachina-Medium.woff2'
import './fonts/NeueMachina-Bold.woff2'
import './fonts/NeueMachina-Regular.woff2'
import './fonts/TTOctosquares-Medium.otf'
import './fonts/TTOctosquares-Regular.otf'

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
