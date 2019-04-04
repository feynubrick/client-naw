import React from "react";
import BillDetail from "../components/BillDetail";
import { bills } from "./fakedataBill";

export default class BillDetailController extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bill: null };
  }

  componentDidMount() {
    console.log("billId:", this.props.match.params.billId);
    console.log("bill: ", bills[this.props.match.params.billId]);
    this.setState({ bill: bills[this.props.match.params.billId] });
  }

  componentDidUpdate() {}

  render() {
    return this.state.bill ? <BillDetail bill={this.state.bill} /> : null;
  }
}
