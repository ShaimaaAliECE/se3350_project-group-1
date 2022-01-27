import React, {Component} from 'react';

import "./App.css";

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Step1 from './Levels/Step1';
import Step2 from './Levels/Step2';

import Navigation from './Levels/Navigation';


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
         <Navigation />
            <Switch>
              <Route path="/Step1" component={Step1} />
              <Route path="/Step2" component={Step2} />
            </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
export default App;