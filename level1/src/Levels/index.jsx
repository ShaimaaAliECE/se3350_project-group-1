import React from "react";

import {Link} from "react-router-dom";

const Step1 = () => {
    return (
        <div style="width: 100%;">
            <div style="width: 60%; height: 100px; float: left;"> 
            <h3> Step 1/7 </h3> 
            </div>
            <div style="margin-left: 90%; height: 100px; "> 
                <Link to="/Step2" > Next </Link>
            </div>
        </div>
    );
};

export default Step1;
