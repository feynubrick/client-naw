import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import SocialButton from "./SocialButton";
// 기본정보
const BasicInfo = ({
  id,
  name,
  chinesename,
  party,
  local,
  stdcomt,
  photo,
  phone,
  address,
  email,
  mnaUrl,
  history
}) => {
  return (
    <div className="container-fluid">
      <h2>기본정보</h2>
      <div className="row">
        <div className="col-8">
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">이름</th>
                <td>
                  {name} / {chinesename}
                </td>
              </tr>
              <tr>
                <th scope="row">정당</th>
                <td>
                  <p style={{ color: `${party.color}` }}>{party.name}</p>
                </td>
              </tr>
              <tr>
                <th scope="row">지역구</th>
                <td>{local}</td>
              </tr>
              <tr>
                <th scope="row">소속 상임위원회</th>
                <td>
                  <ul>
                    {stdcomt.split(", ").map(committee => (
                      <li key={committee}>{committee}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <th scope="row">약력</th>
                <td>{history}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <img src={photo} alt={`photo_${id}`} className="img-thumbnail" />
          {[phone, address, email, mnaUrl].map(info => (
            <SocialButton key={`${info}`} content={info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
