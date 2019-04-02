import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Histogram = ({ title }) => {
  return (
    <div>
      <h4>Histogram</h4>
      {title}

      <img
        src={
          "https://www.copypress.com/wp-content/uploads/2018/05/ultimate-list-of-infographic-graph-makers-560x315.jpg"
        }
        alt={`list_graph`}
        className="img-thumbnail"
      />
    </div>
  );
};

export default Histogram;
