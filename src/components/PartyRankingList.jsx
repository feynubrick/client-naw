import React from "react";
import { Table } from "react-bootstrap";
const PartyRankingList = ({ parties }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>순위</th>
          <th>정당</th>
          <th>의원수</th>
          <th>평균 출석률</th>
          <th>평균 법안 제출수</th>
        </tr>
      </thead>
      <tbody>
        {parties.map((party, i) => (
          <tr>
            <td>{i + 1}</td>
            <td>
              <p style={`color: ${party.color}`}>party.name</p>
            </td>
            <td>{party.numOfMembers}</td>
            <td>{party.attendanceRate}</td>
            <td>{party.billSubmitCount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PartyRankingList;
