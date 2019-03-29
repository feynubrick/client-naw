import React, { Component } from "react";
import { Route } from "react-router-dom";
import { MyMNA, MNA, Party, Bill } from "./pages";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" />
        <Route path="/mymna" component={MyMNA} />
        <Route path="/mna" component={MNA} />
        <Route path="/party" component={Party} />
        <Route path="/bill" component={Bill} />
      </div>
    );
  }
}

export default App;
