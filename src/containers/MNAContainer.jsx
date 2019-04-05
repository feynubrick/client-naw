import React, { Component } from "react";
import OptionHistogramChart from "../components/OptionHistogramChart";
import MNARankingList from "../components/MNARankingList";
import HistogramChartWrap from "../components/HistogramChartWrap";
import { mnaData } from "./fakedata";

export default class MNAContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mnaList: null,
      histoDataType: 0
    };

    this.onClickAttendanceRateButton = this.onClickAttendanceRateButton.bind(
      this
    );
    this.onClickBillSubmitCountButton = this.onClickBillSubmitCountButton.bind(
      this
    );
  }

  componentDidMount() {
    this.setState({ mnaList: mnaData, histoDataType: 0 });
  }

  onClickAttendanceRateButton() {
    this.setState({ histoDataType: 0 });
  }

  onClickBillSubmitCountButton() {
    this.setState({ histoDataType: 1 });
  }

  render() {
    if (this.state.mnaList) {
      var data =
        this.state.histoDataType === 0
          ? this.state.mnaList.map(mna => mna.attendanceRate)
          : this.state.mnaList.map(mna => mna.billCount);
    }

    return this.state.mnaList ? (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onClickAttendanceRateButton}
        >
          출석률
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onClickBillSubmitCountButton}
        >
          법안제출
        </button>
        <HistogramChartWrap
          dataSet={data}
          chartName="의원 분포"
          name="histogram"
        />
        <MNARankingList data={this.state.mnaList} />
      </div>
    ) : (
      <div>now loading...</div>
    );
  }
}
