import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from './toggle.js';
import './index.css';

function App(props) {
  return(
    <div>
      <h1>Hello</h1>
      <Toggle />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
