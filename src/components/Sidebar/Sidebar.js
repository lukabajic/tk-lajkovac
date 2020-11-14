import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import Nav from "../Nav/Nav";
import Backdrop from "../Utility/Backdrop/Backdrop";

import { sidebarToggle } from "../../store/actions";

const Sidebar = ({ sidebarToggle }) => {
  const sidebar = (
    <React.Fragment>
      <Backdrop clicked={sidebarToggle}>
        <Nav />
      </Backdrop>
    </React.Fragment>
  );

  return ReactDOM.createPortal(sidebar, document.getElementById("sidebar"));
};

export default connect(null, { sidebarToggle })(Sidebar);
