import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import PartyRankingList from "../components/PartyRankingList";
import PartyInfo from "../components/PartyInfo";
import OptionHistogramChart from "../components/OptionHistogramChart";
import makeHistogramChartData from "../lib/makeHistogramChartData";
import { partyData } from "./fakedata";

class PartyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      clickedPartyId: 0
    };
  }

  componentDidMount() {
    this.setState({
      data: partyData,
      clickedPartyId: 2
    });
  }

  render() {
    return this.state.data ? (
      <Row>
        <Col md={4}>
          <PartyRankingList parties={this.state.parties} />
        </Col>
        <Col md={8}>
          <PartyInfo
            party={this.state.data.parties[this.state.clickedPartyId]}
          />
          <OptionHistogramChart
            data={makeHistogramChartData(this.state.data.mnaList, "party")}
            options={[
              { key: "attendanceRate", comment: "출석률" },
              { key: "billCount", comment: "의안 제출 수" }
            ]}
          />
        </Col>
      </Row>
    ) : (
      <div>now loading...</div>
    );
  }
}
export default PartyContainer;
