import { useState } from "react"

export default function CommentForm(){
  let [formDate,setFormDate] = useState({
    username:"",
    remarks:"",
    rating:5
  });
  let handleInputChange = (event)=>{
    setFormDate((currDate)=>{
      return{
        ...currDate,
        [event.target.name]:event.target.value,
      };
    });
  };
  let handleSubmit =(event)=>{
    console.log(formDate);
    event.preventDefault();
  };

  return(
    <div>
      <h4>Give a comment!</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <input 
        placeholder="username" type="text" value={formDate.username} onChange={handleSubmit} id="username">
        <br /><br />
        <label htmlFor="Remark">Remark</label>
        <textarea value={formDate.remarks}name="" id="Remark" onChange={handleSubmit}>Remarks</textarea >
        <br /><br />
        <label htmlFor="rating">Rating</label>
        <input  placeholder="rating" type="number" min ={1} max={5} value={formDate.rating}  onChange={handleSubmit} id="rating"/>
        <br /><br />
        <button>Add Commit</button>
      </form>
    </div>
  );
}