import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import OrderPizzaPage from "./pages/OrderPizza";

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/pizza" component={OrderPizzaPage} />
    </Router>
  );
}

export default App;
