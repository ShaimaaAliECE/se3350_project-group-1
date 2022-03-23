import React from 'react';  //import required libraries
 import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import changeAnalytics from './changeAnalytics';


//holds the sates for the differnent levels
class Levels extends React.Component {
   constructor(props) {
     super(props);
     this.state = {number: 1};
    
   }
   //adjusts state to num variable value
   changeState=(num) => {
      this.state = {number: num};
    }
    //gets the currentstate
    getState=() => {
      return this.state.number;
    }
    //never really called
    render = () => {
      return(
         <div>
         <p> &emsp;Click the level 1 button to begin the merge sort algorithm tutorial </p>
         &emsp; <NavLink to="/Tutorial" class="bttnz" onClick={()=>changeAnalytics(1,1,1)}>Level 1 </NavLink>
          &emsp; &emsp; </div>
      ); 
   }
 }
//instance of lvels class that holds the current state
 let abc= new Levels;
abc.changeState();

 export function newstate(num) {
    //only changes the state if it is higher than current value
 if (abc.getState()>num)
 {
    //
 }
 else 
   abc.changeState(num);
   alert("TEST! The current state is: "+abc.getState());//for testing just to make sure everything is okay
}
//returns state
export function getstate() {
 
   return abc.getState();
 
}

const LevelsPage = () => {    //create constant that will navigate from page to page
   const screen = [];
   
   screen.push (
      <div>
      <h1 class='topRectangle'> &emsp;Levels<button class='quitButton'><NavLink to="/" class="noDec">Logout</NavLink></button><button class='analyticsButton'><NavLink to="/Analytics" class="noDec">Analytics </NavLink></button></h1>
      </div>)

     //pushes a diffent screen based on the state number value; shows buttons locked unless its t proper state
      if (abc.state.number==2) {
         screen.push( <div>
         <p> &emsp;Click the level 1 button to begin the merge sort algorithm tutorial </p>
         &emsp; <NavLink to="/Tutorial" class="bttnz" onClick={()=>changeAnalytics(1,1,1)}>Level 1 </NavLink>
          &emsp; &emsp; <NavLink to="/Level2" class="scndButton" onClick={()=>changeAnalytics(2,1,1)}> Level 2</NavLink>
               &emsp; &emsp; 
               <NavLink to="/LevelsPage" class="thrdButton2" onClick={()=>changeAnalytics(3,1,1)}>Level 3 &#128274;</NavLink>
               <NavLink to="/LevelsPage" class="fourthButton2"onClick={()=>changeAnalytics(4,1,1)}>Level 4 &#128274; </NavLink>
               <NavLink to="/LevelsPage" class="fifthButton2"onClick={()=>changeAnalytics(5,1,1)}>Level 5 &#128274;</NavLink>
         </div>);
      }
     else  if (abc.state.number==3) {
         screen.push( <div>
         <p> &emsp;Click the level 1 button to begin the merge sort algorithm tutorial </p>
         &emsp; <NavLink to="/Tutorial" class="bttnz" onClick={()=>changeAnalytics(1,1,1)}>Level 1 </NavLink>
          &emsp; &emsp; <NavLink to="/Level2" class="scndButton" onClick={()=>changeAnalytics(2,1,1)}> Level 2</NavLink>
               &emsp; &emsp; 
               <NavLink to="/Level3" class="thrdButton" onClick={()=>changeAnalytics(3,1,1)}>Level 3 </NavLink>
               <NavLink to="/LevelsPage" class="fourthButton2"onClick={()=>changeAnalytics(4,1,1)}>Level 4 &#128274; </NavLink>
               <NavLink to="/LevelsPage" class="fifthButton2"onClick={()=>changeAnalytics(5,1,1)}>Level 5 &#128274;</NavLink>
     </div>);
      }
      else if (abc.state.number==4) {
         screen.push( <div>
         <p> &emsp;Click the level 1 button to begin the merge sort algorithm tutorial </p>
         &emsp; <NavLink to="/Tutorial" class="bttnz" onClick={()=>changeAnalytics(1,1,1)}>Level 1 </NavLink>
          &emsp; &emsp; <NavLink to="/Level2" class="scndButton" onClick={()=>changeAnalytics(2,1,1)}> Level 2</NavLink>
               &emsp; &emsp; 
               <NavLink to="/Level3" class="thrdButton" onClick={()=>changeAnalytics(3,1,1)}>Level 3 </NavLink>
               <NavLink to="/Level4" class="fourthButton"onClick={()=>changeAnalytics(4,1,1)}>Level 4 </NavLink>
               <NavLink to="/LevelsPage" class="fifthButton2"onClick={()=>changeAnalytics(5,1,1)}>Level 5 &#128274;</NavLink>
                </div>);
      }
      else if (abc.state.number==5) {
         screen.push( <div>
         <p> &emsp;Click the level 1 button to begin the merge sort algorithm tutorial </p>
         &emsp; <NavLink to="/Tutorial" class="bttnz" onClick={()=>changeAnalytics(1,1,1)}>Level 1 </NavLink>
          &emsp; &emsp; <NavLink to="/Level2" class="scndButton" onClick={()=>changeAnalytics(2,1,1)}> Level 2</NavLink>
               &emsp; &emsp; 
               
               <NavLink to="/Level3" class="thrdButton" onClick={()=>changeAnalytics(3,1,1)}>Level 3 </NavLink>
               <NavLink to="/Level4" class="fourthButton"onClick={()=>changeAnalytics(4,1,1)}>Level 4  </NavLink>
               <NavLink to="/Level5" class="fifthButton"onClick={()=>changeAnalytics(5,1,1)}>Level 5 </NavLink>
         </div>);
      }
      else if (abc.state.number==6) {
         screen.push( <div>
         <p> &emsp;Click the level 1 button to begin the merge sort algorithm tutorial </p>
         &emsp; <NavLink to="/Tutorial" class="bttnz" onClick={()=>changeAnalytics(1,1,1)}>Level 1 </NavLink>
          &emsp; &emsp; <NavLink to="/Level2" class="scndButton" onClick={()=>changeAnalytics(2,1,1)}> Level 2</NavLink>
               &emsp; &emsp; 
               
               <NavLink to="/Level3" class="thrdButton" onClick={()=>changeAnalytics(3,1,1)}>Level 3 </NavLink>
               <NavLink to="/Level4" class="fourthButton"onClick={()=>changeAnalytics(4,1,1)}>Level 4  </NavLink>
               <NavLink to="/Level5" class="fifthButton"onClick={()=>changeAnalytics(5,1,1)}>Level 5</NavLink>
               <NavLink to="/custom" class="sixthButton">Custom Level </NavLink> </div>);
      }
      //default screen
      else {
         screen.push( <div>
            <p> &emsp;Click the level 1 button to begin the merge sort algorithm tutorial </p>
            &emsp; <NavLink to="/Tutorial" class="bttnz" onClick={()=>changeAnalytics(1,1,1)}>Level 1 </NavLink>
             &emsp; &emsp; <NavLink to="/LevelsPage" class="scndButton2" onClick={()=>changeAnalytics(2,1,1)}> Level 2 &#128274;</NavLink>
                  &emsp; &emsp;
                  <NavLink to="/LevelsPage" class="thrdButton2" onClick={()=>changeAnalytics(3,1,1)}>Level 3 &#128274;</NavLink>
                  <NavLink to="/LevelsPage" class="fourthButton2"onClick={()=>changeAnalytics(4,1,1)}>Level 4 &#128274; </NavLink>
                  <NavLink to="/LevelsPage" class="fifthButton2"onClick={()=>changeAnalytics(5,1,1)}>Level 5 &#128274;</NavLink>
                 </div>);
      }
   
       

            screen.push(
         <div class="wrap">
         <button class="button"> MergeSort </button>
         <br></br>
         <br></br>
         <br></br>
         <button class="gbutton"> QuickSort &#128274;</button>
         <br></br>
         <br></br>
         <br></br>
         <button class="gbutton">BubbleSort &#128274;</button>
         
         </div>);
      
      return(<div>{screen}</div>);
}

export default LevelsPage; //export constant