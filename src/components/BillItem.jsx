import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const BillItem = ({ id, date, name, primaryLawMaker, committee, status }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>
        <Link to={`/bill/${id}`}>{name}</Link>
      </td>
      <td>
        {primaryLawMaker.name}
        <span style={{ color: primaryLawMaker.party.color }}>
          ({primaryLawMaker.party.name})
        </span>
      </td>
      <td>{committee}</td>
      <td>{status}</td>
    </tr>
  );
};

export default BillItem;
