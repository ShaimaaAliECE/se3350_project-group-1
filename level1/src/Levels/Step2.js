import React from "react";  //import required libraries

import {Link} from 'react-router-dom';

const Step2 = () => { //create main page for step 2

    return(
        <div>
          <h1>Step 2/7</h1>
           <p>This is step 2 of the algorithm</p>
           <Link to="/Step1" > Back </Link>
       </div>   
    );
    
}

export default Step2; //export the constant

/*
<div style="width: 100%;">
            <div style="width: 10%; height: 100px; float: left;"> 
                <Link to="/Step1" > Back </Link> 
            </div>
            <div style="width: 5%; height: 100px; float: right;"> 
                <Link to="/Step3" > Next </Link>
            </div>
            <div style="margin-left: 40%; height: 100px;"> 
                <h1>Step 2/7</h1>
            </div>
        </div>



*/