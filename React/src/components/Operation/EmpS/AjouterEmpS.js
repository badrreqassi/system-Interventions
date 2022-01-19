import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData } from "../../../redux/actions/actionLogin";
import { Add } from "../../../redux/actions/actionOperation";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";

function AjouterEmpS() {
  const { register, handleSubmit, getValues } = useForm();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const data = useSelector((state) => state.dataOperations.data);
  const body = useSelector((state) => state.employees.data);

  const handleAjouter = () => {
    dispatch(Add("EmployeeState", { body: body, FK: {} }));
    nav("/message/success");

    console.log(body);
  };

  const onsubmit = (data) => {
    dispatch(getData({ user: getValues() }));
  };

  const handleCancle = () => {
    nav(-1);
  };

  return (
    <div className="text-center">
      <NavOp table={data.title} />
      <div style={{ marginLeft: "20%", marginRight: "20%", marginTop: "20px" }}>
        <form onChange={handleSubmit(onsubmit)}>
          {/*    Inputs     */}
          {data.content.inputs.map((input, key) => {
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
          <br />
          {/* End  Inputs     */}
          {/*  Select For sexe  */}
          {data.content.select.map((select, key) => {
            return (
              <div key={key}>
                <label>
                  <strong>{select.label}</strong>
                </label>
                <br />
                <select
                  className="form-select"
                  sname={select.name}
                  {...register(select.name)}
                >
                  {select.ValueSelect.map((val, key) => {
                    return <option key={key}>{val.value}</option>;
                  })}
                </select>
              </div>
            );
          })}
          {/* End  Select For sexe   */}
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

export default AjouterEmpS;
