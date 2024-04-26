import { useState } from "react"
import Board from "./Board"

export default function Game() {
    let [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        // setHistory([...history, nextSquares]);
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1)
    }

    function jumpTo(nextMove) {
        if (nextMove == 0) {
            setHistory([Array(9).fill(null)])
        }
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Restart';
        }
        return (
            <button
                onClick={() => jumpTo(move)}
                key={move}
                className="historyButtons"
                >
                {description}
            </button>
        )
    })

    return (
        <>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            <div id="history">{moves}</div>
        </>
    )
}