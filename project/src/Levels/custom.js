import CustomLevel from "./CustomLevel";
import CustomSelection from "./CustomSelection";
import React, { useState } from 'react';


function Custom(){
    const [selection, updateSelection] = useState(true);
    const [range,updateRange]=useState(10);
    const [upper,updateUpper]=useState(40);
    const [lower,updateLower]=useState(1);

    function setUpper(newUpper){
        updateUpper(newUpper)
      }
     function  setLower(newLower){
        updateLower(newLower)
      }
      function setRange(newRange){
        updateRange(newRange)
      }
    function clickedFunc(){
        updateSelection(false);
    }
    if(selection){
        return (
            <CustomSelection clickedFunc={clickedFunc} setUpper={setUpper} setLower={setLower} setRange={setRange}></CustomSelection>
        )
    }else{
        return (
            <CustomLevel getUpper = {upper} getLower = {lower} getRange = {range}></CustomLevel>
            )
    }
}

export default Custom