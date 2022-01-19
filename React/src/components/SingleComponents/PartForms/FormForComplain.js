import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, getDataFK } from "../../../redux/actions/actionLogin";
import { Add } from "../../../redux/actions/actionOperation";
import $ from "jquery";
import { content } from "../../Operation/Content/ContentComplain";
import NormalSelect from "./Select/NormalSelect";
import SelectEmpC from "./Select/SelectEmpC";
import SelectEmpS from "./Select/SelectEmpS";
import SelectMachine from "./Select/SelectMachine";
import FormInputs from "./inputs/FormInputs";

function FormForComplain() {
  const { register, handleSubmit, getValues } = useForm();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const data = useSelector((state) => state.dataOperations.data);
  const employees = useSelector((state) => state.employees.employees);
  const machine = useSelector((state) => state.machine.machines);
  const data_empS = useSelector((state) => state.empS.all_empS);
  const data_empC = useSelector((state) => state.Operation_EmpC.technicaine);

  const FK = useSelector((state) => state.employees.dataFK);
  const body = useSelector((state) => state.employees.data);

  const [machine_id, setMachine_id] = useState([]);
  const [empC, setEmpC_id] = useState([]);
  const [empS, setEmpS_id] = useState({});
  const [inputs, setInputs] = useState({});
  const [normalSelect, setNormalSelect] = useState([]);

  const handleAjouter = () => {
    dispatch(Add("Complaints", { body: body, FK: FK }));
    nav("/");

    console.log(FK);
    console.log(body);
  };

  const onsubmit = (data) => {
    var F = { empC, empS, machine_id, assistant: employees.emp };
    $.extend(inputs, normalSelect);
    var results = inputs;
    dispatch(getDataFK(F));
    dispatch(getData({ user: results }));
  };
  const handleMachine = (data) => {
    setMachine_id(data);
  };
  const handleEmpC = (data) => {
    console.log(data);
    setEmpC_id(data);
  };

  const handleEmpS = (data) => {
    setEmpS_id(data);
  };

  const handleInput = (data) => {
    setInputs(data);
  };

  const handleNormalSelect = (data) => {
    setNormalSelect(data);
  };
  const handleCancle = () => {
    nav(-1);
  };
  return (
    <div
      id="cadrAccount"
      className="border border-2 rounded-3 mx-auto text-center"
      style={{ height: "800px" }}
    >
      <div className="text-center">
        <div
          style={{ marginLeft: "20%", marginRight: "20%", marginTop: "20px" }}
        >
          <form onChange={handleSubmit(onsubmit)}>
            <label>
              <strong> Employee </strong>{" "}
            </label>
            <br />
            <SelectEmpS
              data={data_empS}
              name={"empS"}
              handledata={handleEmpS}
            />
            <br />
            <label>
              {" "}
              <strong> Technicaine </strong>{" "}
            </label>
            <br />
            <SelectEmpC data={data_empC} name={"emp"} handledata={handleEmpC} />
            <br />
            <label>
              {" "}
              <strong> Machine</strong>{" "}
            </label>
            <br />
            <SelectMachine
              data={machine}
              name={"machine_id"}
              handledata={handleMachine}
            />
            <br />
            <NormalSelect
              data={content.select}
              handledata={handleNormalSelect}
            />
            <FormInputs data={content.inputs} handledata={handleInput} />

            <br />
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginLeft: "10%", width: "20%" }}
              onClick={handleAjouter}
            >
              Ajouter
            </button>
            <button
              type="button"
              className="btn btn-danger"
              style={{ marginLeft: "10%", width: "20%" }}
              onClick={handleCancle}
            >
              Cancle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormForComplain;
/*
  <select name='machine' >
              {machine.map((M )=>{
                   return <option key={M.machine_id}
                   defaultValue={M.machine_id}
                   {...register("machine", {
                    required: false
                        })}
                   >
                       {M.machineName}
                   </option>
              })}
                     
          </select>
          
           <select name='empC' >
              {empC.map((M,key)=>{
                   return <option  key={key}
                   value={M.emp}
                   {...register("empC")}
                   >
                       {M.lastName +" "+M.firstName}
                   </option>
              })}

          </select>

           <select name='empS' >
              {empS.map((M,key)=>{
                   return <option  key={key}
                   value={M.emp}
                   {...register("empS")}
                   >
                       {M.lastName +" "+M.firstName}
                   </option>
              })}

          </select>

          ___________________

          <div
        id="cadrAccount"
        className="border border-2 rounded-3 mx-auto text-center"
        style={{ height: "800px" }}
      >
        <div style={{ marginLeft: "20%", marginRight: "20%" }}>
          <form onChange={handleSubmit(onsubmit)}>
            <br />
            <label>
              <strong>Employee </strong>
            </label>
            <br />

            <SelectEmpS
              data={data_empS}
              name={"empS"}
              handledata={handleEmpS}
            />

            <br />
            <label>
              <strong> Technicaine </strong>
            </label>
            <br />
            <SelectEmpC
              data={data_empC}
              name={"empC"}
              handledata={handleEmpC}
            />
            <br />
            <label>
              <strong>Machine</strong>
            </label>
            <br />
            <SelectMachine
              data={machine}
              name={"machine_id"}
              handledata={handleMachine}
            />
            <br />

            {content.inputs.map((input, key) => {
              return (
                <div key={key}>
                  <label>
                    <strong>{input.label}</strong>
                  </label>
                  <br />
                  <input
                    className="form-control"
                    type={input.type}
                    name={input.name}
                    {...register(input.name)}
                  />
                </div>
              );
            })}
           <NormalSelect
            data={data.content.select}
            handledata={handleNormalSelect}
          />
            <br />

            <button
              type="button"
              className="btn btn-primary"
              style={{ marginLeft: "10%", width: "20%" }}
              onClick={handleAjouter}
            >
              Ajouter
            </button>
            <button
              type="button"
              className="btn btn-danger"
              style={{ marginLeft: "10%", width: "20%" }}
              onClick={handleCancle}
            >
              Cancle
            </button>
          </form>
        </div>
      </div>

*/
