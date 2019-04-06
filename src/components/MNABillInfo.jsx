import React from "react";
import PieChartController from "../containers/PieChartController";
import PieChart from "./PieChart";
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
      <div className="row shadow-lg p-3 mb-5 bg-white rounded">
        <div className="col-12">
          <h3>법안 제출 정보</h3>
          <table className="my-4">
            <tbody>
              <tr>
                <th scope="col">법안제출</th>
                <td>
                  {stdcomtBillSubmitCount}회 ({stdcomtBillSubmitCountPosition}
                  위)
                </td>
              </tr>
              <tr>
                <th scope="col">법안통과율</th>
                <td>
                  {(stdcomtAttendanceRate * 100).toFixed(2)}% (
                  {stdcomtAttendanceRatePosition}위)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col d-flex justify-content-center">
          <PieChart
            name={`pie-chart-bill-type-mna-${id}`}
            dataSet={billsPerCommitteeValues}
            titles={billsPerCommitteeTitles}
          />
        </div>
        <div className="col d-flex justify-content-center">
          <PieChart
            name={`pie-chart-bill-status-mna-${id}`}
            dataSet={billsPerStatusValues}
            titles={billsPerStatusTitles}
          />
        </div>
      </div>
    </div>
  );
};

export default MNABillInfo;
