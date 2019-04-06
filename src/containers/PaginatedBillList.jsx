import React from "react";
import BillList from "../components/BillList";
import "bootstrap/dist/css/bootstrap.css";
import PieChart from "../components/PieChart";
import { billData } from "./fakedata";

class PaginatedBillList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    this.setState({
      data: billData
    });
  }

  render() {
    if (this.state.data) {
      var dataSet = this.state.data.billsPerCommittee.map(bill => bill.number);
      var titles = this.state.data.billsPerCommittee.map(
        bill => bill.committee
      );
    }

    return this.state.data ? (
      <div className="container mt-5">
        <div className="row shadow-lg p-5 mb-5 bg-white rounded">
          <h1>20대 국회 접수의안 총 {this.state.data.totalNumOfBills}개</h1>
          <h3>
            최신 업데이트 : {this.state.data.updateDate} | 자료출처 : 국회
            의안정보시스템
          </h3>
          <p>
            의안은 국회에서 심의하는 법률안·예산안·동의안 등과 같은 안건을
            말합니다. 모든 의안은 상임위원회에서 논의되고 본회의에 회부됩니다.
            국회는 의안 심의를 통해 헌법이 요구하는 국회 기능을 수행하고 국민의
            의사를 국정에 반영합니다.
          </p>
          <div className="col mt-5">
            <PieChart
              name="pie-chart-bill-list"
              dataSet={dataSet}
              titles={titles}
            />
          </div>
        </div>
        <div className="row shadow-lg p-5 mb-5 bg-white rounded">
          <BillList bills={this.state.data.bills} />
        </div>
      </div>
    ) : null;
  }
}

export default PaginatedBillList;
