import React from "react";
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./home"

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
