import React from "react";
import BillDetail from "../components/BillDetail";
import { BillDetailData } from "./fakedata";

export default class BillDetailController extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: null };
  }

  componentDidMount() {
    console.log("billId:", this.props.match.params.billId);
    console.log("bill: ", BillDetailData);
    this.setState({ data: BillDetailData });
  }

  componentDidUpdate() {}

  render() {
    return this.state.data ? <BillDetail bill={this.state.data} /> : null;
  }
}
