import React,{useState} from 'react';
import Button from "./Button.js";

function ButtonRow(props) {
    
    //keeps track of how many times the row has been clicked
    const [count,clicked]=useState(0);

    //calls the rowClick function from its props and then increases its count state
    function buttonRowClick(val){
        props.rowClick(val,count);
        clicked(count+1);
    }
  return (
  <div>
    

    <Button value={props.numbers[0]}  rowClick={buttonRowClick}></Button>
    <Button value={props.numbers[1]}  rowClick={buttonRowClick}></Button>
    <Button value={props.numbers[2]}  rowClick={buttonRowClick}></Button>
    <Button value={props.numbers[3]}  rowClick={buttonRowClick}></Button>
    <Button value={props.numbers[4]}  rowClick={buttonRowClick}></Button>
    <Button value={props.numbers[5]}  rowClick={buttonRowClick}></Button>
    <Button value={props.numbers[6]}  rowClick={buttonRowClick}></Button>
    <Button value={props.numbers[7]}  rowClick={buttonRowClick}></Button>
    <Button value={props.numbers[8]}  rowClick={buttonRowClick}></Button>
    <Button value={props.numbers[9]}  rowClick={buttonRowClick}></Button>
    
  </div>
  );
}

export default ButtonRow;