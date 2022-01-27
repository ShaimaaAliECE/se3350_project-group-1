import React from 'react';
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Step1 from "./Levels/index"

import Navigation from './Levels/Navigation';
//import Step2 from "./src"

const App = () => {

  return (
    <BrowserRouter>
    <div>
    <Navigation />
      <Routes>

          <Route path="/" component={Step1} exact/>
          </Routes>
          </div>
    </BrowserRouter>
  );
  

}

export default App;