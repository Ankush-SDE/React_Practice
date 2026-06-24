import { useState } from "react"

export default function LudoBoard(){
  let [moves,setmoves] =useState({blue:0,red:0,yellow:0,green:0});
  let [count,setcount] = useState(0);
  let [arr,setArr] = useState(["no moves"]);
  // let updateBlue =()=>{
  //   //moves.blue +=1;
  //   //console.log(`moves.blue; = ${moves.blue}`);
  //   //setmoves({ ...moves,blue:moves.blue + 1});
  //   setmoves((prevMoves) =>{
  //     return { ...prevMoves,blue:prevMoves,blue +1};
  //   });
  // };
  let updateBlue = () => {
  // setmoves((prevMoves) => {
  //   return {
  //     ...prevMoves,
  //     blue: prevMoves.blue + 1,
  //   };
  // });
  //arr.push("blue moves");
  setArr([...arr,"blue moves"]);
  console.log(arr);
};
let updateyellow = () => {
  setmoves((prevMoves) => {
    return {
      ...prevMoves,
      yellow: prevMoves.yellow + 1,
    };
  });
};
  return(
    <div>
      <p>Game Begins!</p>
      <p>{arr}</p>
      <div className="board">
        <p>Blue moves={moves.blue}</p>
        <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
        <p>Yellow moves={moves.yellow}</p>
        <button style={{backgroundColor:"yellow"}} onClick={updateyellow}>+1</button>
        <p>Green moves={moves.green}</p>
        <button style={{backgroundColor:"green"}}>+1</button>
        <p>Red moves={moves.red}</p>
        <button style={{backgroundColor:"red"}}>+1</button>
      </div>
    </div>
  )
}