import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

/////////////////////////////// React Component that is for level 2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
function CustomSelection(props) {

  const [dataUpper, setDataUpper] = useState(null)
  const [dataLower, setDataLower] = useState(null)
  const [dataSize, setDataSize] = useState(null)
  //all 3 sliders must be updated to proceed
  const [s1, sets1] = React.useState("")
  const [s2, sets2] = React.useState("")
  const [s3, sets3] = React.useState("")
  //slider records the upper value and if the slider has be "activated" or not
  function getUpper(val) {
    setDataUpper(val.target.value)
    props.setUpper(val.target.value)
    sets1(val.target.value)
  }
  //slider records the lower value and if the slider has be "activated" or not
  function getLower(val) {
    setDataLower(val.target.value)
    props.setLower(val.target.value)
    sets2(val.target.value)
  }
  //slider records the size value and if the slider has be "activated" or not
  function getSize(val) {
    setDataSize(val.target.value)
    props.setRange(val.target.value)
    sets3(val.target.value)
  }


//all sliders must be activated for the button to be enabled and the lower bounds cannot be above the upper bounds
  return (
    <div><div style={{ alignContent: 'centre' }}>
      <div>
        <h1 class='topRectangle'> &emsp;Custom Selection<button class='quitButton'> <NavLink to="/LevelsPage" class="noDec">Quit</NavLink> </button> <button class='analyticsButton'><NavLink to="/Analytics" class="noDec">Analytics</NavLink></button></h1>
      </div>
      <center><p >Select the range and size for the merge sort array</p></center>
      Lower Bounds<input type="range" min="1" max="200" onChange={getLower}></input>{dataLower}<br></br>
      Upper Bounds<input type="range" min={dataLower} max="200" onChange={getUpper}></input>{dataUpper}<br></br>
      List Size &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="range" min="2" max="30" onChange={getSize}></input>{dataSize}<br></br>

      <button disabled={!s1 || !s2 || !s3} type="submit" onClick={props.clickedFunc}>Submit </button>

    </div></div>
  )

}

export default CustomSelection;
