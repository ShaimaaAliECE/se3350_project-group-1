import React, {Component} from 'react';  //import reuqired libraries 

import "./App.css";

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import CustomLevel from './Levels/CustomLevel'; //import required components from other js files
import CustomSelection from './Levels/CustomSelection';
import Tutorial from './Levels/Tutorial';

import LevelsPage from './Levels/LevelsPage';
<<<<<<< HEAD
import RetryPage from './Levels/RetryPage';
import Completed from './Levels/Completed';



=======
import Analytics from './Levels/Analytics'
>>>>>>> analytics


import Level2 from './Levels/Level2';
import Level3 from './Levels/Level3';
import Login from './Levels/Login';

//create class that will route to the beginning page
class App extends Component {
  
  render(){
    return (
      <BrowserRouter>
        <div>
            <Switch>
<<<<<<< HEAD
              <Route exact path="/Tutorial" component={Tutorial} />
              <Route exact path="/Level2" component={Level2} />
              <Route exact path="/Level3" component={Level3} />
              <Route exact path="/CustomLevel" component={CustomLevel} />
              <Route exact path="/CustomSelection" component={CustomSelection} />
              <Route exact path="/Tutorial" component={Tutorial} />
=======
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
>>>>>>> analytics
              <Route exact path="/" component={Login} />
              <Route path="/LevelsPage" component={LevelsPage} />
              <Route path = "/RetryPage" component = {RetryPage} />
              <Route path = "/Completed" component = {Completed} />
              
            </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
export default App; //export class
