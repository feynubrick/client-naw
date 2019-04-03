import drawHistogram from "../lib/histogramChartHelper.js";
import React, { Component } from "react";

export default class HistogramChartWrap extends Component {
  componentDidMount() {
    drawHistogram(this.props);
  }
  componentDidUpdate(prevProps) {
    drawHistogram(this.props);
  }

  render() {
    const { chartName } = this.props;
    return (
      <div className="col-12">
        <h1>{chartName}</h1>
        <svg
          className="histo-viz"
          style={{ height: "400px", width: "600px" }}
        />
      </div>
    );
  }
}
