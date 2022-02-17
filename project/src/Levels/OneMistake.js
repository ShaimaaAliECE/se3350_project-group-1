import React from 'react'; //import required libraries

import {NavLink} from 'react-router-dom';

const OneMistake = () => {  //create main page 
    const screen =[];
    screen.push (
        <div>
        <div>
         <h1 class='topRectangle'> &emsp;Level Completed<button class='quitButton'> <a href= 'http://localhost:3000/LevelsPage' class="noDec"> Quit</a>  </button> <button class='analyticsButton'>Analytics</button></h1>
         </div>
          <div class="thisText">
              
          &emsp; &emsp; <img id = "pic" src="//pngset.com/images/review-star-yellow-star-no-background-symbol-star-symbol-cross-axe-transparent-png-1390703.png"  width="100" height="100" alt="blankStar"/> &emsp; &emsp; 
          <img src="//pngset.com/images/review-star-yellow-star-no-background-symbol-star-symbol-cross-axe-transparent-png-1390703.png" width="100" height="100" alt="blankStar"/> &emsp; &emsp; 
          <img src="//www.clker.com/cliparts/y/8/W/E/z/N/outlined-star-hi.png" width="100" height="100" alt="blankStar"/>
                

          
<h3> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;You have earned 2 stars!</h3>
<p> Your Time:  &emsp; &emsp; &emsp; Best Time:   </p>

       
</div>
        

       </div>   
       
    );
    if (document.referrer === "http://localhost:3000/Level2")
    {
        screen.push(<div>&emsp;<NavLink to="/Level2" class='bttn'> Play Again </NavLink>&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink></div>)
    }
    if (document.referrer === "http://localhost:3000/Level3"){
        screen.push(<div>&emsp;<NavLink to="/Level3" class='bttn'> Play Again </NavLink>&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink></div>)
    }
    return(<div>{screen}</div>);
}


export default OneMistake; //export the constant