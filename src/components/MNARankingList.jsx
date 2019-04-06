import React from "react";
import MNARankingItem from "./MNARankingItem";
const MNARankingList = ({ data }) => {
  return (
    <table className="table mt-3">
      <thead>
        <tr>
          <th scope="col">순위</th>
          <th scope="col">의원 이름</th>
          <th scope="col">정당</th>
          <th scope="col">출석률</th>
          <th scope="col">법안 제출</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          return <MNARankingItem item={item} />;
        })}
      </tbody>
    </table>
  );
};

export default MNARankingList;
