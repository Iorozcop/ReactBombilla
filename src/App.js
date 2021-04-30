import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {
  const[colour,setColour]= useState();
  const[state,setState]=useState(false);

  function NewButton(){
    function off(){
      setColour();
      setState(false);
    }
  return (
    <div style={{margin:'0px 0px 0px 10px'}}>
      <button onClick={()=>off()}>OFF</button>
    </div>
  );
  }
  console.log(colour);
  console.log(state);

  useEffect(()=>{
    if(state){
      setColour('yellow');
    } 
    console.log(colour);
    console.log(state);
  },[state])

  return (
    <>
    <div style={{display:'flex',margin:'20px'}}>
      <button onClick={()=>setState(true)}>ON</button>
      {state ? <NewButton /> : null}
    </div>
    <div style={{width:'40px',background:colour,margin:'20px 0px 0px 45px'}}>=^.^=</div>
    </>
  );
}


