import { useState } from "react"

import Square from "./Square"
import Status from "./Status"

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [message, setMessage] = useState('')

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
                setMessage(`${squares[a]} won!`)
                return squares[a]
            }
        }
        return null
    }

    function handleClick(i) {

        // const winner = calculateWinner(squares);
        // if (winner) {
        //     setMessage(`${winner} won!`)
        // } else {
            setMessage(`Next player ${xIsNext ? '0' : 'X'}`)
        // }

        if (squares[i] || calculateWinner(squares)) {
            return
        }

        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        }
        else {
            nextSquares[i] = "0";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext)
    }



    return (
        <>
            <div id="board">
                <div className="top-row row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className="middle-row row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className="bottom-row row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>
            <Status message={message} />
        </>
    )
}