import Square from "./Square"

export default function Board() {
    return (
        <div>
            <div className="top-row">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
            <div className="middle-row">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
            <div className="bottom-row">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
        </div>
    )
}