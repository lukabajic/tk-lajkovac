import React from "react";
import { connect } from "react-redux";

import * as styles from "./Nav.module.css";

const Nav = ({ user }) => {
  return (
    <nav onClick={(e) => e.stopPropagation()} className={styles.nav}>
      {user && user.displayName}
    </nav>
  );
};

const mapStateToProps = (state) => ({ user: state.user.user });

export default connect(mapStateToProps)(Nav);
