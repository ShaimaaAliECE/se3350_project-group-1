import React, { useState } from 'react';
import Cookies from 'universal-cookie';;
////const cookies = new Cookies();

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

  return (<div><div style={{ alignContent: 'centre' }}>
    <div>
      <h1 class='topRectangle'> &emsp;Custom Selection<button class='quitButton'><a class="noDec" href='http://localhost:3000/LevelsPage'> Quit </a> </button> <button class='analyticsButton'>Analytics</button></h1>
    </div>

    <p >Select the range and size for the merge sort array</p>
    Lower Bounds<input type="range" min="1" max="100" onChange={getLower}></input>{dataLower||1}<br></br>
    Upper Bounds<input type="range" min={dataLower} max="100" onChange={getUpper}></input>{dataUpper||10}<br></br>
    List Size<input type="range" min="2" max="50" onChange={getSize}></input>{dataSize||10}<br></br>

    <button type="submit" onClick={createInfoArray()}><a href='http://localhost:3000/CustomLevel'> Submit </a> </button>
  </div>
  </div>)
}
export default CustomSelection;