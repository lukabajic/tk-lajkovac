import React from "react";
import { connect } from "react-redux";

import SidebarToggler from "../../../Sidebar/SidebarToggler/SidebarToggler";

const Authenthicated = ({ user }) => {
  return (
    <main className="App">
      <SidebarToggler />
      {/* testing */}
      <h1>{user && user.displayName}</h1>
      <h1>{user && user.phone}</h1>
    </main>
  );
};

const mapStateToProps = (state) => ({ user: state.user.user });

export default connect(mapStateToProps)(Authenthicated);
