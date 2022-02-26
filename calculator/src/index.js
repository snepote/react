import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './calculator';


const expression = {one: null, two: null};
const copied = {...expression, two: 2};

console.log(copied);

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);
