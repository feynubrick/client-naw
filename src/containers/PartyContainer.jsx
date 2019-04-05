import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import PartyRankingList from "../components/PartyRankingList";
import PartyInfo from "../components/PartyInfo";
import OptionHistogramChart from "../components/OptionHistogramChart";
import makeHistogramChartData from "../lib/makeHistogramChartData";
import { draw } from "../lib/histogramHelpers";
import { partyData } from "./fakedata";
import PieChart from "../components/PieChart";
import HistogramChartWrap from "../components/HistogramChartWrap";

class PartyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partiesSortByNumOfMembers: null,
      partiesSortByAttendanceRate: null,
      partiesSortByBillSubmitCount: null,
      sortMode: 0,
      mnaList: null,
      clickedPartyId: 1,
      histoDataType: null
    };

    this.onClickPartyName = this.onClickPartyName.bind(this);
    this.onClickNumOfMembers = this.onClickNumOfMembers.bind(this);
    this.onClickAttendanceRate = this.onClickAttendanceRate.bind(this);
    this.onClickBillSubmitCount = this.onClickBillSubmitCount.bind(this);
    this.onClickAttendanceRateButton = this.onClickAttendanceRateButton.bind(
      this
    );
    this.onClickBillSubmitCountButton = this.onClickBillSubmitCountButton.bind(
      this
    );
  }

  componentDidMount() {
    var parties = partyData.parties;
    console.log(this.sortBy(parties, "numOfMembers"));
    console.log(this.sortBy(parties, "attendanceRate"));
    console.log(this.sortBy(parties, "billSubmitCount"));

    this.setState({
      partiesSortByNumOfMembers: this.sortBy(parties.slice(), "numOfMembers"),
      partiesSortByAttendanceRate: this.sortBy(
        parties.slice(),
        "attendanceRate"
      ),
      partiesSortByBillSubmitCount: this.sortBy(
        parties.slice(),
        "billSubmitCount"
      ),
      sortMode: 0,
      mnaList: partyData.mnaList,
      clickedPartyId: 1,
      histoDataType: 0
    });
  }

  componentDidUpdate() {}

  sortBy(arr, property) {
    console.log(property);
    return arr
      .sort((a, b) => {
        if (a[property] > b[property]) {
          return -1;
        } else if (a[property] < b[property]) {
          return 1;
        }
        return 0;
      })
      .map((item, i) => {
        item.rank = i + 1;
        return item;
      });
  }

  onClickPartyName(id) {
    this.setState({ clickedPartyId: id });
  }

  onClickNumOfMembers() {
    this.setState({ sortMode: 0 });
  }

  onClickAttendanceRate() {
    this.setState({ sortMode: 1 });
  }

  onClickBillSubmitCount() {
    this.setState({ sortMode: 2 });
  }

  onClickAttendanceRateButton() {
    this.setState({ histoDataType: 0 });
  }

  onClickBillSubmitCountButton() {
    this.setState({ histoDataType: 1 });
  }

  render() {
    switch (this.state.sortMode) {
      case 0:
        var parties = this.state.partiesSortByNumOfMembers;
        break;
      case 1:
        parties = this.state.partiesSortByAttendanceRate;
        break;
      case 2:
        parties = this.state.partiesSortByBillSubmitCount;
        break;
      default:
        parties = this.state.partiesSortByNumOfMembers;
    }

    if (this.state.mnaList) {
      var party = parties.filter(
        party => party.id === this.state.clickedPartyId
      )[0];
      var rank = party.rank;

      var numOfMembersPerPartyData = parties.map(party => party.numOfMembers);
      var numOfMembersPerPartyTitles = parties.map(party => party.name);
      var numOfMembersPerPartyColors = parties.map(party => party.color);
      var data =
        this.state.histoDataType === 0
          ? this.state.mnaList.map(mna => mna.attendanceRate)
          : this.state.mnaList.map(mna => mna.billCount);
    }

    return this.state.mnaList ? (
      <div>
        <Row>
          <Col md={8}>
            <PartyRankingList
              parties={parties}
              onClickPartyName={this.onClickPartyName}
              onClickNumOfMembers={this.onClickNumOfMembers}
              onClickAttendanceRate={this.onClickAttendanceRate}
              onClickBillSubmitCount={this.onClickBillSubmitCount}
            />
          </Col>
          <Col md={4}>
            <PartyInfo party={party} rank={rank} />
            <div>
              <h3>정당별 의석 분포</h3>
              <PieChart
                name="pie-chart-party-num-of-members"
                dataSet={numOfMembersPerPartyData}
                titles={numOfMembersPerPartyTitles}
                colors={numOfMembersPerPartyColors}
              />
            </div>
          </Col>
        </Row>
        <Row>
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
            chartName="소속의원 분포"
            name="histogram"
          />
        </Row>
      </div>
    ) : (
      <div>now loading...</div>
    );
  }
}
export default PartyContainer;
