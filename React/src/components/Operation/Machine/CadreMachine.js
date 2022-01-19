import React from "react";
import BtnAccess from "../CadrOperation/BtnAccess";
import CadrOP from "../CadrOperation/CadrOP";

function CadreMachine({ op, hidden }) {
  return (
    <div
      id="operation"
      className="col rounded-sm border border-secondary"
      hidden={hidden}
    >
      <CadrOP op={op} />
      <BtnAccess op={op} />
    </div>
  );
}

export default CadreMachine;
