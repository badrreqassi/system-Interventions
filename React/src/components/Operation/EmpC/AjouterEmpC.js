import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, getDataFK } from "../../../redux/actions/actionLogin";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Add } from "../../../redux/actions/actionOperation";
import { content } from "../Content/ContentEmpC";

function AjouterEmpC() {
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    getValues: getValues1,
  } = useForm();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    getValues: getValues2,
  } = useForm();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const data = useSelector((state) => state.dataOperations.data);
  const data_company = useSelector((state) => state.company.company);
  const FK = useSelector((state) => state.employees.dataFK);
  const body = useSelector((state) => state.employees.data);

  const [idCompany, setIdCompany] = useState({});
  const [inputs, setInputs] = useState({});
  const [normalSelect, setNormalSelect] = useState([]);
  console.log(data_company);

  const handleAjouter = () => {
    dispatch(Add("EmployeeCompany", { body: body, FK: FK }));
    nav("/message/success");
    console.log(FK);
    console.log(body);
  };

  const onsubmit = (data) => {
    dispatch(getData({ user: getValues1() }));
  };

  const onCompany = (data) => {
    dispatch(getDataFK(data));
    console.log(data);
  };

  const handleCancle = () => {
    nav(-1);
  };

  return (
    <div className="text-center">
      <NavOp table={data.title} />
      <div style={{ marginLeft: "20%", marginRight: "20%", marginTop: "20px" }}>
        <form onClick={handleSubmit2(onCompany)}>
          {/*  Select Company  */}
          <label>
            <strong>Company</strong>
          </label>
          <br />
          <select
            className="form-select"
            name={"company"}
            {...register2("company")}
          >
            {data_company.map((M) => {
              return (
                <option key={M.numCompany} value={M.numCompany}>
                  {M.nameCompany}
                </option>
              );
            })}
          </select>
        </form>
        {/*  End   Select Company  */}
        <br />
        <form onChange={handleSubmit1(onsubmit)}>
          {/*  Select For sexe  */}
          {content.select.map((select, key) => {
            return (
              <div key={key}>
                <label>
                  <strong>{select.label}</strong>
                </label>
                <br />
                <select
                  className="form-select"
                  sname={select.name}
                  {...register1(select.name)}
                >
                  {select.ValueSelect.map((val, key) => {
                    return <option key={key}>{val.value}</option>;
                  })}
                </select>
              </div>
            );
          })}
          {/* End  Select For sexe   */}

          {/*    Inputs     */}
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
                  {...register1(input.name)}
                />
              </div>
            );
          })}
          <br />
          {/* End  Inputs     */}

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

export default AjouterEmpC;
/*
<br />
          <label>
            <strong>Company</strong>
          </label>
          <br />
          <select name={"idCompany"} {...register("idCompany")}>
            {data_company.map((M) => {
              return (
                <option key={M.numCompany} value={M.numCompany}>
                  {M.nameCompany}
                </option>
              );
            })}
          </select>
          <br />
          { content.select.map((select,key)=>{
              return  <div key={key}>
                <label>
                      <strong>
                          {select.label}
                      </strong>
                  </label>
                  <br/>
              <select name={select.name}   
               
              {...register(select.name)}
              >
                  { select.ValueSelect.map((val,key)=>{
                      return <option key={key}>
                          {val.value}
                      </option>
                  })}
                
              </select>
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
          <br />
*/
