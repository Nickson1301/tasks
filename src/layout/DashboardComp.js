import React from "react";
import {  Outlet } from "react-router-dom";
import NavComp from "./NavComp";
const DashboardComp = () => {
  return (
    <div>
      <h2>this is Dashboard component</h2>
      <div className="container">
        <div className="card-header border-success">
          <NavComp/>
        </div>
        <div className="card-body border-primary">
          <Outlet />
        </div>
        <div className="card-footer border-primary">card footer</div>
      </div>
    </div>
  );
};

export default DashboardComp;
