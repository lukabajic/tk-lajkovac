import React from "react";
import { connect } from "react-redux";

import NotAuthenthicated from "./NotAuthenthicated/NotAuthenthicated";
import Authenthicated from "./Authenthicated/Authenthicated";
import PleaseVerify from "./PleaseVerify/PleaseVerify";

const Index = ({ token, user }) => {
  if (!token) {
    return <NotAuthenthicated />;
  }

  if (token && user && !user.emailVerified) {
    return <PleaseVerify />;
  }

  return <Authenthicated />;
};

const mapStateToprops = (state) => ({
  user: state.user.user,
  token: state.auth.token,
});

export default connect(mapStateToprops)(Index);
