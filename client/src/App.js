import React from "react";
import Nav from "./containers/Navigation";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Nav />;
    </Router>
  );
};

export default App;
