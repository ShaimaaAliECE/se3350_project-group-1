import React from 'react'; //import required libraries

import {getSteps} from './Level2'; 

import {NavLink} from 'react-router-dom';

const Step1 = () => {  //create main page for step 1
    return (
        <div>
        <div>
         <h1 class='topRectangle'> &emsp;Level 1<button class='quitButton'> <a href= 'http://localhost:3000/LevelsPage' class="noDec"> Quit</a>  </button> <button class='analyticsButton'>Analytics</button></h1>
         </div>
          <h1 class="text">&emsp;Step 1/8</h1>
          <div class="thisText">
          
&emsp;&emsp; &emsp; &emsp; &emsp; 1 &ensp;&thinsp; 5 &ensp;&thinsp; 6 &ensp; &thinsp;9 &ensp;&thinsp; 4  &thinsp;&ensp;8  &thinsp;&ensp;3  &thinsp;&ensp;7 &thinsp;&ensp; 2  &thinsp;&ensp;10  <br></br>
&ensp;  &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &#8601; &emsp; &emsp; &emsp; &emsp; &#8600; &thinsp;<br></br>
&emsp; &emsp;&emsp; &emsp;1 &ensp;&thinsp;  5 &ensp;&thinsp;  6 &ensp;&thinsp;  9 &ensp;&thinsp;  4&emsp; &emsp;&ensp;&thinsp; &ensp;&thinsp;  8 &ensp;&thinsp; 3 &ensp;&thinsp;  7 &ensp;&thinsp;  2 &ensp;&thinsp;  10 <br></br>
       
</div>
     <p> <i>&emsp;Step 1: Split Set into two new sublists</i></p>


        
&emsp;<NavLink to="/LevelsPage" class='bttn'> Back </NavLink>&emsp; &emsp; &emsp; &emsp;&emsp; &emsp;
           <NavLink to="/Step2" class='bttn' > Next </NavLink> &emsp; &emsp; &emsp; &emsp;&emsp; &emsp;
           <NavLink to="/LevelsPage" class='bttn' > Levels </NavLink>
           
       </div>   
    );
}

let randomNumberArr = []
for (let i = 0; i < 10; i++) {
  randomNumberArr.push(Math.floor(Math.random() * 20) + 1)
}
const randomNumberArray = [...randomNumberArr]
let sortedArray = getSteps(randomNumberArray);

console.log(sortedArray);


export default Step1; //export the constant

