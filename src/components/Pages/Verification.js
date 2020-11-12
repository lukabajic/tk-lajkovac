import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import Loader from "../Utility/Loader/Loader";

import { verifyEmail } from "../../store/actions";

const Verification = ({ verifyEmail, emailVerified }) => {
  const { token } = useParams();

  useEffect(() => {
    if (!emailVerified) {
      verifyEmail(token);
    }
  }, [verifyEmail, token, emailVerified]);

  return <Loader />;
};

const mapStateToProps = (state) => ({
  emailVerified: state.user.user && state.user.user.emailVerified,
});

export default connect(mapStateToProps, { verifyEmail })(Verification);
