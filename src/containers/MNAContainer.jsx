import React, { Component } from "react";
import OptionHistogramChart from "../components/OptionHistogramChart";

export default class MNAContainer extends Component {
  render() {
    return (
      <div>
        <OptionHistogramChart options={["출석률", "의안 제출 수"]} />
      </div>
    );
  }
}
