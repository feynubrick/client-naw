import React from "react";
import BillStatus from "./BillStatus";

const BillDetail = function() {
  return (
    <div>
      <div>법안 이름</div>
      <div>상임위 이름</div>
      <div>
        <span>시간</span>
        <span>출처</span>
      </div>
      <BillStatus />
    </div>
  );
};

export default BillDetail;
