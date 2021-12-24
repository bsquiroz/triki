import React, { useEffect, useState } from "react";
import { Box } from "../Box";
import { Overlay } from "../Overlay";

import "./boardStyles.css";

const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];

export const Board = () => {
    const [valueBox, setValueBox] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(false);
    const [playerWin, setplayerWin] = useState(false);

    const confirmWin = () => {
        for (let i = 0; i < wins.length; i++) {
            const [a, b, c] = wins[i];
            if (
                valueBox[a] &&
                valueBox[a] === valueBox[b] &&
                valueBox[a] === valueBox[c]
            ) {
                setplayerWin(true);
                return;
            }
        }
    };

    useEffect(() => {
        confirmWin();
    }, [valueBox]);

    const handleBox = (id, value) => {
        if (value || playerWin) return;
        setValueBox(
            valueBox.map((item, i) => (i === id ? (turn ? "O" : "X") : item))
        );
        setTurn(!turn);
    };

    return (
        <div className="boardStyle">
            <Overlay
                turn={turn}
                setValueBox={setValueBox}
                setplayerWin={setplayerWin}
                playerWin={playerWin}
            />
            {valueBox.map((box, i) => (
                <Box key={i} handleBox={handleBox} id={i} value={box} />
            ))}
        </div>
    );
};
