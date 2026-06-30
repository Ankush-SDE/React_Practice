

import { useState } from "react";
import {useFormik} from 'formilk'
export default function CommentForm({ addNewComment }) {
  const [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });
let[isvalid,SetIsvalid] =useState(true);
  const handleInputChange = (event) => {
    setFormData((currData) => ({
      ...currData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addNewComment(formData);
    console.log(formData);

    // Clear the form
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
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
          value={formData.username}
          onChange={handleInputChange}
        />

        <br />
        <br />

        <label htmlFor="remarks">Remark</label>
        <textarea
          id="remarks"
          name="remarks"
          value={formData.remarks}
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
          value={formData.rating}
          onChange={handleInputChange}
        />

        <br />
        <br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}