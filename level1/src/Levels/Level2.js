import React, { useState } from 'react';
import ButtonRow from "../components/ButtonRow.js";

function Level2() {
  let numbersR1 = Array.from({length: 10}, () => Math.floor(Math.random() * 20)+ 1);
  
  const [numbersR2, updateR2]=useState([1,1,1,1,1,1,1,1,1,1])
  function rowClick(val,index){
    
    updateR2((numbersR2)=>{
      return [
        ...numbersR2.slice(0, index),
        numbersR2[index] =val,
        ...numbersR2.slice(index + 1),
      ]
    });

}

  return (
  <div>
    <p>This is level 2</p>
    <ButtonRow numbers={numbersR1}  rowClick={rowClick}></ButtonRow>
    <ButtonRow numbers={numbersR2}  rowClick={rowClick}></ButtonRow>
    
  </div>
  );
}

export default Level2;
