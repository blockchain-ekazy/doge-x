import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Component } from "react";
import Home from "./Components/Home.js";
import Twitter from "./Components/Twitter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/twitter" component={Twitter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
