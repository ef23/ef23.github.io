import React from "react";
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./home"
import StripeBlog from "./pages"

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={StripeBlog} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
