import { useState } from "react";
import "./Comment.css";
export default function Comment(){
  let [comments,setComments] =useState([{
    username:"@sk",
    remarks:"greate job!",
    rating:4
  }]);
  return (
    <div>
      <h3>All comment</h3>
      <div className="comment">
        <span>{comments[0].remarks}</span>
        &nbsp;
        <span>(rating :{comments[0].rating})</span>
        <p>-{comments[0].username}</p>
      </div>
    </div>
  );
}