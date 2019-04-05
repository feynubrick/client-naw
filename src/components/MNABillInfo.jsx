import React from "react";
import PieChartController from "../containers/PieChartController";
import Histogram from "./Histogram";
import "bootstrap/dist/css/bootstrap.css";

const MNABillInfo = ({
  id,
  name,
  stdcomtAttendanceRate,
  stdcomtAttendanceRatePosition,
  totalNumOfMNA,
  stdcomtBillSubmitCount,
  stdcomtBillSubmitCountPosition,
  billsPerCommittee,
  billsPerStatus
}) => {
  var billsPerCommitteeTitles = billsPerCommittee.map(data => data.name);
  var billsPerCommitteeValues = billsPerCommittee.map(data => data.value);
  var billsPerStatusTitles = billsPerStatus.map(data => data.name);
  var billsPerStatusValues = billsPerStatus.map(data => data.value);

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
                <td>
                  {stdcomtBillSubmitCount}회 ({stdcomtBillSubmitCountPosition}위
                  / {totalNumOfMNA})
                </td>
              </tr>
              <tr>
                <th scope="col">법안통과율</th>
                <td>
                  {stdcomtAttendanceRate}% ({stdcomtAttendanceRatePosition}위 /{" "}
                  {totalNumOfMNA})
                </td>
              </tr>
            </tbody>
          </table>
          <PieChart
            name={`pie-chart-bill-type-mna-${id}`}
            dataSet={billsPerCommitteeValues}
            titles={billsPerCommitteeTitles}
          />
        </div>
        <div className="col">
          <PieChart
            name={`pie-chart-bill-status-mna-${id}`}
            dataSet={billsPerStatusValues}
            title={billsPerStatusTitles}
          />
        </div>
      </div>
    </div>
  );
};

export default MNABillInfo;
