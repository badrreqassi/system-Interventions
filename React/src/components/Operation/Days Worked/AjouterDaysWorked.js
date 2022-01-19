import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, getDataFK } from "../../../redux/actions/actionLogin";
import { Add } from "../../../redux/actions/actionOperation";
import FormInputs from "../../SingleComponents/PartForms/inputs/FormInputs";
import SelectEmpC from "../../SingleComponents/PartForms/Select/SelectEmpC";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";

function AjouterDaysWorked() {
  const { register, handleSubmit, getValues } = useForm();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const data = useSelector((state) => state.dataOperations.data);
  const data_empC = useSelector((state) => state.Operation_EmpC.All_empC);

  const FK = useSelector((state) => state.employees.dataFK);
  const body = useSelector((state) => state.employees.data);

  const [empC, setEmpC_id] = useState([]);
  const [inputs, setInputs] = useState({});

  const handleAjouter = () => {
    dispatch(Add("DaysWorked", { body: body, FK: FK }));
    nav("/message/success");

    console.log(FK);
    console.log(body);
  };

  const onsubmit = (data) => {
    var results = inputs;
    dispatch(getDataFK({ empC }));
    dispatch(getData({ user: results }));
  };
  const handleEmpC = (data) => {
    setEmpC_id(data);
  };
  const handleInput = (data) => {
    setInputs(data);
  };
  const handleCancle = () => {
    nav(-1);
  };

  return (
    <div className="text-center">
      <NavOp table={"DaysWorked"} />

      <div style={{ marginLeft: "20%", marginRight: "20%", marginTop: "20px" }}>
        <form onChange={handleSubmit(onsubmit)}>
          <label>
            {" "}
            <strong> Technicaine </strong>{" "}
          </label>
          <br />
          <SelectEmpC data={data_empC} name={"empC"} handledata={handleEmpC} />
          <br />
          <FormInputs data={data.content.inputs} handledata={handleInput} />
        </form>
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
      </div>
    </div>
  );
}

export default AjouterDaysWorked;
