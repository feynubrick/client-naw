import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const BillItem = ({ date, name, makerName, compt, status }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{name}</td>
      <td>{makerName}</td>
      <td>{compt}</td>
      <td>{status}</td>
    </tr>
  );
};

export default BillItem;
