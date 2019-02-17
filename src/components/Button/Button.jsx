import React from "react";
import styles from "./Button.module.scss";

const Button = props => {
  let buttonClass;

  if (props.type === "val") buttonClass = styles.val;
  if (props.type === "operator") buttonClass = styles.operator;
  if (props.type === "clear") buttonClass = styles.clear;

  return (
    <div className={buttonClass}>
      <button value={props.value} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
