import React from "react";
import MNADetail from "./MNADetail";
// 의원 페이지
const MNA = () => {
  return (
    <div>
      의원 페이지
      <MNADetail mnaId={3} />
    </div>
  );
};

export default MNA;
