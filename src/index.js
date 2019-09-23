import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function addNumbers(number1, number2) {
  return number1+number2;
}

// const addNumbers = function (number1, number2) {
//   return number1+number2;
// }

const addNumbers = (num1) => num1*num1;

addNumbers(2);  // answer = 4

