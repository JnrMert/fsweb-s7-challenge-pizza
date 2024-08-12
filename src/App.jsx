import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Route path="/" exact component={HomePage} />
      </Router>
    </>
  );
}

export default App;
