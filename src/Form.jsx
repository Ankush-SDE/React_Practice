import { useState } from "react";

export default function Form(){
  let[fulName,setFulName] =useState("Ankush");
  let handleNameChange =(event)=>{
    //console.log(event.target);
    setFulName(event.target.value);
  };
  return(
    <form >
      <input placeholder="Enter full name" type="text" value={fulName} onChange={handleNameChange}/>
      <button>Submit</button>
    </form>
  )
}