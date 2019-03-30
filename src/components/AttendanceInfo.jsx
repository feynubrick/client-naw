import React from "react";
import SessionAttendanceViewer from "./SessionAttendanceViewer";
// 출석정보
const AttendanceInfo = ({ id, name }) => {
  return (
    <div>
      <h1>의원 출석정보</h1>
      <h2>{name}</h2>
      <div>
        <SessionAttendanceViewer mnaId={id} isMainSession={false} />
        <SessionAttendanceViewer mnaId={id} isMainSession={true} />
      </div>
    </div>
  );
};

export default AttendanceInfo;
