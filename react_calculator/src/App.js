import React from "react";
import "./styles.css";
import {Add,Sub,Mul,Div} from './Calc'

export default function App() {
  return (
    <div className="App">
      <h1>additon of two number is {Add(1,2)}</h1>
      <h1>subtraction of two number is {Sub(1,2)}</h1>
      <h1>multiplication of two number is {Mul(1,2)}</h1>
      <h1>division of two number is {Div(1,2)}</h1>
    </div>
  );
}
