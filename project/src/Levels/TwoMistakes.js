import React from 'react'; //import required libraries
import {useHistory} from "react-router-dom";
import {NavLink} from 'react-router-dom';

const TwoMistakes = () => {  //create main page 
    const screen = [];
    const history = useHistory();
    screen.push (
        <div>
        <div>
         <h1 class='topRectangle'> &emsp;Level Completed<button class='quitButton'> <a href= 'http://localhost:3000/LevelsPage' class="noDec"> Quit</a>  </button> <button class='analyticsButton'>Analytics</button></h1>
         </div>
          <div class="thisText">
              
          &emsp; &emsp; <img id = "pic" src="http://www.clker.com/cliparts/K/N/J/9/5/E/star-md.png"  width="100" height="100" alt="blankStar"/> &emsp; &emsp; 
          <img src="//www.clker.com/cliparts/y/8/W/E/z/N/outlined-star-hi.png" width="100" height="100" alt="blankStar"/>&emsp; &emsp;
          <img src="//www.clker.com/cliparts/y/8/W/E/z/N/outlined-star-hi.png" width="100" height="100" alt="blankStar"/>
<h3> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;You have earned 1 star!</h3>
<p> Your Time:  &emsp; &emsp; &emsp; Best Time:   </p>

       
</div>
        
       </div>   
       
    );
   /* if (document.referrer === "http://localhost:3000/Level2")
    {
        screen.push(<div>&emsp;<NavLink to="/Level2" class='bttn'> Play Again </NavLink>&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink></div>)
    }
    if (document.referrer === "http://localhost:3000/Level3"){
        screen.push(<div>&emsp;<NavLink to="/Level3" class='bttn'> Play Again </NavLink>&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink></div>)
    }
    */
    screen.push(<div>&emsp;<button  onClick={() => history.goBack()} class='bttn'> Play Again </button>&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink></div>)
    return(<div>{screen}</div>);
}


export default TwoMistakes; //export the constant