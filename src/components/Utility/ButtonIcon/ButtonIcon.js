import React from "react";

import * as styles from "./ButtonIcon.module.css";

const ButtonIcon = (props) => {
  return (
    <button onClick={props.clicked} className={styles.wrapper}>
      {props.children}
    </button>
  );
};
export default ButtonIcon;
