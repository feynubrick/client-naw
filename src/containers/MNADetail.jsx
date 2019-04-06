import React from "react";
import BasicInfo from "../components/BasicInfo";
import AttendanceInfo from "../components/AttendanceInfo";
import MNABillInfo from "../components/MNABillInfo";
import { mnaDetailData } from "./fakedata";

export default class MNADetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mnaId: props.match.params.mnaId,
      mnaData: null
    };
  }

  componentDidMount() {
    // axios
    //   .get(`${serverUrl}/mna/${this.state.mnaId}`)
    //   .then(res => {
    //     this.setState({ mnaData: res.data });
    //   })
    //   .catch(err => {
    //     console.log(`ERROR occurred!!! => ${err.message}`);
    //   });
    this.setState({ mnaData: mnaDetailData });
  }

  render() {
    return this.state.mnaData ? (
      <div>
        <BasicInfo {...this.state.mnaData} />
        <AttendanceInfo {...this.state.mnaData} />
        <MNABillInfo mnaId={this.props.mnaId} />
      </div>
    ) : null;
  }
}