import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Err_Msg, { Error_NON_DATA_FOUND } from "../../../message/Err_Msg";

function FormsDaysWorked() {
  const days = useSelector((state) => state.days_worked.days);
  return (
    <div id="bodyAccount">
      <div
        id="cadrAccount"
        className="border border-2 rounded-3 mx-auto"
        style={{ height: "800px" }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default FormsDaysWorked;
