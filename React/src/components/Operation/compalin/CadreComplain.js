import React from "react";
import BtnAccess from "../CadrOperation/BtnAccess";
import CadrOP from "../CadrOperation/CadrOP";

function CadreComplain({ op, hidden }) {
  return (
    <div
      id="operation"
      className="col rounded-sm border border-secondary"
      hidden={hidden}
    >
      <CadrOP op={" Plaintes "} />
      <BtnAccess op={op} />
    </div>
  );
}

export default CadreComplain;
