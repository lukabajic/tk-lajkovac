import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import NotAuthenthicated from "./NotAuthenthicated/NotAuthenthicated";
import Authenthicated from "./Authenthicated/Authenthicated";
import PleaseVerify from "./PleaseVerify/PleaseVerify";

const Index = ({ token, user, toggleSidebar }) => {
  if (!token) {
    return <NotAuthenthicated />;
  }

  if (user) {
    if (!user.emailVerified) {
      return <PleaseVerify />;
    }
    if (!user.displayName || !user.phone) {
      return <Redirect to="/data" />;
    }
  }

  return <Authenthicated toggleSidebar={toggleSidebar} />;
};

const mapStateToprops = (state) => ({
  user: state.user.user,
  token: state.auth.token,
});

export default connect(mapStateToprops)(Index);
