import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import PartyRankingList from "../components/PartyRankingList";

class PartyContainer extends Component {
  render() {
    return (
      <Row>
        <Col md={4}>
          <PartyRankingList />
        </Col>
        <Col md={8}>
          <h1>하이</h1>
        </Col>
      </Row>
    );
  }
}
export default PartyContainer;
