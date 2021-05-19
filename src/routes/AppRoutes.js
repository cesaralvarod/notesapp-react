import React from "react";
import { Redirect, Route, Switch, Link } from "react-router-dom";

// Components

import MainPage from "../pages/MainPage";
import AddNotePage from "../pages/AddNotePage";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/add">
        <Link to="/" className="link-router danger">
          Back
        </Link>
        <AddNotePage />
      </Route>{" "}
      <Route exact path="/edit">
        <Link to="/" className="link-router danger">
          Back
        </Link>
        <AddNotePage />
      </Route>
      <Route exact path="/">
        <Link to="/add" className="link-router">
          Add Note
        </Link>
        <MainPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRoutes;
