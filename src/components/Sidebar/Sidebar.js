import React from "react";
import ReactDOM from "react-dom";

import Nav from "../Nav/Nav";

const Sidebar = () => {
  return ReactDOM.createPortal(<Nav />, document.getElementById("sidebar"));
};

export default Sidebar;
