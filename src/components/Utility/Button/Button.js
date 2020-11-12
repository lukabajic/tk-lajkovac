import React from "react";
import { Link } from "react-router-dom";

import * as styles from "./Button.module.css";

const Button = (props) => {
  const buttonStyles = [styles.button];
  props.fluid && buttonStyles.push(styles.fluid);
  props.primary && buttonStyles.push(styles.primary);
  props.secondary && buttonStyles.push(styles.secondary);
  props.disabled && buttonStyles.push(styles.disabled);

  if (props.href) {
    buttonStyles.push(styles.href);
    return (
      <Link to={props.href} className={buttonStyles.join(" ")}>
        {props.children}
      </Link>
    );
  }

  if (props.type) {
    return (
      <button
        className={buttonStyles.join(" ")}
        type={props.type}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
  }

  if (props.clicked) {
    return (
      <button
        onClick={props.clicked}
        className={buttonStyles.join(" ")}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
  }

  return (
    <button className={buttonStyles.join(" ")} disabled={props.disabled}>
      {props.children}
    </button>
  );
};
export default Button;
