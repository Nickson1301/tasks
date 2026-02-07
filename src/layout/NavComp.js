import React from "react";
import { Link } from "react-router-dom";

const NavComp = () => {
  return (
    <div>
      {/* <h2>this is Navbar Component</h2> */}
      <Link to="images" className="btn btn-primary btn-sm">
        images
      </Link>{" "}
      <Link to="usestate" className="btn btn-success btn-sm">
        usestate
      </Link>{" "}
      <Link to="useeffect" className="btn btn-success btn-sm">
        useeffect
      </Link>{" "}
      <Link to="images" className="btn btn-success btn-sm">
        images
      </Link>{" "}
      <Link to="virtualdom" className="btn btn-success btn-sm">
        virtualdom
      </Link>{" "}
      <Link to="formval" className="btn btn-success btn-sm">
        form validation
      </Link>{" "}
      <Link to="productdetails" className="btn btn-success btn-sm">
        Product detail
      </Link>{" "}
    </div>
  );
};

export default NavComp;
