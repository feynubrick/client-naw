import React from "react";
const PartyInfo = ({ party }) => {
  const { partyName, numberOfMember, rank, homepage, logo } = party;
  return (
    <div className="row">
      <div className="col-12">
        <h3>{partyName}</h3>
      </div>
      <div className="col-3">의원수: </div>
      <div className="col-9">{`${numberOfMember}명 (${rank}위)`}</div>
      <div className="col-12">홈페이지 주소: {homepage}</div>
      <img src={logo} />
    </div>
  );
};

export default PartyInfo;
