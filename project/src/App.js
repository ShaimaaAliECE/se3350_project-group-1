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
import RetryPage from './Levels/RetryPage';
import Completed from './Levels/Completed';
import Level1Complete from './Levels/Level1Complete';
import OneMistake from './Levels/OneMistake';
import TwoMistakes from './Levels/TwoMistakes';


import Analytics from './Levels/Analytics'


import Level2 from './Levels/Level2';
import Level3 from './Levels/Level3';
import Login from './Levels/Login';


let stats=[
  {level:'1',
  attempts:0,
  timesComplete:0,
  bestTime:'N/A',
  totalTime:'N/A'},
  {level:'2',
  attempts:0,
  timesComplete:0,
  bestTime:'N/A',
  totalTime:'N/A'},
  {level:'3',
  attempts:0,
  timesComplete:0,
  bestTime:'N/A',
  totalTime:'N/A'},
  {level:'4',
  attempts:0,
  timesComplete:0,
  bestTime:'N/A',
  totalTime:'N/A'},
  {level:'5',
  attempts:0,
  timesComplete:0,
  bestTime:'N/A',
  totalTime:'N/A'},
]

//create class that will route to the beginning page
class App extends Component {
  
  render(){
    return (
      <BrowserRouter>
        <div>
            <Switch>
              <Route exact path="/Tutorial" component={Tutorial} />
              <Route exact path="/Level2" component={Level2} />
              <Route exact path="/Level3" component={Level3} />
              <Route exact path="/CustomLevel" component={CustomLevel} />
              <Route exact path="/CustomSelection" component={CustomSelection} />
              <Route exact path="/Tutorial" component={Tutorial} />
              <Route exact path="/" component={Login} />
              <Route  path="/Analytics" ><Analytics stats={stats}/></Route>
              <Route path="/LevelsPage" component={LevelsPage} />
              <Route path = "/RetryPage" component = {RetryPage} />
              <Route path = "/Completed" component = {Completed} />
              <Route path = "/Level1Complete" component = {Level1Complete} />
              <Route path = "/OneMistake" component = {OneMistake} />
              <Route path = "/TwoMistakes" component = {TwoMistakes} />
              
            </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
export default App; //export class
