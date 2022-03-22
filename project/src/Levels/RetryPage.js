import React from 'react'; //import required libraries
import {useHistory} from "react-router-dom";
import {NavLink} from 'react-router-dom';


//const screen = [];
const RetryPage = () => {  //create main page 
    const screen = [];
    const history = useHistory();
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
    screen.push(<div>&emsp;<button  onClick={() => history.go(-1)} class='bttn'> Try Again </button>&emsp; &emsp; &emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
    <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink></div>)

    
    return(<div>{screen}</div>);
}

export default RetryPage; //export the constant

