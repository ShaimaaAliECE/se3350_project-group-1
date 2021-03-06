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
    for(let i =0;i<props.numVisible;i++){
      let button={}
      button.id=i;
      if(props.spaces.length>j&&props.spaces[j]-1===i){
        button.padding='40px';
        j++;
      }else{
        button.padding='0px';
      }
      
      buttonObj.push(button);
    }
      
    
   
  return (
  <div class="wrapper">

    {buttonObj.map((button,index) => (

        <Button key={"row"+props.row+"-btn"+button.id} value={props.numbers[button.id]}  rowClick={buttonRowClick} timer = {props.time} lvl ={props.nameLevel} ttl ={props.total}
            padding={button.padding} nextVal={props.correctRow[count]} btnId={button.id} enabled={props.enabled}  splitState={props.splitState} correctSplitState={props.correctSplitState}></Button>
        
      ))}

    
    
  </div>
  );
}
export default ButtonRow;

//visible={(button.id<=props.numVisible)?'none':"you should see this"}