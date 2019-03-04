import React from "react";
import "./BuildControl.css";

const buildControl = props => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button
        className="Less"
        onClick={props.ingredientRemoved}
        disabled={props.disabled}
      >
        less
      </button>
      <button className="More" onClick={props.ingredientAdded}>
        More
      </button>
    </div>
  );
};

export default buildControl;
