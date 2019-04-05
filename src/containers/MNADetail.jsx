import React from "react";
import BasicInfo from "../components/BasicInfo";
import AttendanceInfo from "../components/AttendanceInfo";
import MNABillInfo from "../components/MNABillInfo";

export default class MNADetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mnaId: props.match.params.mnaId,
      mnaProfile: null,
      attendanceRate: null,
      attendanceRatePosition: null,
      billSubmitCount: null,
      billSubmitCountPosition: null,
      billsPerCommittee: null,
      billsPerStatus: null
    };
  }

  componentDidMount() {
    axios
      .get(`${serverUrl}/mna/${this.state.mnaId}`)
      .then(res => {
        this.setState({ mnaData: res.data });
      })
      .catch(err => {
        console.log(`ERROR occurred!!! => ${err.message}`);
      });
  }

  render() {
    return this.state.mnaProfile ? (
      <div>
        <BasicInfo {...this.state.mnaData} />
        <AttendanceInfo {...this.state.mnaData} />
        <MNABillInfo mnaId={this.props.mnaId} />
      </div>
    ) : null;
  }
}
