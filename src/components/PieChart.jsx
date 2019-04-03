import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { draw } from "../lib/pieChartHelpers";

export default class PieChart extends React.Component {
  constructor(props) {
    console.log("PieChart: constructor");
    super(props);
  }

  componentDidMount() {
    console.log("PieChart: componentDidMount");
    console.log("  this.props: ", this.props);
    draw(this.props);
  }

  componentDidUpdate() {
    console.log("PieChart: componentDidUpdate");
  }

  render() {
    console.log("PieChart: render");
    return <div id={this.props.name} />;
  }
}
