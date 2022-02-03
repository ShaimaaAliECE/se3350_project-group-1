import React ,{useState}from 'react';

function Button(props) {
  
  const [clicked, setClicked]=useState(false);
  const [enabled, setEnabled]=useState(true);
    
  function buttonClick(){
    if(props.nextVal===props.btnId){
      setEnabled(false);
      setClicked(true);
      props.rowClick(props.value);
    }
    else{
      alert("Wrong - Try Again");
    }

     
      
  }
  
  return (
  <button   onClick={buttonClick} disabled={!enabled} style={{marginRight:props.padding}}>
     {props.value}
  </button>
  
  );
}

export default Button;