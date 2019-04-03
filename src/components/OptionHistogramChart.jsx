import React, { Component } from "react";
import HistogramChartWrap from "./HistogramChartWrap";
export default class OptionHistogramChart extends Component {
  state = {
    selectedBtnId: 0
  };

  onOptionBtnClick = btnId => {
    this.setState({ selectedBtnId: btnId });
  };

  render() {
    const { options, chartName } = this.props;

    return (
      <div>
        <div class="btn-group" role="group">
          {options.map((option, i) => {
            return (
              <button
                type="button"
                class="btn btn-secondary"
                onClick={() => {
                  this.onOptionBtnClick(i);
                }}
              >
                {option}
              </button>
            );
          })}
        </div>
        <HistogramChartWrap />
      </div>
    );
  }
}
