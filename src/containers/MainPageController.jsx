import React from "react";
import PieChart from "../components/PieChart";
import { mainData } from "./fakedata";
import RankingViewer from "../components/RankingViewer";

export default class MainPageController extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: null };
  }

  componentDidMount() {
    this.setState({ data: mainData });
  }

  render() {
    if (this.state.data) {
      var numOfMembersPerParty = this.state.data.numOfMembersPerParty.map(
        item => item.numOfMembers
      );
      var partyNames = this.state.data.numOfMembersPerParty.map(
        item => item.name
      );
      var colors = this.state.data.numOfMembersPerParty.map(item => item.color);
    }

    return this.state.data ? (
      <div>
        <RankingViewer
          title="출석률 상위 5명"
          headings={["순위", "이름", "정당", "출석률"]}
          data={this.state.data.attendanceRateTop5}
        />
        <RankingViewer
          title="출석률 하위 5명"
          headings={["순위", "이름", "정당", "출석률"]}
          data={this.state.data.attendanceRateBot5}
        />
        <div>
          <PieChart
            name="members-per-party"
            dataSet={numOfMembersPerParty}
            titles={partyNames}
            colors={colors}
          />
        </div>
      </div>
    ) : (
      <div>loading...</div>
    );
  }
}
