import React from 'react'; //import required libraries

import {NavLink} from 'react-router-dom';

const Step8 = () => {  //create main page for step 1
    return (
        <div>
          <h1>Step 8/8</h1>
      
1  5  6  9  4&emsp; &emsp; 2  3  7  8  10 <br></br>
&ensp;  &emsp; &#8600; &emsp; &emsp; &emsp; &emsp; &#8601; <br></br>
&emsp; 1  2  3  4  5  6  7  8  9  10  <br></br>

    
<p> Step 7: Rejoin last two subsets into final set</p>

        
           <NavLink to="/Step7" > Back </NavLink>
           <NavLink to="/" > Next </NavLink>
           
       </div>   
    );
}

export default Step8; //export the constant

