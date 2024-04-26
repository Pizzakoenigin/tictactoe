import { useState } from "react"
import Board from "./Board"
import Restart from "./Restart";

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0)
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function restartGame() {

    }

    function jumpTo(nextMove){

    } 

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <button onClick={() => jumpTo(move)} key={move}>{description}</button>
        )
    })

    return (
        <>
            <Board xIsNext = { xIsNext } squares={currentSquares} onPlay={handlePlay} />
            {/* <Restart onRestartClick={restartGame} /> */}
            <div>{moves}</div>
        </>
    )
}