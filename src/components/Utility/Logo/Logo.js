import React from "react";

import * as styles from "./Logo.module.css";

const Logo = () => {
  return (
    <span className={styles.logo}>
      TK <span className={styles.color}>Lajkovac</span>.
    </span>
  );
};

export default Logo;
