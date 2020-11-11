import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Index from "./Pages/Index/Index";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

import Loader from "../components/Utility/Loader/Loader";

const App = ({ loading, token }) => {
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
        <Route path="/" exact>
          <Index />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <Index token={token} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(App);
