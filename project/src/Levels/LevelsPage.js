import React from 'react';  //import required libraries
 
import { NavLink } from 'react-router-dom';


function changeAnalytics(level,column,change){
   //retreive the analytics string
   let statsString=localStorage.getItem('Analytics');
   //convert to json
   let stats=JSON.parse(statsString);

   
   switch(column){
      case 1:
         stats[level-1].attempts+=change;
         
         break;
      case 2:
         stats[level-1].timesComplete+=change;
         
         break;
      case 3:
         stats[level-1].bestTime+=change;
         
         break;
      case 4:
         stats[level-1].totalTime+=change;
         
         break;
       default:
         break;
         
   }


   localStorage.setItem('Analytics', JSON.stringify(stats));
   
}



const LevelsPage = () => {    //create constant that will navigate from page to page
   const screen = [];
   
   screen.push (
      <div>
      <h1 class='topRectangle'> &emsp;Levels<button class='quitButton'><NavLink to="/" class="noDec">Logout</NavLink></button><button class='analyticsButton'><NavLink to="/Analytics" class="noDec">Analytics </NavLink></button></h1>
      </div>)

     screen.push( <div>
         <p> &emsp;Click the level 1 button to begin the merge sort algorithm tutorial </p>
         &emsp; <NavLink to="/Tutorial" class="bttnz" onClick={()=>changeAnalytics(1,1,1)}>Level 1 </NavLink>
          &emsp; &emsp; <NavLink to="/Level2" class="scndButton" onClick={()=>changeAnalytics(2,1,1)}> Level 2</NavLink>
               &emsp; &emsp; 
               
               <NavLink to="/Level3" class="thrdButton" onClick={()=>changeAnalytics(3,1,1)}>Level 3 </NavLink>
               <NavLink to="/Level4" class="fourthButton"onClick={()=>changeAnalytics(4,1,1)}>Level 4 &#128274; </NavLink>
               <NavLink to="/Level5" class="fifthButton"onClick={()=>changeAnalytics(5,1,1)}>Level 5 &#128274;</NavLink>
               <NavLink to="/custom" class="sixthButton">Custom Level </NavLink> </div>);

   
       /*if(document.referrer === "http://localhost:3000/RetryPage" || ""){
            screen.push(<div>
               <NavLink to="/Level2" class="scndButton">Level 2  </NavLink>
               &emsp; &emsp; 
               <NavLink to="/Level3" class="thirdButton">Level 3 &#128274; </NavLink>
               <NavLink to="/LevelsPage" class="fourthButton">Level 4 &#128274;</NavLink>
               <NavLink to="/LevelsPage" class="fifthButton">Level 5 &#128274;</NavLink>
               <NavLink to="/CustomSelection" class="sixthButton">Custom Level</NavLink></div>);
         }*/
         //check if level 1 unlocked 
        /* if(document.referrer === "http://localhost:3000/Level1Complete"){
            screen.push(<div>
               <NavLink to="/Level2" class="scndButton">Level 2  </NavLink>
               &emsp; &emsp; 
               <NavLink to="/Level3" class="thirdButton">Level 3 &#128274; </NavLink>
               <NavLink to="/LevelsPage" class="fourthButton">Level 4 &#128274;</NavLink>
               <NavLink to="/LevelsPage" class="fifthButton">Level 5 &#128274;</NavLink>
               <NavLink to="/CustomSelection" class="sixthButton">Custom Level</NavLink></div>);
         }

         else if(document.referrer === "http://localhost:3000/Level2"){
            screen.push(<div>
               <NavLink to="/Level2" class="scndButton">Level 2  </NavLink>
               &emsp; &emsp; 
               <NavLink to="/Level3" class="thrdButton">Level 3 </NavLink>
               <NavLink to="/LevelsPage" class="fourthButton">Level 4 &#128274;</NavLink>
               <NavLink to="/LevelsPage" class="fifthButton">Level 5 &#128274;</NavLink>
               <NavLink to="/CustomSelection" class="sixthButton">Custom Level</NavLink></div>);
         }
         else if(document.referrer === "http://localhost:3000/Level3"){
            screen.push(<div>
               <NavLink to="/Level2" class="scndButton">Level 2  </NavLink>
               &emsp; &emsp; 
               <NavLink to="/Level3" class="thrdButton">Level 3 </NavLink>
               <NavLink to="/LevelsPage" class="fourthButton">Level 4 </NavLink>
               <NavLink to="/LevelsPage" class="fifthButton">Level 5 &#128274;</NavLink>
               <NavLink to="/CustomSelection" class="sixthButton">Custom Level</NavLink></div>);
         }

         else {
          screen.push(<div>
          <NavLink to="/Level2" class="secondButton">Level 2 &#128274; </NavLink>
          &emsp; &emsp; 
          <NavLink to="/Level3" class="thirdButton">Level 3&#128274; </NavLink>
          <NavLink to="/LevelsPage" class="fourthButton">Level 4 &#128274;</NavLink>
          <NavLink to="/LevelsPage" class="fifthButton">Level 5 &#128274;</NavLink>
          <NavLink to="/CustomSelection" class="sixthButton">Custom Level</NavLink></div>);
          }
          */

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