import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import BillDetailController from "./containers/BillDetailController";
import MNADetail from "./containers/MNADetail";
import { Main, MyMNA, MNA, Party, Bill } from "./pages";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/mymna" component={MyMNA} />
          <Route path="/mna/:mnaId" component={MNADetail} />
          <Route path="/mna" component={MNA} />
          <Route path="/party" component={Party} />
          <Route path="/bill/:billId" component={BillDetailController} />
          <Route path="/bill" component={Bill} />
          <Route path="/signin" component={SignIn} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
