import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Step1 from "./src"
//import Step2 from "./src"

const app = () => {
  return (
    <Router>
      <Switch> 
          <Route exact path = "/"><Step1 /></Route>
      </Switch>
    </Router>
  );

}

export default App;
