import React from "react";
import BtnAccess from "./BtnAccess";

function CadrOP({ op }) {
  return (
    <div>
      <h3 className=" text-center" style={{ color: "#62d2a2" }}>
        {op}
      </h3>
      <p>
        <small>
          Cette <strong style={{ color: "#214069" }}> Operation </strong> vous
          aider à contrôler toutes les
          <strong style={{ color: "#214069" }}> Informations </strong> sur{" "}
          <kbd className=" danger" style={{ backgroundColor: "#214069" }}>
            {op}
          </kbd>
        </small>
      </p>
      <p>
        - Pour démarrer cette action, vous devez d'abord{" "}
        <strong style={{ color: "#214069" }}> Vérifier </strong> si vous y avez{" "}
        <strong style={{ color: "#214069" }}> accès </strong>
      </p>
    </div>
  );
}

export default CadrOP;
