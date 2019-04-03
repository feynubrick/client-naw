import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const BillStatusIcon = function({ title, now }) {
  const className = now ? `badge badge-primary` : `badge badge-secondary`;
  return <div className={className}>{title}</div>;
};

export default BillStatusIcon;
