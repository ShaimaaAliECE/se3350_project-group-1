import CustomLevel from "./CustomLevel";
import CustomSelection from "./CustomSelection";
import React, { useState } from 'react';


function Custom(){
    const [selection, updateSelection] = useState(true);

    function clickedFunc(){
        updateSelection(false);
    }
    if(selection){
        return (
            <CustomSelection clickedFunc={clickedFunc}></CustomSelection>
        )
    }else{
        return (
            <CustomLevel></CustomLevel>
            )
    }
}

export default Custom