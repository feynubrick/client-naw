import React from "react";
import BillItem from "./BillItem";
import "bootstrap/dist/css/bootstrap.css";

const BillList = ({ bills }) => {
  const heading = {
    date: "발의 날짜",
    name: "법안 이름",
    makerName: "발의자",
    compt: "상임위원회",
    status: "처리상태"
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">발의 날짜</th>
          <th scope="col">법안 이름</th>
          <th scope="col">발의자</th>
          <th scope="col">상임위원회</th>
          <th scope="col">처리상태</th>
        </tr>
      </thead>
      <tbody>
        {bills.map(bill => (
          <BillItem {...bill} />
        ))}
      </tbody>
    </table>
  );
};

export default BillList;
