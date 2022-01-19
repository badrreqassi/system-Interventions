import React, { useState } from "react";
import $ from "jquery";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectEmpS from "../../SingleComponents/PartForms/Select/SelectEmpS";
import SelectEmpC from "../../SingleComponents/PartForms/Select/SelectEmpC";
import SelectMachine from "../../SingleComponents/PartForms/Select/SelectMachine";
import { getData, getDataFK } from "../../../redux/actions/actionLogin";
import { Add } from "../../../redux/actions/actionOperation";
import FormInputs from "../../SingleComponents/PartForms/inputs/FormInputs";
import NormalSelect from "../../SingleComponents/PartForms/Select/NormalSelect";
import { content } from "../Content/ContentComplain";

function AjouterComplaints() {
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
    dispatch(Add("Complaints", { body: body, FK: FK }, employees.cin));
    nav("/message/success");

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
    <div className="text-center">
      <NavOp table={"Complaints"} />

      <div style={{ marginLeft: "20%", marginRight: "20%", marginTop: "20px" }}>
        <form onChange={handleSubmit(onsubmit)}>
          <label>
            <strong> Employee </strong>{" "}
          </label>
          <br />
          <SelectEmpS data={data_empS} name={"empS"} handledata={handleEmpS} />
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
          <NormalSelect data={content.select} handledata={handleNormalSelect} />
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
            Annuler
          </button>
        </form>
      </div>
    </div>
  );
}

export default AjouterComplaints;
