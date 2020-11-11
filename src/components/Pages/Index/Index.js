import React from "react";

import NotAuthenthicated from "./NotAuthenthicated/NotAuthenthicated";

const Index = ({ token }) => {
  if (token) {
    return <h1>Authenthicated</h1>;
  }

  return <NotAuthenthicated />;
};

export default Index;
