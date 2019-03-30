import React from "react";
import mnaList from "./fakedata";
import BasicInfo from "../components/BasicInfo";
import AttendanceInfo from "../components/AttendanceInfo";
import MNABillInfo from "../components/MNABillInfo";
// 의원 페이지
const MNADetail = ({ mnaId }) => {
  return (
    <div>
      <BasicInfo {...mnaList[mnaId]} />
      <AttendanceInfo {...mnaList[mnaId]} />
      <MNABillInfo {...mnaList[mnaId]} />
    </div>
  );
};

export default MNADetail;
