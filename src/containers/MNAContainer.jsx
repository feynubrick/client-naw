import React, { Component } from "react";
import OptionHistogramChart from "../components/OptionHistogramChart";
import MNARankingList from "../components/MNARankingList";
import makeHistogramChartData from "../lib/makeHistogramChartData";
export default class MNAContainer extends Component {
  state = {
    mnaRankList: [
      {
        rank: 1,
        mnaName: "나경원",
        party: "자유한국당",
        attendanceRate: 50,
        billCount: 21
      },
      {
        rank: 2,
        mnaName: "a",
        party: "자유한국당",
        attendanceRate: 14,
        billCount: 15
      },
      {
        rank: 3,
        mnaName: "n",
        party: "자유한국당",
        attendanceRate: 30,
        billCount: 17
      },
      {
        rank: 4,
        mnaName: "c",
        party: "자유한국당",
        attendanceRate: 20,
        billCount: 10
      },
      {
        rank: 5,
        mnaName: "d",
        party: "자유한국당",
        attendanceRate: 10,
        billCount: 1
      }
    ]
  };

  render() {
    return (
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
    );
  }
}
