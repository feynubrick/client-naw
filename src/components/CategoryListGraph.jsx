import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const CategoryListGraph = ({ title }) => {
  return (
    <div>
      <h4>CategoryListGraph</h4>
      {title}

      <img
        src={
          "https://www.copypress.com/wp-content/uploads/2018/05/ultimate-list-of-infographic-graph-makers-560x315.jpg"
        }
        alt={`list_graph`}
        class="img-thumbnail"
      />
    </div>
  );
};

export default CategoryListGraph;
