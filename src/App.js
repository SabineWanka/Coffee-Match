import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Questionnaire from "./pages/Questionnaire";
import Homepage from "./pages/homepage";
import withRoot from "./withRoot";

function App() {
  return (
    <Router>
      <div style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}>
        <Switch>
          <Route exact path="/quiz" component={Questionnaire} />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default withRoot(App);
