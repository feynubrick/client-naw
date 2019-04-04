import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const BillItem = ({
  id,
  date,
  name,
  primaryLawMakerName,
  committee,
  status
}) => {
  return (
    <tr>
      <td>{date}</td>
      <td>
        <Link to={`/bill/${id}`}>{name}</Link>
      </td>
      <td>{primaryLawMakerName}</td>
      <td>{committee}</td>
      <td>{status}</td>
    </tr>
  );
};

export default BillItem;
