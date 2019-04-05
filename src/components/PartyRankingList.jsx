import React from "react";
import { Table } from "react-bootstrap";
const PartyRankingList = ({
  parties,
  onClickPartyName,
  onClickNumOfMembers,
  onClickAttendanceRate,
  onClickBillSubmitCount
}) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>순위</th>
          <th>정당</th>
          <th onClick={onClickNumOfMembers}>의원수</th>
          <th onClick={onClickAttendanceRate}>평균 출석률</th>
          <th onClick={onClickBillSubmitCount}>평균 법안 제출수</th>
        </tr>
      </thead>
      <tbody>
        {parties.map((party, i) => (
          <tr>
            <td>{i + 1}</td>
            <td>
              <p
                style={{ color: `${party.color}` }}
                onClick={() => {
                  onClickPartyName(party.id);
                }}
              >
                {party.name}
              </p>
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
