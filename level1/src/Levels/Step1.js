import React from 'react'; //import required libraries

import {NavLink} from 'react-router-dom';

const Step1 = () => {  //create main page for step 1
    return (
        <div>
          <h1>&emsp; Step 1/7</h1>
          <div class="thisText">

&emsp; 1  5  6  9  4  8  3  7  2  10  <br></br>
&ensp;  &emsp; &#8601; &emsp; &emsp; &emsp; &emsp; &#8600; <br></br>
1  5  6  9  4&emsp; &emsp; 8  3  7  2  10 <br></br>
       
</div>
     <p> <i>&emsp;Step 1: Split Set into two new sublists</i></p>


        
&emsp;<NavLink to="/" class='bttn'> Back </NavLink>&emsp; &emsp; 
           <NavLink to="/Step2" class='bttn' > Next </NavLink>
           
       </div>   
    );
}

export default Step1; //export the constant

