import React from "react";
import axios from "axios";
import BasicInfo from "../components/BasicInfo";
import AttendanceInfo from "../components/AttendanceInfo";
import MNABillInfo from "../components/MNABillInfo";
// 의원 페이지
class MNADetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mnaData: null };
    this.mnaId = props.mnaId;
  }

  componentDidMount() {
    console.log(`this.mnaId: ${this.state.mnaId}`);
    axios
      .get(
        `http://ec2-13-209-40-96.ap-northeast-2.compute.amazonaws.com:3000/mna/${
          this.mnaId
        }`
      )
      .then(res => {
        this.setState({ mnaData: res.data });
        console.log(this.mnaData);
      })
      .catch(err => {
        console.log(`ERROR occurred!!! => ${err.message}`);
      });
  }

  render() {
    console.log("rendering...");
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
