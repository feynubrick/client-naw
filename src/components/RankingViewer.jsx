import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const MainPage = ({ title, data, headings }) => {
  return (
    <div>
      <h2>{title}</h2>
      <table className="table">
        <thead>
          <tr>
            {headings.map(text => (
              <th scope="col">{text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((mna, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{mna.name}</td>
              <td>
                <p style={{ color: `${mna.partyColor}` }}>{mna.party}</p>
              </td>
              <td>{mna.attendanceRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainPage;
