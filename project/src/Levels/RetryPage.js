import React from 'react'; //import required libraries

import {NavLink} from 'react-router-dom';
const screen = [];
const RetryPage = () => {  //create main page 
    const screen = [];
    screen.push (
        <div>
        <div>
         <h1 class='topRectangle'> &emsp;Level Failed<button class='quitButton'> <NavLink to="/LevelsPage" class="noDec">Quit</NavLink> </button> <button class='analyticsButton'><NavLink to="/Analytics" class="noDec">Analytics</NavLink></button></h1>
         </div>
          <div class="thisText">
              
          &emsp; &emsp; <img id = "pic" src="//www.clker.com/cliparts/y/8/W/E/z/N/outlined-star-hi.png"  width="100" height="100" alt="blankStar"/> &emsp; &emsp; 
          <img src="//www.clker.com/cliparts/y/8/W/E/z/N/outlined-star-hi.png" width="100" height="100" alt="blankStar"/> &emsp; &emsp; 
          <img src="//www.clker.com/cliparts/y/8/W/E/z/N/outlined-star-hi.png" width="100" height="100" alt="blankStar"/>
                

          
<h3> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;You made 3 mistakes</h3>
<p> Your Time:  &emsp; &emsp; &emsp; Best Time:   </p>

       
</div>
                   
       </div>   
    );
    if (document.referrer === "http://localhost:3000/Level2")
    {
        screen.push(<div>&emsp;<NavLink to="/Level2" class='bttn'> Try Again </NavLink>&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink></div>)
    }
    if (document.referrer === "http://localhost:3000/Level3"){
        screen.push(<div>&emsp;<NavLink to="/Level3" class='bttn'> Try Again </NavLink>&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink></div>)
    }
    return(<div>{screen}</div>);
}

export default RetryPage; //export the constant

