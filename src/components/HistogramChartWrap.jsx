import drawHistogram from "../lib/histogramChartHelper.js";
import { draw, update } from "../lib/histogramHelpers";
import React, { Component } from "react";

export default class HistogramChartWrap extends Component {
  componentDidMount() {
    // drawHistogram(this.props);
    draw(this.props);
  }
  componentDidUpdate(prevProps) {
    // drawHistogram(this.props);
    update(this.props);
  }

  render() {
    const { chartName, name } = this.props;
    return (
      <div className="col-12">
        <h1>{chartName}</h1>
        {/* <svg
          className="histo-viz"
          style={{ height: "400px", width: "600px" }}
        /> */}
        <div id={name} />
      </div>
    );
  }
}
