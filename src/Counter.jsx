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

import { useState ,useEffect} from "react";

// }
export default function Counter(){
  let [count,setcount] = useState(0);

  let inCounter =()=>{
    setcount(count +1);
  };
  useEffect(function printSomething(){
    console.log("this is a side-effect");
  });
  return (
    <div>
      <h3>count ={count}</h3>
      <button onClick={inCounter}>Increase count</button>
    </div>
  )

}