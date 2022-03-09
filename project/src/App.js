import React, {Component}  from 'react';  //import reuqired libraries 

import "./App.css";

import {
  HashRouter,
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
import Level4 from './Levels/Level4';
import Level5 from './Levels/Level5';
import Login from './Levels/Login';
import Custom from './Levels/custom';
/*
let stats=[
  {level:'1',
  attempts:0,
  timesComplete:0,
  bestTime:'N/A',
  totalTime:'00:00'},
  {level:'2',
  attempts:0,
  timesComplete:0,
  bestTime:'00:00',
  totalTime:'00:00'},
  {level:'3',
  attempts:0,
  timesComplete:0,
  bestTime:'00:00',
  totalTime:'00:00'},
  {level:'4',
  attempts:0,
  timesComplete:0,
  bestTime:'00:00',
  totalTime:'00:00'},
  {level:'5',
  attempts:0,
  timesComplete:0,
  bestTime:'00:00',
  totalTime:'00:00'}
];

//writes the JSON object to the users local storage
localStorage.setItem('Analytics', JSON.stringify(stats));
*/
//create class that will route to the beginning page
class App extends Component {

  //initializes the state of the page. THe state is used to store the range and size of the custum level.
  constructor(props){
    super(props); 
    //if(!this.state){
    this.state= {upper:40,lower:1,range:10}
    console.log("running")
    //}
  //props getting reset on new page
}
 setUpper=(newUpper)=>{
  this.setState({upper:newUpper});
}
setLower=(newLower)=>{
  this.setState({lower:newLower});
}
setRange=(newRange)=>{
  this.setState({range:newRange});
}
getUpper = ()=>{
  return this.state.upper;
}
getLower = ()=>{
  return this.state.lower;
}
getRange = ()=>{
  return this.state.range;
}

  render(){
    //console.log(this.state.upper,this.state.lower,this.state.range)
    return (
      <HashRouter>
        <div>
            <Switch>
              <Route exact path="/Tutorial" component={Tutorial} />
              <Route exact path="/Level2" component={Level2} />
              <Route exact path="/Level3" component={Level3} />
              <Route exact path="/Level4" component={Level4} />
              <Route exact path="/Level5" component={Level5} />
              <Route exact path="/Tutorial" component={Tutorial} />
              <Route exact path="/" component={Login} />
              <Route path="/Analytics" ><Analytics /></Route>
              <Route path="/CustomLevel" ><CustomLevel  arrTest ={this.state} getUpper = {this.getUpper} getLower = {this.getLower} getRange = {this.getRange}/></Route>
              <Route path="/CustomSelection" ><CustomSelection arrTest={this.state} setUpper={this.setUpper} setLower={this.setLower} setRange={this.setRange}/></Route>
              <Route path="/LevelsPage" component={LevelsPage} />
              <Route path = "/RetryPage" component = {RetryPage} />
              <Route path = "/Completed" component = {Completed} />
              <Route path = "/Level1Complete" component = {Level1Complete} />
              <Route path = "/OneMistake" component = {OneMistake} />
              <Route path = "/TwoMistakes" component = {TwoMistakes} />
              <Route path = "/Custom" component = {Custom} />
              
            </Switch>

        </div>
      </HashRouter>
    );
  }
}
export default App; //export class
