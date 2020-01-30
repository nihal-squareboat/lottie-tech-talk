import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./Containers/Welcome";

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Welcome} />
      </BrowserRouter>
    );
  }
}

export default AppRouter;
