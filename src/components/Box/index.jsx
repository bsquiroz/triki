import React from "react";
import "./boxStyles.css";

export const Box = ({ id, handleBox, value }) => {
    return (
        <div className="boxStyle" onClick={() => handleBox(id, value)}>
            {value && <p>{value}</p>}
        </div>
    );
};
