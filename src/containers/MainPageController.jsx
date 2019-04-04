import React from "react";
import PieChart from "../components/PieChart";
// import HistogramChartWrap from "../components/HistogramChartWrap";
import partyMembers from "./fakedataParty";

export default class MainPageController extends React.Component {
  constructor(props) {
    super(props);

    this.state = { partyMemberData: null };
  }

  componentDidMount() {
    console.log(partyMembers);
    this.setState({ partyMemberData: partyMembers });
  }

  render() {
    if (this.state.partyMemberData) {
      var dataSet = this.state.partyMemberData.map(party => party.numOfMembers);
      var titles = this.state.partyMemberData.map(party => party.name);
      var colors = this.state.partyMemberData.map(party => party.color);
    }

    return this.state.partyMemberData ? (
      <div>
        정당별 의원수
        <PieChart
          name="members-per-party"
          dataSet={dataSet}
          titles={titles}
          colors={colors}
        />
      </div>
    ) : (
      <div>loading...</div>
    );
  }
}
