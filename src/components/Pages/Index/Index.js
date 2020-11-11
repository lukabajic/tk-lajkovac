import React from "react";

import NotAuthenthicated from "./NotAuthenthicated/NotAuthenthicated";
import Authenthicated from "./Authenthicated/Authenthicated";

const Index = ({ token }) => {
  if (!token) {
    return <NotAuthenthicated />;
  }

  return <Authenthicated />;
};

export default Index;
