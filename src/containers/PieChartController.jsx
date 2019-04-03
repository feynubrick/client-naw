import React from "react";
import PieChart from "../components/PieChart";

export default class PieChartController extends React.Component {
  constructor(props) {
    console.log("PieChartController: constructor");
    super(props);

    this.state = { dataSet: [10, 20, 30, 40, 50, 60] };
  }

  componentDidMount() {
    console.log("PieChartController: componentDidMount");
  }

  componentDidUpdate() {
    console.log("PieChartController: componentDidUpdate");
  }

  render() {
    console.log("PieChartController: render");
    return <PieChart name={this.props.name} dataSet={this.state.dataSet} />;
  }
}
