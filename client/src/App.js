import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div>
      <Router>
        <div>
        <Route exact path="/" component={Home} />
        </div>
      </Router>
      </div>
      </div>
    );
  }
}

export default App;
