import { useState } from "react";

export default function LikeButton() {
  const [isLike, setisLike] = useState(false);

  const toggleLike = () => {
    setisLike(!isLike);
  };
  let likestyle ={color:"red"};

  return (
    <div>
      <p onClick={toggleLike}>
        {isLike ? (
          <i className="fa-solid fa-heart" style={likestyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}