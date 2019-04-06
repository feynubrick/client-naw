import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const MNARankingItem = ({ item }) => {
  const { id, rank, mnaName, party, attendanceRate, billCount } = item;

  return (
    <tr>
      <td>{rank}</td>
      <td>
        <NavLink className="nav-link" to={`/mna/${id}`}>
          {mnaName}
        </NavLink>
      </td>
      <td>{party}</td>
      <td>{`${(attendanceRate * 100).toFixed(2)} %`}</td>
      <td>{billCount}</td>
    </tr>
  );
};

export default MNARankingItem;
