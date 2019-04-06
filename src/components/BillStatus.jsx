import React from "react";
import BillStatusIcon from "./BillStatusIcon";
import "bootstrap/dist/css/bootstrap.css";

const ArrowIcon = function() {
  return <span className="badge badge-light"> > </span>;
};

const BillStatus = function(props) {
  const status = [
    "접수",
    "위원회 심사",
    "체계자구 심사",
    "본회의 심의",
    "정부 이송",
    "공포"
  ];
  return (
    <div className="display-5 my-4 text-center">
      {status.map((stat, i) => (
        <span key={i}>
          <BillStatusIcon title={stat} now={props.status === stat} />
          {i !== status.length - 1 ? <ArrowIcon /> : null}
        </span>
      ))}
    </div>
  );
};

export default BillStatus;
