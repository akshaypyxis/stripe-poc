import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Checkout } from './components/checkout';
import { Success } from './components/success';
import { Cancel } from './components/cancel';
function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <h3>stripe one time ad hoc</h3>
          <Route path="/" exact component={Checkout} />
          <Route path="/success" exact component={Success} />
          <Route path="/failure" exact component={Cancel} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;