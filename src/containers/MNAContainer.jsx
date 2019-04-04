import React, { Component } from "react";
import OptionHistogramChart from "../components/OptionHistogramChart";
import MNARankingList from "../components/MNARankingList";

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
    function makeChartData(data, groupBy) {
      const result = [];
      result["attendanceRate"] = [];
      result["billCount"] = [];

      const billCountYDomain = data.reduce(
        (acc, curr) => {
          if (curr.billCount < acc.min) {
            acc.min = curr.billCount;
          }
          if (curr.billCount > acc.max) {
            acc.max = curr.billCount;
          }
          return acc;
        },
        { min: Infinity, max: 0 }
      );
      console.log(billCountYDomain);
      for (let i = 1; i < 11; i++) {
        result["attendanceRate"].push({ name: `~ ${i}0%` });
        result["billCount"].push({
          name: `~ ${Math.floor(
            ((billCountYDomain.max - billCountYDomain.min) / 10) * i
          ) + billCountYDomain.min}`
        });
      }

      data.forEach(data => {
        const attendanceIndex = Math.floor(data.attendanceRate / 10) - 1;
        let billIndex =
          Math.floor(
            data.billCount /
              ((billCountYDomain.max - billCountYDomain.min) / 10)
          ) - 1;
        if (billIndex < 0) billIndex++;
        result["attendanceRate"][attendanceIndex]["count"] =
          result["attendanceRate"][attendanceIndex]["count"] || 0;
        result["attendanceRate"][attendanceIndex]["count"]++;

        result["billCount"][billIndex]["count"] =
          result["billCount"][billIndex]["count"] || 0;
        result["billCount"][billIndex]["count"]++;
      });
      console.log(result);
      return result;
    }

    return (
      <div>
        <OptionHistogramChart
          data={makeChartData(this.state.mnaRankList)}
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
