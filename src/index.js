import React from "react";
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "./home"
import Keyboards from "./keyboards"

const App = () => (
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/keyboards" component={Keyboards} />
    </Switch>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
