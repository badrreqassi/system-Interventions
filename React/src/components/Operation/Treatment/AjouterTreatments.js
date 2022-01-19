import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, getDataFK } from "../../../redux/actions/actionLogin";
import { Add } from "../../../redux/actions/actionOperation";
import FormInputs from "../../SingleComponents/PartForms/inputs/FormInputs";
import SelectComplain from "../../SingleComponents/PartForms/Select/SelectComplain";
import SelectEmpC from "../../SingleComponents/PartForms/Select/SelectEmpC";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";

function AjouterTreatments() {
  const { register, handleSubmit, getValues } = useForm();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const employees = useSelector((state) => state.employees.employees);
  const data = useSelector((state) => state.dataOperations.data);
  const data_empC = useSelector((state) => state.Operation_EmpC.technicaine);
  const data_complain = useSelector((state) => state.complaints.notComplete_C);

  const FK = useSelector((state) => state.employees.dataFK);
  const body = useSelector((state) => state.employees.data);

  const [inputs, setInputs] = useState({});
  const [complain_id, setcomplain] = useState([]);

  const [empC, setEmpC_id] = useState([]);
  var selectTec = { employee_company: employees };
  console.log(selectTec);
  useEffect(() => {}, [empC]);

  const handleAjouter = () => {
    dispatch(Add(data.title, { body: body, FK: FK }));
    nav("/message/success");

    console.log(FK);
    console.log(body);
  };

  const onsubmit = (data) => {
    var results = inputs;
    dispatch(getDataFK({ empC, complain_id }));
    dispatch(getData({ user: results }));
  };

  const handleEmpC = (data) => {
    console.log(employees.emp);
    setEmpC_id(employees.emp);
  };

  const handleComplain = (data) => {
    setcomplain(data);
  };

  const handleInput = (data) => {
    setInputs(data);
  };
  const handleCancle = () => {
    nav(-1);
  };

  return (
    <div className="text-center">
      <NavOp table={"Treatments"} />
      <div style={{ marginLeft: "20%", marginRight: "20%", marginTop: "20px" }}>
        <form onChange={handleSubmit(onsubmit)}>
          <label>
            {" "}
            <strong> Technicaine </strong>{" "}
          </label>
          <br />
          <SelectEmpC
            data={data_empC}
            putOn={selectTec}
            name={"empC"}
            handledata={handleEmpC}
            disabled={true}
          />
          <br />
          <label>
            {" "}
            <strong> Complaints </strong>{" "}
          </label>
          <br />
          <SelectComplain
            data={data_complain}
            name={"complain_id"}
            handledata={handleComplain}
          />
          <br />
          <FormInputs data={data.content.inputs} handledata={handleInput} />

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

export default AjouterTreatments;
