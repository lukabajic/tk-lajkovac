import React from "react";

import * as styles from "./Backdrop.module.css";

const Backdrop = (props) => (
  <div onClick={props.clicked} className={styles.backdrop}>
    {props.children}
  </div>
);

export default Backdrop;
