import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "./Pages/Index/Index";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

const App = () => {
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

export default App;
