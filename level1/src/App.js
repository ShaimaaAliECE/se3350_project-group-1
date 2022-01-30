import React, {Component} from 'react';  //import reuqired libraries 

import "./App.css";

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Step1 from './Levels/Step1'; //import required components from other js files
import Step2 from './Levels/Step2';

import Navigation from './Levels/Navigation';

import Level2 from './Levels/Level2';
//create class that will route to the beginning page
class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
         <Navigation />
            <Switch>
              <Route exact path="/Step1" component={Step1} />
              <Route exact path="/Step2" component={Step2} />

              <Route exact path="/Level2" component={Level2} />//routing for level2
            </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
export default App; //export class