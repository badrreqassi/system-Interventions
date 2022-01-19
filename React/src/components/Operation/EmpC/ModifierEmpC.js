import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";
import { getData, getDataFK } from "../../../redux/actions/actionLogin";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Add, Update } from "../../../redux/actions/actionOperation";
import { content } from "../Content/ContentEmpC";
import { get_One_Emp_C } from "../../../redux/actions/actionEmpC";
import SelectCompany from "../../SingleComponents/PartForms/Select/SelectCompany";
import NormalSelect from "../../SingleComponents/PartForms/Select/NormalSelect";
import FormInputs from "../../SingleComponents/PartForms/inputs/FormInputs";

function ModifierEmpC() {
  const dispatch = useDispatch();
  const params = useParams();
  const nav = useNavigate();
  const data = useSelector((state) => state.dataOperations.data);
  const data_company = useSelector((state) => state.company.company);

  const [numCompany, setNumCompany] = useState([]);

  const oneEmp_C = useSelector((state) => state.Operation_EmpC.oneEmp_C);
  const loading = useSelector((state) => state.Operation_EmpC.loading);
  const FK = useSelector((state) => state.employees.dataFK);
  const body = useSelector((state) => state.employees.data);

  const [inputs, setInputs] = useState({});
  const [normalSelect, setNormalSelect] = useState([]);

  console.log(data_company);

  useEffect(() => {
    if (loading == false) {
      dispatch(get_One_Emp_C(params.idEmployeeCompany));
    }

    $.extend(inputs, normalSelect);
    dispatch(getData({ user: inputs }));
    dispatch(getDataFK({ numCompany: numCompany }));
  }, [inputs, normalSelect]);

  const handleAjouter = () => {
    dispatch(
      Update("EmployeeCompany", {
        id: params.idEmployeeCompany,
        body: body,
        FK: FK,
      })
    );
    dispatch(get_One_Emp_C());
    nav("/message/success");
    console.log(FK);
    console.log(body);
  };
  const GiveTheRightJeson = (data) => {
    console.log(data);
    var sexe = data.sexe;

    return { sexe };
  };
  const handleCompany = (data) => {
    setNumCompany(data);
    console.log(data);
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
      <NavOp table={data.title} />
      {loading ? (
        <div
          style={{ marginLeft: "20%", marginRight: "20%", marginTop: "20px" }}
        >
          <label>
            <strong>Company</strong>
          </label>
          <br />
          <SelectCompany
            data={data_company}
            handledata={handleCompany}
            name={"numCompany"}
            putOn={oneEmp_C.company}
          />

          <br />

          <NormalSelect
            putOn={GiveTheRightJeson(oneEmp_C.empC)}
            data={data.content.select}
            handledata={handleNormalSelect}
          />

          {/*    Inputs     */}
          <FormInputs
            putOn={oneEmp_C.empC}
            data={data.content.inputs}
            handledata={handleInput}
          />

          <br />
          {/* End  Inputs     */}

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
        <div> data not found</div>
      )}
    </div>
  );
}

export default ModifierEmpC;
