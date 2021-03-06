import React from 'react'; //import required libraries
import {useHistory} from "react-router-dom";
import {NavLink} from 'react-router-dom';

const Completed = () => { 
    const screen=[]; //create main page 
    const history = useHistory();
    screen.push (
        <div>
        <div>
         <h1 class='topRectangle'> &emsp;Level Completed<button class='quitButton'> <a href= '#/LevelsPage' class="noDec"> Quit</a>  </button> <button class='analyticsButton'>Analytics</button></h1>
         </div>
          <div class="thisText">
              
          &emsp; &emsp; <img id = "pic" src="http://www.clker.com/cliparts/K/N/J/9/5/E/star-md.png"  width="100" height="100" alt="blankStar"/> &emsp; &emsp; 
          <img src="http://www.clker.com/cliparts/K/N/J/9/5/E/star-md.png" width="100" height="100" alt="blankStar"/> &emsp; &emsp; 
          <img src="http://www.clker.com/cliparts/K/N/J/9/5/E/star-md.png" width="100" height="100" alt="blankStar"/> 
          
<h3> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;You have earned 3 stars!</h3>
<p> Your Time:  &emsp; &emsp; &emsp; Best Time:   </p>

       
</div>
       </div>   
       
    );
    
    screen.push(<div>&emsp;<button  onClick={() => history.goBack()} class='bttn'> Play Again </button>&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink></div>)
    return(<div>{screen}</div>);
    
}


export default Completed; //export the constant