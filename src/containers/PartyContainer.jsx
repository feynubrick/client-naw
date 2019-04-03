import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import PartyRankingList from "../components/PartyRankingList";
import PartyInfo from "../components/PartyInfo";
import OptionHistogramChart from "../components/OptionHistogramChart";
class PartyContainer extends Component {
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
          <OptionHistogramChart options={["출석률", "의안 제출 수"]} />
        </Col>
      </Row>
    );
  }
}
export default PartyContainer;
