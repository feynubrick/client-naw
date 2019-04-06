import React from "react";
import PieChart from "../components/PieChart";
import { mainData } from "./fakedata";
import RankingViewer from "../components/RankingViewer";
import "bootstrap/dist/css/bootstrap.css";

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
        <div style={{ minHeight: "80vh" }} className="container pt-5">
          <h2>정당별 의석수</h2>
          <PieChart
            name="members-per-party"
            dataSet={numOfMembersPerParty}
            titles={partyNames}
            colors={colors}
          />
        </div>
        <div className="bg-light">
          <div style={{ minHeight: "80vh" }} className="container">
            <div className="row pt-5">
              <div className="col-12 text-center">
                <h1>가장 열심히 출석한 의원은?</h1>
              </div>
              <div className="col mt-5">
                <RankingViewer
                  title="출석률 상위 5명"
                  headings={["순위", "이름", "정당", "출석률"]}
                  data={this.state.data.attendanceRateTop5}
                />
              </div>
              <div className="col mt-5">
                <RankingViewer
                  title="출석률 하위 5명"
                  headings={["순위", "이름", "정당", "출석률"]}
                  data={this.state.data.attendanceRateBot5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>loading...</div>
    );
  }
}
