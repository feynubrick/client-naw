import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const SessionAttendanceViewer = ({ mnaId, isMainSession }) => {
  const sessionType = isMainSession ? "본회의" : "상임위원회";

  return (
    <div class="col">
      <h1>SessionAttendanceViewer</h1>
      <h2>{sessionType}</h2>
      {`mnaId: ${mnaId}`}
      출석률 81% (33위/299명)
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">날짜</th>
            <th scope="col">회의명</th>
            <th scope="col">출석</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>2019-03-01</td>
            <td>회의이름1</td>
            <td>출석</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>2019-03-02</td>
            <td>회의이름2</td>
            <td>결석</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>2019-03-03</td>
            <td>회의이름3</td>
            <td>청가</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SessionAttendanceViewer;
