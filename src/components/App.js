import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Index from "./Pages/Index/Index";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

const App = ({ loading }) => {
  if (loading) {
    return <h1>Loading</h1>;
  }

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
    </Switch>
  );
};

const mapStateToProps = (state) => ({ loading: state.auth.loading });

export default connect(mapStateToProps)(App);
