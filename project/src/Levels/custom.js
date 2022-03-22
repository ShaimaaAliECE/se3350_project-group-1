import CustomLevel from "./CustomLevel";
import CustomSelection from "./CustomSelection";
import React, { useState } from 'react';


function Custom() {
    //states for custom level
    //setting default values
    const [selection, updateSelection] = useState(true);
    const [range, updateRange] = useState(10);
    const [upper, updateUpper] = useState(40);
    const [lower, updateLower] = useState(1);
    //Function to get the upper value of the range
    function setUpper(newUpper) {
        updateUpper(newUpper)
    }
    //function to get the lower value of the range
    function setLower(newLower) {
        updateLower(newLower)
    }
    //function to get the array size from the slider
    function setRange(newRange) {
        updateRange(newRange)
    }
    //function when the button is clicked
    function clickedFunc() {
        updateSelection(false);
    }
    //start with the selection screen the create/go to the custom level when the parameters are set up
    if (selection) {
        return (
            <CustomSelection clickedFunc={clickedFunc} setUpper={setUpper} setLower={setLower} setRange={setRange}></CustomSelection>
        )
    } else {
        return (
            <CustomLevel getUpper={upper} getLower={lower} getRange={range}></CustomLevel>
        )
    }
}

export default Custom