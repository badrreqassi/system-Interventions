import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function FormsEmpC() {
  const FK = useSelector((state) => state.employees.dataFK);
  const body = useSelector((state) => state.employees.data);
  return (
    <div id="bodyAccount">
      <div
        id="cadrAccount"
        className="border border-2 rounded-3 mx-auto"
        style={{ height: "1100px" }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default FormsEmpC;
