import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Err_Msg, { Error_NON_DATA_FOUND } from "../../../message/Err_Msg";

function FormsComplain() {
  const complain = useSelector((state) => state.complaints.complain_R);

  return (
    <div id="bodyAccount">
      <div
        id="cadrAccount"
        className="border border-2 rounded-3 mx-auto"
        style={{ height: "900px" }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default FormsComplain;
/*
 complain ? (
    <div id="bodyOperation">
      <Outlet />
    </div>
  ) : (
    <div id="bodyOperation">
      <Err_Msg type={Error_NON_DATA_FOUND} text={"No Data Found ..."} />{" "}
    </div>
  );
 
 */
