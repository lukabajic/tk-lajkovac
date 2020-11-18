import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Index from "./Pages/Index/Index";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Data from "./Pages/Data";
import Verification from "./Pages/Verification";
import Schedule from "./Pages/Schedule/Schedule";

import Loader from "../components/Utility/Loader/Loader";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarToggler from "../components/Sidebar/SidebarToggler/SidebarToggler";

import { authCheckStorage } from "../store/actions";

const App = ({ loading, token, authCheckStorage, user }) => {
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
      <SidebarToggler />
      <Sidebar />
      <Switch>
        <Route path="/schedule" exact>
          <Schedule />
        </Route>
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
  loading: state.auth.loading || state.user.loading || state.schedule.loading,
  user: state.user.user,
});

export default connect(mapStateToProps, { authCheckStorage })(App);
