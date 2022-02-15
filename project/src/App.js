import React, {Component} from 'react';  //import reuqired libraries 

import "./App.css";

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Step1 from './Levels/Step1'; //import required components from other js files
import Step2 from './Levels/Step2';
import Step3 from './Levels/Step3';
import Step4 from './Levels/Step4';
import Step5 from './Levels/Step5';
import Step6 from './Levels/Step6';
import Step7 from './Levels/Step7';
import Step8 from './Levels/Step8';

import LevelsPage from './Levels/LevelsPage';
import Analytics from './Levels/Analytics'


import Level2 from './Levels/Level2';
import Level3 from './Levels/Level3';
import Login from './Levels/Login';
import CustomLevel from './Levels/CustomLevel';
//create class that will route to the beginning page
class App extends Component {
  
  render(){
    return (
      <BrowserRouter>
        <div>
            <Switch>
              <Route exact path="/Step1" component={Step1} />
              <Route exact path="/Step2" component={Step2} />
              <Route exact path="/Step3" component={Step3} />
              <Route exact path="/Step4" component={Step4} />
              <Route exact path="/Step5" component={Step5} />
              <Route exact path="/Step6" component={Step6} />
              <Route exact path="/Step7" component={Step7} />
              <Route exact path="/Step8" component={Step8} />
              <Route exact path="/Level2" component={Level2} />//routing for level2
              <Route exact path="/Level3" component={Level3} />//routing for level3
              <Route  path="/Analytics" ><Analytics json={"lol"}/></Route>
              <Route exact path="/" component={Login} />
              <Route path="/LevelsPage" component={LevelsPage} />
              <Route exact path="/CustomLevel" component={CustomLevel} />
            </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
export default App; //export class