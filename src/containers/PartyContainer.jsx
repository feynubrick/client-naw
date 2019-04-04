import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import PartyRankingList from "../components/PartyRankingList";
import PartyInfo from "../components/PartyInfo";
import OptionHistogramChart from "../components/OptionHistogramChart";
import makeHistogramChartData from "../lib/makeHistogramChartData";
class PartyContainer extends Component {
  state = {
    mnaRankList: [
      {
        rank: 1,
        mnaName: "나경원",
        party: "자유한국당",
        attendanceRate: 50,
        billCount: 21
      },
      {
        rank: 2,
        mnaName: "a",
        party: "자유한국당",
        attendanceRate: 14,
        billCount: 15
      },
      {
        rank: 3,
        mnaName: "n",
        party: "자유한국당",
        attendanceRate: 30,
        billCount: 17
      },
      {
        rank: 4,
        mnaName: "c",
        party: "자유한국당",
        attendanceRate: 20,
        billCount: 10
      },
      {
        rank: 5,
        mnaName: "d",
        party: "바른미래당",
        attendanceRate: 10,
        billCount: 1
      }
    ]
  };
  render() {
    return (
      <Row>
        <Col md={4}>
          <PartyRankingList />
        </Col>
        <Col md={8}>
          <PartyInfo
            party={{
              partyName: "바른정당",
              numberOfMember: 299,
              logo: "http://bareunmirae.kr/images/content/logo_img1_1.jpg",
              rank: 1,
              homepage: "http://bareunmirae.kr"
            }}
          />
          <OptionHistogramChart
            data={makeHistogramChartData(this.state.mnaRankList, "party")}
            options={[
              { key: "attendanceRate", comment: "출석률" },
              { key: "billCount", comment: "의안 제출 수" }
            ]}
          />
        </Col>
      </Row>
    );
  }
}
export default PartyContainer;
