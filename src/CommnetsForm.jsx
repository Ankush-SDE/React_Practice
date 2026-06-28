// import { useState } from "react"

// export default function CommentForm(){
//   let [formDate,setFormDate] = useState({
//     username:"",
//     remarks:"",
//     rating:5
//   });
//   let handleInputChange = (event)=>{
//     setFormDate((currDate)=>{
//       return{
//         ...currDate,
//         [event.target.name]:event.target.value,
//       };
//     });
//   };
//   let handleSubmit =(event)=>{
//     console.log(formDate);
//     event.preventDefault();
//   };

//   return(
//     <div>
//       <h4>Give a comment!</h4>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">UserName</label>
//         <input 
//         placeholder="username" type="text" value={formDate.username} onChange={handleSubmit} id="username" name="username">
//         <br /><br />
//         <label htmlFor="remarks">Remark</label>
//         <textarea value={formDate.remarks}name="" id="remarks" onChange={handleSubmit} name ="remarks">Remarks</textarea >
//         <br /><br />
//         <label htmlFor="rating">Rating</label>
//         <input  placeholder="rating" type="number" min ={1} max={5} value={formDate.rating}  onChange={handleSubmit} id="rating" name="rating"/>
//         <br /><br />
//         <button>Add Commit</button>
        
//       </form>
//     </div>
//   }
//   )
import { useState } from "react";

export default function CommentForm() {
  const [formDate, setFormDate] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  const handleInputChange = (event) => {
    setFormDate((currData) => ({
      ...currData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formDate);
  };

  return (
    <div>
      <h4>Give a comment!</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={formDate.username}
          onChange={handleInputChange}
        />

        <br />
        <br />

        <label htmlFor="remarks">Remark</label>
        <textarea
          id="remarks"
          name="remarks"
          value={formDate.remarks}
          onChange={handleInputChange}
        />

        <br />
        <br />

        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          min={1}
          max={5}
          value={formDate.rating}
          onChange={handleInputChange}
        />

        <br />
        <br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}