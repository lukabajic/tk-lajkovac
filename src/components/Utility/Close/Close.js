import React from "react";

import * as styles from "./Close.module.css";

const Close = (props) => {
  return (
    <button onClick={props.clicked} className={styles.wrapper}>
      <svg viewBox="0 0 512 512">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M328 112L184 256l144 144"
        />
      </svg>
    </button>
  );
};
export default Close;
