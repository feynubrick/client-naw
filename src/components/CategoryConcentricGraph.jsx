import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const CategoryConcentricGraph = ({ title }) => {
  return (
    <div>
      <h4>CategoryConcentricGraph</h4>
      {title}

      <img
        src={
          "https://www.conceptdraw.com/How-To-Guide/picture/GRAPHS-AND-CHARTS-Pie-charts-Sector-weightings-Sample.png"
        }
        alt={`concentric_graph`}
        className="img-thumbnail"
      />
    </div>
  );
};

export default CategoryConcentricGraph;
