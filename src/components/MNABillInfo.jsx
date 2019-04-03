import React from "react";
import PieChartController from "../containers/PieChartController";
import Histogram from "./Histogram";
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
          <PieChartController
            name={`pie-chart-bill-type-mna-${id}`}
            title={`제출법안의 상임위별 비율`}
          />
        </div>
        <div className="col">
          <Histogram title={`제출법안 상태`} />
        </div>
      </div>
    </div>
  );
};

export default MNABillInfo;
