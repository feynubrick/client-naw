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
    <div className="container mt-5">
      <div className="shadow-lg p-5 mb-5 bg-white rounded">
        <h3 className="text-center mb-3">
          [{billId}] {name}
        </h3>
        <div className="display-5 text-center">{committee}</div>
        <div className="text-center">{date} | 국회의안정보시스템</div>
        <BillStatus status={status} />
        <div>
          <div className="mb-3">
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
        <div className="mt-3">
          <h4 className="my-3">법안 주요내용</h4>
          <div>{summary}</div>
        </div>
      </div>
    </div>
  );
};

export default BillDetail;
