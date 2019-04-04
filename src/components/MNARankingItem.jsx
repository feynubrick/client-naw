import React from "react";

const MNARankingItem = ({ item }) => {
  const { rank, mnaName, party, attendanceRate, billCount } = item;

  return (
    <tr>
      <td>{rank}</td>
      <td>{mnaName}</td>
      <td>{party}</td>
      <td>{attendanceRate}</td>
      <td>{billCount}</td>
    </tr>
  );
};

export default MNARankingItem;
