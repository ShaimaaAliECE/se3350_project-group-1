import React from "react";

import {Link} from "react-router-dom";

const Step1 = () => {
    return (
        <div style="width: 100%;">
            <div style="width: 10%; height: 100px; float: left;"> 
                <Link to="" > Back </Link> 
            </div>
            <div style="width: 5%; height: 100px; float: right;"> 
                <Link to="/Step2" > Next </Link>
            </div>
            <div style="margin-left: 40%; height: 100px;"> 
                <h1>Step 1/7</h1>
            </div>
        </div>
    );
};

export default Step1;
