import React from "react";

import * as styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      TK <span className={styles.color}>Lajkovac</span>.
    </div>
  );
};

export default Logo;
