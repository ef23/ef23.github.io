import React from "react";
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./home"
import Keyboards from "./keyboards"

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/keyboards" component={Keyboards} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
