import React from "react";
import SessionAttendanceViewer from "./SessionAttendanceViewer";
// 출석정보
const AttendanceInfo = ({
  name,
  party,
  stdcomtAttendanceRate,
  stdcomtAttendanceRatePosition,
  sessions,
  totalNumOfMNA
}) => {
  return (
    <div>
      <h1>의원 출석정보</h1>
      <h2 style={{ color: `${party.color}` }}>
        {name} / {party.name}
      </h2>
      <div className="row">
        <SessionAttendanceViewer
          sessionType="상임위원회"
          sessions={sessions}
          rate={stdcomtAttendanceRate}
          position={stdcomtAttendanceRatePosition}
          totalNumOfMNA={totalNumOfMNA}
        />
      </div>
    </div>
  );
};

export default AttendanceInfo;
