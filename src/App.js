import React from "react";
import './App.css';
import Container from "./Container"

export default function App() {
  return (
    <div className="App">
      <h1>API Tester</h1>
      <h2>Enter an API URL below to test an endpoint</h2>
      <Container />
    </div>
  );
}
