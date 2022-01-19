import React from "react";
import BtnAccess from "../CadrOperation/BtnAccess";
import CadrOP from "../CadrOperation/CadrOP";

function CadreCompany({ op, hidden }) {
  return (
    <div
      id="operation"
      className="col rounded-sm border border-secondary"
      hidden={hidden}
    >
      <CadrOP op={"Compagnie"} />
      <BtnAccess op={op} />
    </div>
  );
}

export default CadreCompany;
