import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Index from "./Pages/Index/Index";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

import Loader from "../components/Utility/Loader/Loader";

const App = ({ loading, token }) => {
  if (!loading && token) {
    return (
      <Switch>
        <Route path="/">
          <Index token={token} />
        </Route>
      </Switch>
    );
  }

  if (!loading) {
    return (
      <Switch>
        <Route path="/auth/register" exact>
          <Register />
        </Route>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/">
          <Index />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return <Loader />;
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(App);
