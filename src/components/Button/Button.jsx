import React from "react";
import styles from "./Button.module.scss";

const Button = props => {
  let buttonClass;

  if (props.type === "number") buttonClass = styles.number;
  return (
    <div className={buttonClass}>

        <button value={props.value} onClick={props.onClick}>
          {props.buttonText}
        </button>

    </div>
  );
};

export default Button;
