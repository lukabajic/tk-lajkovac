import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Index from "./Pages/Index/Index";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Data from "./Pages/Data";
import Verification from "./Pages/Verification";

import Loader from "../components/Utility/Loader/Loader";
import Sidebar from "../components/Sidebar/Sidebar";

import { authCheckStorage } from "../store/actions";

const App = ({ loading, token, authCheckStorage, user, sidebar }) => {
  useEffect(() => {
    if (!token) {
      authCheckStorage();
    }
  }, [authCheckStorage, token]);

  if (loading) {
    return <Loader />;
  }

  if (!token) {
    return (
      <Switch>
        <Route path="/auth/register" exact>
          <Register />
        </Route>
        <Route path="/auth/login" exact>
          <Login />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    );
  }

  if (user) {
    if (!user.emailVerified) {
      return (
        <Switch>
          <Route path="/verification/:token" exact>
            <Verification />
          </Route>
          <Route path="/" exact>
            <Index />
          </Route>
          <Redirect to="/" />
        </Switch>
      );
    }
    if (!user.displayName || !user.phone) {
      return (
        <Switch>
          <Route path="/data" exact>
            <Data />
          </Route>
          <Route path="/" exact>
            <Index />
          </Route>
          <Redirect to="/" />
        </Switch>
      );
    }
  }

  return (
    <React.Fragment>
      {sidebar ? <Sidebar /> : null}
      <Switch>
        <Route path="/" exact>
          <Index />
        </Route>
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  loading: state.auth.loading || state.user.loading,
  user: state.user.user,
  sidebar: state.sidebar.active,
});

export default connect(mapStateToProps, { authCheckStorage })(App);
