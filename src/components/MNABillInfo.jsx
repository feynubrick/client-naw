import React from "react";
import CategoryConcentricGraph from "./PieChart";
import PieChart from "./Histogram";
import "bootstrap/dist/css/bootstrap.css";

const MNABillInfo = ({ id, name }) => {
  return (
    <div>
      <h2>MNABillInfo</h2>
      <h3>{`mnaName: ${name}, mnaId: ${id}`}</h3>
      <div className="row">
        <div className="col">
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
        </div>
        <div className="col">
          <PieChart title={`제출법안 상태`} />
        </div>
      </div>
    </div>
  );
};

export default MNABillInfo;
