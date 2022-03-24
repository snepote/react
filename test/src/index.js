import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './contact'
import reportWebVitals from './reportWebVitals';

const center = { lat: 0, long:0 };

ReactDOM.render(
  <React.StrictMode>
    <Contact
      name="Sebastian"
      email="sebastian@nepoteidea.com"
      site="https://nepoteidea.com"
      center={center}
     />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
