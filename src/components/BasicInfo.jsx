import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import SocialButton from "./SocialButton";
// 기본정보
const BasicInfo = ({
  id,
  name,
  chinesename,
  party_id,
  local,
  stdcomt,
  photo,
  phone,
  address,
  blog,
  twtr,
  fb
}) => {
  return (
    <div>
      <h2>기본정보</h2>
      <div>
        <div>
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">이름</th>
                <td>
                  {name} / {chinesename}
                </td>
              </tr>
              <tr>
                <th scope="row">정당</th>
                <td>{party_id}</td>
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
            </tbody>
          </table>
        </div>
        <img src={photo} alt={`photo_${id}`} class="img-thumbnail" />
        {[phone, address, blog, twtr, fb].map(info => (
          <SocialButton content={info} />
        ))}
      </div>
    </div>
  );
};

export default BasicInfo;
