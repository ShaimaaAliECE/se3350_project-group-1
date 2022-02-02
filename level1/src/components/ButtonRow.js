import React,{useState} from 'react';
import Button from "./Button.js";

function ButtonRow(props) {
    
    //keeps track of how many times the row has been clicked
    const [count,clicked]=useState(0);

    //calls the rowClick function from its props and then increases its count state
    function buttonRowClick(val){
        props.rowClick(val,count,props.row);
        clicked(count+1);
    }

    //use a JSON object to represent the buttons that have to be displayed. THis allows fo rthem to be genreated dynamically.
    let buttonObj=[
       ];

    let j=0;
    for(let i =0;i<props.length;i++){
      let button={}
      button.id=i;
      if(props.spaces.length>j&&props.spaces[j]-1===i){
        button.padding='20px';
        j++;
      }else{
        button.padding='0px';
      }
      
      buttonObj.push(button);
    }
      
    
   
    
  return (
  <div>

    {buttonObj.map((button,index) => (
        <Button key={"row"+props.row+"-btn"+button.id} value={props.numbers[button.id]}  rowClick={buttonRowClick} padding={button.padding} nextVal={props.correctRow[count]} btnId={button.id}></Button>
        
      ))}

    
    
  </div>
  );
}

export default ButtonRow;