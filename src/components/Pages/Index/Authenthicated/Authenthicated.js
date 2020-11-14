import React from "react";
import { connect } from "react-redux";

import { sidebarToggle } from "../../../../store/actions";

const Authenthicated = ({ user, sidebarToggle }) => {
  return (
    <main className="App">
      {/* testing */}
      <h1>{user && user.displayName}</h1>
      <h1>{user && user.phone}</h1>
      <button onClick={sidebarToggle}>Toggle</button>
    </main>
  );
};

const mapStateToProps = (state) => ({ user: state.user.user });

export default connect(mapStateToProps, { sidebarToggle })(Authenthicated);
