import React from "react";
import { Link } from "react-router-dom";

import * as styles from "./InlineLink.module.css";

const InlineLink = (props) => (
  <Link href={props.href} className={styles.link}>
    {props.children}
  </Link>
);

export default InlineLink;
