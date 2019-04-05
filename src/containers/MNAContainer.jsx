import React, { Component } from "react";
import OptionHistogramChart from "../components/OptionHistogramChart";
import MNARankingList from "../components/MNARankingList";
import makeHistogramChartData from "../lib/makeHistogramChartData";
import { mnaData } from "./fakedata";

export default class MNAContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mnaRankList: null
    };
  }

  componentDidMount() {
    this.setState({ mnaRankList: mnaData });
  }
  render() {
    return this.state.mnaRankList ? (
      <div>
        <OptionHistogramChart
          data={makeHistogramChartData(this.state.mnaRankList)}
          options={[
            { key: "attendanceRate", comment: "출석률" },
            { key: "billCount", comment: "의안 제출 수" }
          ]}
        />
        <MNARankingList data={this.state.mnaRankList} />
      </div>
    ) : (
      <div>now loading...</div>
    );
  }
}
