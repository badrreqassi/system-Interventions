import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Chart from "../Charts/Chart";

import FromsParts from "../SingleComponents/PartForms/FromsParts";
import { content } from "./content";

function FormsAccount() {
  const user = useSelector((state) => state.employees.employees);
  const typeuser = useSelector((state) => state.employees.typeuser);

  const days = useSelector((state) => state.days_worked.dataChart);

  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    if (typeuser && user.job == "technicaine") {
      setHidden(false);
    }
  }, []);

  return (
    <div id="cadreprofile">
      <FromsParts
        data={content.inputs}
        puts={true}
        putsDataFrom={user}
        place={[4, 8]}
      />

      <div id="btmAccount" className="card" hidden={hidden}>
        <div className="card-body">
          <h4 className="card-title"> Le Diagramme d'activité</h4>

          <Chart data={days} />
          <div id="cadrtDiv">
            <div id="div1"></div>
            <strong>
              l'activité de l'employé au cours de la dernière semaine
            </strong>
          </div>
          <br />
          <div id="cadrtDiv">
            <div id="div2"></div>
            <strong>
              la meilleure activité pour un employé au cours de la dernière
              semaine
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormsAccount;

/*
<div class="card">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some example text. Some example text.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
*/
