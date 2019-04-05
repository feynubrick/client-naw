import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const SessionAttendanceViewer = ({
  sessionType,
  sessions,
  rate,
  position,
  totalNumOfMNA
}) => {
  return (
    <div className="col">
      <h1>SessionAttendanceViewer</h1>
      <h2>{sessionType}</h2>
      출석률 {rate * 100}% ({position}위/{totalNumOfMNA}명)
      <table className="table">
        <thead>
          <tr>
            <th scope="col">날짜</th>
            <th scope="col">회의명</th>
            <th scope="col">출석</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map(session => (
            <tr>
              <td>{session.date}</td>
              <td>{session.name}</td>
              <td>{session.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SessionAttendanceViewer;
