import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const BillItem = ({ id, date, name, makerName, compt, status }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>
        <Link to={`/bill/${id}`} name={name} compt={compt}>
          {name}
        </Link>
      </td>
      <td>{makerName}</td>
      <td>{compt}</td>
      <td>{status}</td>
    </tr>
  );
};

export default BillItem;
