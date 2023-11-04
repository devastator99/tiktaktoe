import { useState } from 'react';
import React from 'react';
import './App.css';
import './Fonts.css';


function Box({value,onboxclick}){

  // const [value , setValue] = useState(null);

  // function handleClick(){
  //   setValue('X');
  // }

  return (
    <button className='box' onClick={onboxclick}>
       <span
        style={{
          fontSize: '90px', 
          fontFamily: 'Long Cang, sans-serif', 
        }}
      >
        {value}
      </span>
     </button>
  );
}


// function onboxclick()

export default function Board(){

  const [isxnext,setxisnext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));


  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner + ", bOy yOu rOcK";
  } else {
    status = "Next player: " + (isxnext ? "X" : "O");
  }


  function handleClick(i) {

    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if(isxnext){
      nextSquares[i] = "X";
    }else{
      nextSquares[i]= "O";
    }
    
    setSquares(nextSquares);
    setxisnext(!isxnext);
  }



  return(
  
    <>

<div class="box-container">
    <Box value={squares[0]} onboxclick={() => handleClick(0)} />
    <Box value={squares[1]} onboxclick={() => handleClick(1)} /> 
    <Box value={squares[2]} onboxclick={() => handleClick(2)} />
    
    

    </div>
   
    <div class="box-container">
    <Box value={squares[3]}  onboxclick={() => handleClick(3)} />
    <Box value={squares[4]}  onboxclick={() => handleClick(4)} />
    <Box value={squares[5]}  onboxclick={() => handleClick(5)} />
    
    

    </div>
   
  

    <div class="box-container">
    <Box value={squares[6]}  onboxclick={() => handleClick(6)} />
    <Box value={squares[7]}   onboxclick={() => handleClick(7)} />
    <Box value={squares[8]}   onboxclick={() => handleClick(8)} />
    
    

    </div>



    <div className="status">{status}</div>

   


    </>
    
  )




  



}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}





































// =======================================================================================
// import { useState } from 'react';

// function MyApp() {


  
  
//   return (
//     <div>
//       <h1>Counters that update together</h1>
//       <MyButton count={count} setCount={setCount} />
//       <MyButton count={count} setCount={setCount} />
//     </div>
//   );
// }

// function MyButton() {

  //   const [count, setCount] = useState(0);


//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }

// export default MyApp;













// import { useState } from 'react';

// export default function MyApp() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>Counters that update together</h1>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </div>
//   );
// }

// function MyButton({ count, onClick }) {
//   return (
//     <button onClick={onClick}>
//       Clicked {count} times
//     </button>
//   );
// }


