import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {
  const[colour,setColour]= useState();
  const[state,setState]=useState(false);

  useEffect(()=>{
    if(state){
      setColour('yellow');
    }else{
      setColour('')
    }
    console.log(colour);
    console.log(state);
  },[state])

  return (
    <>
    <div style={{display:'flex',margin:'20px'}}>
      <button onClick={()=>setState(!state)}>
      {!state ? "ON" : "OFF"}</button>
    </div>
    <div style={{width:'40px',background:colour,margin:'20px'}}>=^.^=</div>
    </>
  );
}


