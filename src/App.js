import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landingpage from "./Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landingpage} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
