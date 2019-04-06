import React from "react";
import BillStatus from "./BillStatus";
import "bootstrap/dist/css/bootstrap.css";

const BillDetail = function({ bill }) {
  const {
    billId,
    date,
    name,
    primaryLawMaker,
    committee,
    status,
    lawMakers,
    summary,
    linkToNA
  } = bill;
  return (
    <div>
      <div className="display-4 text-center">
        [{billId}] {name}
      </div>
      <div className="display-5 text-center">{committee}</div>
      <div className="text-center">{date} | 국회의안정보시스템</div>
      <BillStatus status={status} />
      <div>
        <div className="display-5">
          대표발의: {primaryLawMaker.name}(
          <span style={{ color: `${primaryLawMaker.party.color}` }}>
            {primaryLawMaker.party.name}
          </span>
          /{primaryLawMaker.chinesename})
        </div>
        <ul className="list-inline">
          {lawMakers.map(lawMaker => (
            <li key={lawMaker} className="list-inline-item">
              {lawMaker.name}(
              <span style={{ color: `${lawMaker.party.color}` }}>
                {lawMaker.party.name}
              </span>
              /{lawMaker.chinesename})
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="display-4">법안 주요내용</div>
        <div>{summary}</div>
      </div>
    </div>
  );
};

export default BillDetail;
