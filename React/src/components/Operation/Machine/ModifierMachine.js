import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";
import $ from "jquery";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData } from "../../../redux/actions/actionLogin";
import { Add, Update } from "../../../redux/actions/actionOperation";
import FormInputs from "../../SingleComponents/PartForms/inputs/FormInputs";
import NormalSelect from "../../SingleComponents/PartForms/Select/NormalSelect";
import { get_One_Machine } from "../../../redux/actions/actionMachine";

function ModifierMachine() {
  const params = useParams();

  const dispatch = useDispatch();
  const nav = useNavigate();
  const data = useSelector((state) => state.dataOperations.data);
  const dataIn = useSelector((state) => state.dataOperations.dataIn);

  const oneMachine = useSelector((state) => state.machine.oneMachine);

  const body = useSelector((state) => state.employees.data);

  const [inputs, setInputs] = useState({});
  const [normalSelect, setNormalSelect] = useState([]);

  useLayoutEffect(() => {
    dispatch(get_One_Machine());
  }, []);

  useEffect(() => {
    dispatch(get_One_Machine(params.idMachine));
    console.log(inputs);
    console.log(normalSelect);

    $.extend(inputs, normalSelect);

    console.log(inputs);
    dispatch(getData({ user: inputs }));
  }, [inputs, normalSelect]);

  console.log(oneMachine);

  const handleAjouter = () => {
    console.log(body);
    console.log(params.idMachine);
    dispatch(
      Update(data.title, { id: params.idMachine, body: body, FK: {} }, {})
    );
    nav("/message/success");
  };

  const GiveTheRightJeson = (data) => {
    var statue = data.statue;

    return { statue };
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

      {dataIn ? (
        <div
          style={{ marginLeft: "20%", marginRight: "20%", marginTop: "20px" }}
        >
          <br />
          <NormalSelect
            putOn={GiveTheRightJeson(oneMachine)}
            data={data.content.select}
            handledata={handleNormalSelect}
          />
          <br />
          <FormInputs
            putOn={oneMachine}
            data={data.content.inputs}
            handledata={handleInput}
          />
          <br />
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginLeft: "10%", width: "20%" }}
            onClick={handleAjouter}
          >
            Modifier
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
      ) : (
        <div> Your data Not Found </div>
      )}
    </div>
  );
}

export default ModifierMachine;
/**
   

     
 */
