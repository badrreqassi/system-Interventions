import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData } from "../../../redux/actions/actionLogin";
import { Add } from "../../../redux/actions/actionOperation";
import FormInputs from "../../SingleComponents/PartForms/inputs/FormInputs";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";
import ReactJsAlert from "reactjs-alert";

function AjouterCompany() {
  const { register, handleSubmit, getValues } = useForm();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const data = useSelector((state) => state.dataOperations.data);
  const dataIn = useSelector((state) => state.dataOperations.dataIn);
  const body = useSelector((state) => state.employees.data);

  const [inputs, setInputs] = useState({});
  const [showMessage, setshowMessage] = useState(true);

  console.log(dataIn);
  useEffect(() => {
    if (showMessage == false) {
      nav("/message/success");
    }
  }, [dataIn, showMessage]);

  const handleAjouter = () => {
    dispatch(Add(data.title, { body: body, FK: {} }));

    console.log(body);
  };
  const onsubmit = (data) => {
    var results = inputs;
    dispatch(getData({ user: results }));
  };
  const handleInput = (data) => {
    setInputs(data);
  };
  const handleCancle = () => {
    nav(-1);
  };
  return (
    <div className="text-center">
      <NavOp table={"Company"} />
      <div style={{ marginLeft: "20%", marginRight: "20%", marginTop: "20px" }}>
        {dataIn ? (
          <ReactJsAlert
            type={"success"}
            status={showMessage}
            title={"ajouter"}
            Close={() => {
              setshowMessage(false);
            }}
          />
        ) : (
          <form onChange={handleSubmit(onsubmit)}>
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
        )}
      </div>
    </div>
  );
}

export default AjouterCompany;
