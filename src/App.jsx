import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import { MyMNA, MNA, Party, Bill, MNAAbout } from "./pages";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Container>
          <Switch>
            <Route exact path="/" />
            <Route path="/mymna" component={MyMNA} />
            <Route path="/mna/about/:mnaId" component={MNAAbout} />
            <Route path="/mna" component={MNA} />
            <Route path="/party" component={Party} />
            <Route path="/bill" component={Bill} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
