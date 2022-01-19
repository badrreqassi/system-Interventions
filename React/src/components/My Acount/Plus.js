import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

function Plus() {
  return (
    <div className="dropdown" id="plus">
      <button
        type="button"
        className="btn  dropdown-toggle text-danger text-decoration-none"
        data-toggle="dropdown"
      >
        <BsPlusLg />
      </button>
      <div className="dropdown-menu">
        <Link to="/updateEmp" className="dropdown-item">
          {" "}
          Update Information{" "}
        </Link>
      </div>
    </div>
  );
}

export default Plus;
