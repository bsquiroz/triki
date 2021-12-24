import React from "react";
import { Board } from "../../components/Board";
import "./homeStyles.css";

export const Home = () => {
    return (
        <div className="containerHome">
            <h3>Este es mi triki</h3>
            <Board />
            <a href="https://github.com/bsquiroz/triki" target="_blank">
                Source code
            </a>
        </div>
    );
};
