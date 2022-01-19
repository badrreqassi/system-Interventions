import React from "react";
import { Outlet } from "react-router-dom";

function FormsEmpS() {
  return (
    <div id="bodyAccount">
      <div
        id="cadrAccount"
        className="border border-2 rounded-3 mx-auto"
        style={{ height: "950px" }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default FormsEmpS;
