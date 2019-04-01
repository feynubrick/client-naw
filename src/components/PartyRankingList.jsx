import React from "react";
import { Table } from "react-bootstrap";
const PartyRankingList = () => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>순위</th>
          <th>정당</th>
          <th>평균 출석률</th>
          <th>평균 법안 제출수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default PartyRankingList;
