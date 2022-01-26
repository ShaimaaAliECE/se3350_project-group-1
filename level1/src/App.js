import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Step1 from "./Levels"
//import Step2 from "./src"

const App = () => {
  
  return (
    <Router>
      <Routes>
          <Route exact path = "/"><Step1 /></Route>
          </Routes>
    </Router>
  );
  

}

export default App;