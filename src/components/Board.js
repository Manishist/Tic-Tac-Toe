import React, { useEffect, useState } from "react";

const Board = () => {
    const [square, setSquare] = useState(Array(9).fill(""))
    const [playerTurn, setPlayerTurn] = useState(true)
    const clickBox  = (index) => {
        setPlayerTurn(!playerTurn);
        var tempBoard = [...square]
        tempBoard[index] = playerTurn ? 'X' : 'O';
        setSquare(tempBoard);
    }
    const winnerFunction = () => {
        console.log("won", !playerTurn ? 'X' : 'O')
        setSquare(Array(9).fill(""));
        return 0;
    }

    var winnerCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    useEffect(() => {
        for(var i=0;i<winnerCombination.length; i++){
            if(square[winnerCombination[i][0]] !== "" && square[winnerCombination[i][0]] === square[winnerCombination[i][1]] && square[winnerCombination[i][1]] === square[winnerCombination[i][2]]){
                winnerFunction();
            }
        }
        if(!square.includes('')){
            alert('Draw')
        }

    },[square])

    return (
        <div>
            <div>Board</div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', paddingLeft: '200px', paddingRight: '200px', paddingTop: '50px'}}>
                {square.map((box,index)=>{
                    return <button style={{height: '100px'}} className={index} onClick={()=>clickBox(index)}>{box}</button>
                })}
            </div>
        </div>
    )
}

export default Board;