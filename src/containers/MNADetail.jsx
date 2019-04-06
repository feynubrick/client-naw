import React from "react";
import BasicInfo from "../components/BasicInfo";
import AttendanceInfo from "../components/AttendanceInfo";
import MNABillInfo from "../components/MNABillInfo";
import axios from "axios";
import serverUrl from "../serverInfo";
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
    console.log("AAADWISGHIHSGHIHASDGHIASDGHISADG");
    axios
      .get(`${serverUrl}/mna/${this.state.mnaId}`)
      .then(res => {
        this.setState({ mnaData: res.data });
      })
      .catch(err => {
        console.log(`ERROR occurred!!! => ${err.message}`);
      });
    // this.setState({ mnaData: mnaDetailData });
  }

  // componentDidUpdate() {
  //   axios
  //     .get(`${serverUrl}/mna/${this.state.mnaId}`)
  //     .then(res => {
  //       this.setState({ mnaData: res.data });
  //     })
  //     .catch(err => {
  //       console.log(`ERROR occurred!!! => ${err.message}`);
  //     });
  // }

  render() {
    return this.state.mnaData ? (
      <div className="container">
        <BasicInfo {...this.state.mnaData} />
        <MNABillInfo {...this.state.mnaData} />
      </div>
    ) : (
      <div class="d-flex justify-content-center mt-5">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}
