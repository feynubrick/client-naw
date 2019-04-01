import React from "react";
import axios from "axios";
import BasicInfo from "../components/BasicInfo";
import AttendanceInfo from "../components/AttendanceInfo";
import MNABillInfo from "../components/MNABillInfo";
import serverUrl from "../serverInfo";
// 의원 페이지
class MNADetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mnaData: null };
    this.mnaId = props.mnaId;
  }

  componentDidMount() {
    axios
      .get(`${serverUrl}/mna/${this.mnaId}`)
      .then(res => {
        this.setState({ mnaData: res.data });
      })
      .catch(err => {
        console.log(`ERROR occurred!!! => ${err.message}`);
      });
  }

  render() {
    return this.state.mnaData ? (
      <div>
        <BasicInfo {...this.state.mnaData} />
        <AttendanceInfo {...this.state.mnaData} />
        <MNABillInfo {...this.state.mnaData} />
      </div>
    ) : (
      <div />
    );
  }
}

export default MNADetail;
