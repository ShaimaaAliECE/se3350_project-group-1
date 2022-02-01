import React from "react";  //import required libraries

import {NavLink} from 'react-router-dom';

const Step5 = () => { //create main page for step 4

    return(
        <div>
            <h1>Step 5/7</h1>

            &emsp; 1 &emsp; 5 <br></br>
            &ensp; &ensp;&ensp;&#8600;&#8601; <br></br>
            &nbsp; &ensp;&ensp;     1  5 <br></br>

            &emsp; 6 &emsp; 9 <br></br>
            &ensp; &ensp;&ensp;&#8600;&#8601; <br></br>
            &nbsp; &ensp;    6  9 <br></br>

            &emsp; 4 &emsp; 8 <br></br>
            &ensp; &ensp;&ensp;&#8600;&#8601; <br></br>
            &nbsp; &ensp; &ensp;   4  8 <br></br>

            &emsp; 3 &emsp; 7 <br></br>
            &ensp; &ensp;&ensp;&#8600;&#8601; <br></br>
            &nbsp; &ensp;    3  7 <br></br>
            
            &emsp; 2 &emsp; 10 <br></br>
            &ensp; &ensp;&ensp;&#8600;&#8601; <br></br>
            &nbsp; &ensp;  2  10 <br></br>


          
    
            <p> Step 5: Rejoin exisiting subsets into individual subsets</p>

            <NavLink to="/Step4" > Back <br></br></NavLink> 
           <NavLink to="/Step6" > Next </NavLink>
        </div>      
  );
    
}


export default Step5; //export the constant

