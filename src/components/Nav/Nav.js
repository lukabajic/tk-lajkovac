import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import * as styles from "./Nav.module.css";

import ButtonIcon from "../Utility/ButtonIcon/ButtonIcon";
import Logo from "../Utility/Logo/Logo";
import Search from "./Search/Search";

import IconHome from "./NavIcons/IconHome";
import IconSchedule from "./NavIcons/IconSchedule";
import IconUsers from "./NavIcons/IconUsers";
import IconLeague from "./NavIcons/IconLeague";
import IconArrow from "./NavIcons/IconArrow";
import IconSettings from "./NavIcons/IconSettings";
import IconHelp from "./NavIcons/IconHelp";
import IconLogout from "./NavIcons/IconLogout";

import { sidebarToggle, logout } from "../../store/actions";

const Nav = ({ active, sidebarToggle, logout }) => {
  let navStyles = [styles.nav];

  if (active) {
    navStyles = [styles.nav, styles.activate];
  } else {
    navStyles = [styles.nav, styles.deactivate];
  }

  return (
    <nav onClick={(e) => e.stopPropagation()} className={navStyles.join(" ")}>
      <div className={styles.close}>
        <ButtonIcon clicked={sidebarToggle}>
          <IconArrow />
        </ButtonIcon>
      </div>
      <div className={styles.head}>
        <img src="/logo512.png" alt="Logo" className={styles.logo} />
        <Logo />
      </div>
      <div></div>
      <Search />
      <NavLink
        to="/"
        className={styles.link}
        activeClassName={styles.active}
        exact
      >
        <IconHome />
        Početna
      </NavLink>
      <hr className={styles.hr} />
      <NavLink
        to="/schedule"
        className={styles.link}
        activeClassName={styles.active}
        exact
      >
        <IconSchedule />
        Termini
      </NavLink>
      <NavLink
        to="/users"
        className={styles.link}
        activeClassName={styles.active}
        exact
      >
        <IconUsers />
        Članovi
      </NavLink>
      <NavLink
        to="/league"
        className={styles.link}
        activeClassName={styles.active}
        exact
      >
        <IconLeague />
        Liga
      </NavLink>
      <div className={styles.footer}>
        <NavLink
          to="/settings"
          className={styles.button}
          activeClassName={styles.active}
          exact
        >
          <IconSettings />
        </NavLink>
        <NavLink
          to="/help"
          className={styles.button}
          activeClassName={styles.active}
          exact
        >
          <IconHelp />
        </NavLink>
        <ButtonIcon clicked={logout}>
          <IconLogout />
        </ButtonIcon>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  active: state.sidebar.active,
});

export default connect(mapStateToProps, { sidebarToggle, logout })(Nav);
