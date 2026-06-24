// export default function Counter(){
//   let count =0;
//   function incounter(){
//     count +=1;
//     console.log(count);
//   }
//   return (
//     <div>
//       <h3>count = (count)</h3>
//       <button onClick={incounter}>Increase Count</button>
//     </div>
//   );

import { useState } from "react";

// }
export default function Counter(){
  let [count,setcount] = useState(0);

  let inCounter =()=>{
    setcount(count +1);
  };
  return (
    <div>
      <h3>count ={count}</h3>
      <button onClick={inCounter}>Increase count</button>
    </div>
  )

}