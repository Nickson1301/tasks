import React from "react";
import { Link, Outlet } from "react-router-dom";
const HooksComp = () => {
  return (
    <div>
      <h2>this is Hooks component</h2>
      <div className="card border-primary">
        <div className="card-header border-primary"></div>
      </div>
      <div className="card-body border-primary">
        <Outlet />
      </div>
    </div>
  );
};

export default HooksComp;
