import React from "react";
import { connect } from "react-redux";

import * as styles from "./Nav.module.css";

import Close from "../Utility/Close/Close";

import { sidebarToggle } from "../../store/actions";

const Nav = ({ user, active, sidebarToggle }) => {
  let navStyles = [styles.nav];

  if (active) {
    navStyles = [styles.nav, styles.activate];
  } else {
    navStyles = [styles.nav, styles.deactivate];
  }

  return (
    <nav onClick={(e) => e.stopPropagation()} className={navStyles.join(" ")}>
      <Close clicked={sidebarToggle} />
      {user && user.displayName}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  active: state.sidebar.active,
});

export default connect(mapStateToProps, { sidebarToggle })(Nav);
