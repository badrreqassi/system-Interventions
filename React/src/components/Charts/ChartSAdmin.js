import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import SelectEmpC from "../SingleComponents/PartForms/Select/SelectEmpC";
import Chart from "./Chart";

function ChartSAdmin() {
  const data_empC = useSelector((state) => state.Operation_EmpC.technicaine);
  const { register, handleSubmit, getValues, setValue } = useForm();

  const [empC, setEmpC_id] = useState([]);
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    getdata();
  }, [empC]);

  const getdata = () => {
    fetch(`http://localhost:8081/Day/Days/companyEmployee/${empC}`)
      .then((response) => response.json())
      .then((data) => {
        setDataChart(data);
      });
  };

  const handleEmpC = (data) => {
    console.log(data.cin);
    setEmpC_id(data.cin);
  };

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
          <br />
          <label>
            <strong>Employees Company :</strong>
          </label>
          <br />
          <select
            name={"cin"}
            onClick={handleSubmit(handleEmpC)}
            {...register("cin")}
            className="form-control "
          >
            {data_empC.map((M) => {
              return (
                <option key={M.emp} value={M.cin}>
                  {M.lastName + " " + M.firstName}
                </option>
              );
            })}
          </select>

          <br />
          <div id="chartAdmin">
            <Chart data={dataChart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartSAdmin;
