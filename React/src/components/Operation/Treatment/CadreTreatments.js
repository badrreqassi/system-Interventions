import React from "react";
import BtnAccess from "../CadrOperation/BtnAccess";
import CadrOP from "../CadrOperation/CadrOP";

function CadreTreatments({ op, hidden }) {
  return (
    <div
      id="operation"
      className="col rounded-sm border border-secondary "
      hidden={hidden}
    >
      <CadrOP op={" Traitements "} />
      <BtnAccess op={op} />
    </div>
  );
}

export default CadreTreatments;
