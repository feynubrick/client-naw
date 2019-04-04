import React from "react";
import BillItem from "./BillItem";
import "bootstrap/dist/css/bootstrap.css";

const BillList = ({ bills }) => {
  const heading = [
    "발의 날짜",
    "법안 이름",
    "발의자",
    "상임위원회",
    "처리상태"
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          {heading.map(text => (
            <th key={text} scope="col">
              {text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bills.map(bill => (
          <BillItem {...bill} key={bill.id} />
        ))}
      </tbody>
    </table>
  );
};

export default BillList;
