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
            </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
export default App; //export class