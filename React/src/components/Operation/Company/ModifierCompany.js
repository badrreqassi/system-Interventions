import React, { useEffect, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData } from "../../../redux/actions/actionLogin";
import { Add, Update } from "../../../redux/actions/actionOperation";
import FormInputs from "../../SingleComponents/PartForms/inputs/FormInputs";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";
import { useParams } from "react-router-dom";
import { get_One_Company } from "../../../redux/actions/actionCompany";

function ModifierCompany() {
  const params = useParams();
  const { register, handleSubmit, getValues } = useForm();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const data = useSelector((state) => state.dataOperations.data);
  const dataIn = useSelector((state) => state.dataOperations.dataIn);

  const oneCompany = useSelector((state) => state.company.oneCompany);

  const body = useSelector((state) => state.employees.data);

  const [inputs, setInputs] = useState({});

  useLayoutEffect(() => {
    dispatch(get_One_Company());
  }, []);

  useEffect(() => {
    dispatch(get_One_Company(params.idCompany));
    dispatch(getData({ user: inputs }));
  }, [inputs]);

  const handleAjouter = () => {
    dispatch(Update(data.title, { id: params.idCompany, body: body, FK: {} }));
    nav("/message/success");
    console.log(body);
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

      {dataIn ? (
        <div
          style={{ marginLeft: "20%", marginRight: "20%", marginTop: "20px" }}
        >
          <FormInputs
            putOn={oneCompany}
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
            Annuler
          </button>
        </div>
      ) : (
        <div> Your data Not Found </div>
      )}
    </div>
  );
}

export default ModifierCompany;
