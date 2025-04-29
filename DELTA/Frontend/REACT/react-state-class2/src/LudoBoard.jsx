import { useState } from "react"

export default function LudoBoard() {
    let [blueMove, setBlueMove] = useState(0);
    let [yellowMove, setYellowMove] = useState(0);
    let [greenMove, setGreenMove] = useState(0);
    let [redMove, setRedMove] = useState(0);
    return(
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue moves = {blueMove}</p>
                <button>+1</button>
                <p>Yellow moves = {yellowMove}</p>
                <button>+1</button>
                <p>Green moves = {greenMove}</p>
                <button>+1</button>
                <p>Red moves = {redMove}</p>
                <button>+1</button>
            </div>
        </div>
    )
}