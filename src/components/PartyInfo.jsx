import React from "react";
const PartyInfo = ({ party }) => {
  const { name, color, numOfMembers, homepage, rank, logo } = party;
  return (
    <div className="col">
      <div className="row">
        <h3 style={{ color: `${color}` }}>
          <a href={homepage} target="_blank">
            {name}
          </a>
        </h3>
      </div>
      <div className="row">의원수: {`${numOfMembers}명 (${rank}위)`}</div>
      <div>
        <img src={logo} alt={name} class="img-thumbnail" />
      </div>
    </div>
  );
};

export default PartyInfo;
