import React, { useState } from 'react';

/////////////////////////////// React Component that is for level 2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
function CustomSelection(props) {

  const [dataUpper, setDataUpper] = useState(null)
  const [dataLower, setDataLower] = useState(null)
  const [dataSize, setDataSize] = useState(null)

  function getUpper(val) {
    setDataUpper(val.target.value)
  }

  function getLower(val) {
    setDataLower(val.target.value)
  }
  function getSize(val) {
    setDataSize(val.target.value)
  }
  function createInfoArray() {

    let arr = [{ dataUpper }, { dataLower }, { dataSize }]
    //cookies.set('info', arr, { path: '/' });
// <th>{props.stats[0][1]}</th>   

   // console.log(props.arrTest[0].attempts)
   
  
  }
  //creating an array of button rows

  return (
  <div>
   
    <p>{""+props.arrTest.upper}</p>
  </div>
  )
}
export default CustomSelection;