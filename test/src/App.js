import React from 'react';

export default function App(props) {
  if (props.name) {
    return <h1>Hello {props.name}!</h1>;
  } else {
    return <h1>Hello, stranger!</h1>;
  }
}
