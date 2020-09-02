import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Websites from "./Websites.js";
import Guide from "./Guide";

export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Websites />
        </Route>
        <Route exact path="/guide">
          <Guide />
        </Route>
      </Switch>
    </Router>
  );
}
