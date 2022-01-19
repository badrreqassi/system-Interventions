import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Chart from "./Chart";

function Diagramme() {
  const [data, setdata] = useState([]);
  const typeuser = useSelector((state) => state.employees.typeuser);
  const days = useSelector((state) => state.days_worked.dataChart);
  const nav = useNavigate();
  console.log(days);

  useEffect(() => {
    typeuser ? nav("/Diagramme") : nav("/DiagrammeAdmin");
  }, []);

  return (
    <div id="bodyAccount">
      <div
        id="cadrAccount"
        className="border border-2 rounded-3 mx-auto"
        style={{ height: "700px" }}
      >
        <div
          style={{
            color: "#214069",
            marginBottom: "40px",
            marginLeft: "550px",
          }}
        >
          {" "}
          <h1>______________________</h1>
          <h2> Le Diagramme d'activité </h2>
        </div>

        <div id="titlechart">
          <div id="cadrtDiv">
            <div className="div1"></div>
            <strong>
              l'activité de l'employé au cours de la dernière semaine
            </strong>
          </div>
          <br />
          <div id="cadrtDiv">
            <div className="div2"></div>
            <strong>
              la meilleure activité pour un employé au cours de la dernière
              semaine
            </strong>
          </div>
        </div>
        <Chart data={days} />
      </div>
    </div>
  );
}

export default Diagramme;
/*
  <span className='text-center'> <div className="div1" ></div></span><strong> Cette couleur représente l'activité de l'employé au cours de la dernière semaine </strong>   
        <span className='text-center'>  <div className="div2"></div></span><strong> Cette couleur représente la meilleure activité pour un employé au cours de la dernière semaine </strong>
*/
