import React from "react";
import {
  bills,
  updateDate,
  totalNumOfBills,
  billsPerCommittee
} from "./fakedataBill";
import BillList from "../components/BillList";
import "bootstrap/dist/css/bootstrap.css";
import PieChart from "../components/PieChart";

class PaginatedBillList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: null,
      updateDate: null,
      totalNumOfBills: null,
      billsPerCommittee: null
    };
  }

  componentDidMount() {
    this.setState({
      bills: bills,
      updateDate: updateDate,
      totalNumOfBills: totalNumOfBills,
      billsPerCommittee: billsPerCommittee
    });
  }

  render() {
    if (this.state.billsPerCommittee) {
      var dataSet = this.state.billsPerCommittee.map(bill => bill.number);
      var titles = this.state.billsPerCommittee.map(bill => bill.committee);
    }

    return this.state.bills ? (
      <div className={`container`}>
        <h1>20대 국회 접수의안 총 {this.state.totalNumOfBills}개</h1>
        <h2>
          최신 업데이트 : {this.state.updateDate} | 자료출처 : 국회
          의안정보시스템
        </h2>
        <p>
          의안은 국회에서 심의하는 법률안·예산안·동의안 등과 같은 안건을
          말합니다. 모든 의안은 상임위원회에서 논의되고 본회의에 회부됩니다.
          국회는 의안 심의를 통해 헌법이 요구하는 국회 기능을 수행하고 국민의
          의사를 국정에 반영합니다.
        </p>
        <PieChart
          name="pie-chart-bill-list"
          dataSet={dataSet}
          titles={titles}
        />
        <BillList bills={bills} />
      </div>
    ) : null;
  }
}

export default PaginatedBillList;
