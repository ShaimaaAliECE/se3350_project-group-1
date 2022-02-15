import React ,{useState}from 'react';
import CorrectSound from './correct.mp3';
import WrongSound from './wrong.mp3';
import  { Redirect } from 'react-router-dom'
//do something...


let count=0;
function Button(props) {
 
  const [clicked, setClicked]=useState(false);
  const [enabled, setEnabled]=useState(true);
 
  function buttonClick(){
    if (count==2)
    {
      alert("Last Try!");
  
      return (
        <button   class={clicked?"bttnCorrect":"bttn2"} onClick={window.location.href = "/LevelsPage"} disabled={!enabled || !props.enabled} style={{marginRight:props.padding}}>
           {props.value}
        </button>
        
        );
  
     
      
    }

    else if(props.nextVal===props.btnId){
      var correct = new Audio(CorrectSound);
      correct.play();
      setEnabled(false);
      setClicked(true);
      props.rowClick(props.value);
    }
    else{
      var wrong = new Audio(WrongSound);
      wrong.play();
      alert("Wrong - Try Again");
      count++;
      
    }

      
  }
 
  return (
  <button   class={clicked?"bttnCorrect":"bttn2"} onClick={buttonClick} disabled={!enabled || !props.enabled} style={{marginRight:props.padding}}>
     {props.value}
  </button>
  
  );
}

export default Button;