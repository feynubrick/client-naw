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
          {heading.map(text => (
            <th key={text} scope="col">
              {text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bills.map(bill => (
          <BillItem {...bill} key={bill.name} />
        ))}
      </tbody>
    </table>
  );
};

export default BillList;
