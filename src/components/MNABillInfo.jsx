import React from "react";
import CategoryConcentricGraph from "./CategoryConcentricGraph";
import CategoryListGraph from "./CategoryListGraph";

const MNABillInfo = ({ id, name }) => {
  return (
    <div>
      <h2>MNABillInfo</h2>
      <h3>{`mnaName: ${name}, mnaId: ${id}`}</h3>
      <table>
        <tbody>
          <tr>
            <th scope="col">법안제출</th>
            <td>17회 (173위)</td>
          </tr>
          <tr>
            <th scope="col">법안통과율</th>
            <td>10% (200위)</td>
          </tr>
        </tbody>
      </table>
      <CategoryConcentricGraph title={`제출법안의 상임위별 비율`} />
      <CategoryListGraph title={`제출법안 상태`} />
    </div>
  );
};

export default MNABillInfo;
