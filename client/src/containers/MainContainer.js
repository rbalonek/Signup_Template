import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../screens/Home/Home.jsx";
import Backend from "../screens/Backend/Backend.jsx";

export default function MainContainer(props) {
  return (
    <Switch>
      <Route path="/vendors">
        <Backend vendors={props.vendors} handleDelete={props.handleDelete} />
      </Route>

      <Route path="/">
        <Home createSubmit={props.createSubmit} />
      </Route>
    </Switch>
  );
}
