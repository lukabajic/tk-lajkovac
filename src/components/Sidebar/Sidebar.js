import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import Nav from "../Nav/Nav";
// import Backdrop from "../Utility/Backdrop/Backdrop";

import { sidebarToggle } from "../../store/actions";

const Sidebar = ({ sidebarToggle, active }) => {
  const sidebar = (
    <React.Fragment>
      {/* {active ? <Backdrop clicked={sidebarToggle} /> : null} */}
      <Nav />
    </React.Fragment>
  );

  return ReactDOM.createPortal(sidebar, document.getElementById("sidebar"));
};

const mapStateToProps = (state) => ({ active: state.sidebar.active });

export default connect(mapStateToProps, { sidebarToggle })(Sidebar);
