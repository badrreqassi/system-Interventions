import React, { useState } from "react";
import $ from "jquery";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData } from "../../../redux/actions/actionLogin";
import { Add } from "../../../redux/actions/actionOperation";
import FormInputs from "../../SingleComponents/PartForms/inputs/FormInputs";
import NormalSelect from "../../SingleComponents/PartForms/Select/NormalSelect";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";

function AjouterMachine() {
  const { register, handleSubmit, getValues } = useForm();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const data = useSelector((state) => state.dataOperations.data);

  const body = useSelector((state) => state.employees.data);

  const [inputs, setInputs] = useState({});
  const [normalSelect, setNormalSelect] = useState([]);

  const handleAjouter = () => {
    dispatch(Add(data.title, { body: body, FK: {} }));
    nav("/message/success");

    console.log(body);
  };
  const onsubmit = (data) => {
    $.extend(inputs, normalSelect);
    var results = inputs;

    dispatch(getData({ user: results }));
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
      <NavOp table={"Machine"} />
      <div style={{ marginLeft: "20%", marginRight: "20%", marginTop: "20px" }}>
        <form onChange={handleSubmit(onsubmit)}>
          <br />

          <NormalSelect
            data={data.content.select}
            handledata={handleNormalSelect}
          />
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
            Cancle
          </button>
        </form>
      </div>
    </div>
  );
}

export default AjouterMachine;
