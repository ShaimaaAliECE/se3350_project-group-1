import React from "react";

const Step2 = () => {

    return(
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
    );
    
}

export default Step2;

