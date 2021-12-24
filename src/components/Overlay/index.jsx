import React from "react";

import "./overlayStyles.css";

export const Overlay = ({ turn, setValueBox, setplayerWin, playerWin }) => {
    const handleReset = () => {
        setValueBox(Array(9).fill(null));
        setplayerWin(false);
    };

    const isPlayerWinStyles = playerWin
        ? "overlayContainer overlayShow"
        : "overlayContainer";

    return (
        <div className={isPlayerWinStyles}>
            <h4 style={{ color: "#fff" }}>
                el ganador es el jugador {turn ? "X" : "O"}
            </h4>
            <br />
            <button onClick={handleReset}>Volver a jugar</button>
        </div>
    );
};
