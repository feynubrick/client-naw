import React from "react";
import BillStatusIcon from "./BillStatusIcon";
import "bootstrap/dist/css/bootstrap.css";

const ArrowIcon = function() {
  return <span className="badge badge-light"> > </span>;
};

const BillStatus = function() {
  const status = [
    { name: "접수", now: false },
    { name: "위원회 심사", now: true },
    { name: "체계자구 심사", now: false },
    { name: "본회의 심의", now: false },
    { name: "정부 이송", now: false },
    { name: "공포", now: false }
  ];
  return (
    <div className="display-5 text-center">
      {status.map((stat, i) => (
        <span>
          <BillStatusIcon title={stat.name} now={stat.now} />
          {i !== status.length - 1 ? <ArrowIcon /> : null}
        </span>
      ))}
    </div>
  );
};

export default BillStatus;
