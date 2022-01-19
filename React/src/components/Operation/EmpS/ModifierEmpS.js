import React, { useEffect, useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { get_One_Emp_S } from "../../../redux/actions/actionEmpS";
import { getData } from "../../../redux/actions/actionLogin";
import { Add, Update } from "../../../redux/actions/actionOperation";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";
import { content } from "../Content/ContentEmpC";

function ModifierEmpS() {
  const { register, handleSubmit, getValues, setValue } = useForm();
  const dispatch = useDispatch();
  const params = useParams();
  const nav = useNavigate();
  const data = useSelector((state) => state.dataOperations.data);
  const dataIn = useSelector((state) => state.dataOperations.dataIn);
  const body = useSelector((state) => state.employees.data);

  const one_empS = useSelector((state) => state.empS.One_EmpS);

  useLayoutEffect(() => {
    dispatch(get_One_Emp_S());
  }, []);
  useEffect(() => {
    if (dataIn) {
      Object.keys(one_empS).map((key, i) => {
        setValue(key, one_empS[key]);
      });

      console.log(one_empS);
    } else {
      dispatch(get_One_Emp_S(params.idEmployeeState));
    }
  }, [one_empS]);
  const handleAjouter = () => {
    dispatch(
      Update("EmployeeState", {
        id: params.idEmployeeState,
        body: body,
        FK: {},
      })
    );
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
                  {...register(input.name)}
                />
              </div>
            );
          })}
          <br />
          {/* End  Inputs     */}

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
        </form>
      </div>
    </div>
  );
}

export default ModifierEmpS;
