import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, getDataFK } from "../../../redux/actions/actionLogin";
import { Add } from "../../../redux/actions/actionOperation";
import FormInputs from "../../SingleComponents/PartForms/inputs/FormInputs";
import SelectMachine from "../../SingleComponents/PartForms/Select/SelectMachine";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";

function AjouterPiece() {
  const { register, handleSubmit, getValues } = useForm();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const data = useSelector((state) => state.dataOperations.data);

  const machine = useSelector((state) => state.machine.machines);

  const FK = useSelector((state) => state.employees.dataFK);
  const body = useSelector((state) => state.employees.data);

  const [machine_id, setMachine_id] = useState([]);
  const [inputs, setInputs] = useState({});

  const handleAjouter = () => {
    dispatch(Add(data.title, { body: body, FK: FK }));
    nav("/message/success");

    console.log(FK);
    console.log(body);
  };
  const onsubmit = (data) => {
    var results = inputs;
    dispatch(getDataFK({ machine_id }));
    dispatch(getData({ user: results }));
  };
  const handleMachine = (data) => {
    setMachine_id(data);
  };
  const handleInput = (data) => {
    setInputs(data);
  };
  const handleCancle = () => {
    nav(-1);
  };
  return (
    <div className="text-center">
      <NavOp table={"Piece"} />
      <div style={{ marginLeft: "20%", marginRight: "20%", marginTop: "20px" }}>
        <form onChange={handleSubmit(onsubmit)}>
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

export default AjouterPiece;
