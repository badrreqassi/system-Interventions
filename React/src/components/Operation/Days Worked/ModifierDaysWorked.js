import React, { useEffect, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, getDataFK } from "../../../redux/actions/actionLogin";
import { Add, Update } from "../../../redux/actions/actionOperation";
import FormInputs from "../../SingleComponents/PartForms/inputs/FormInputs";
import SelectEmpC from "../../SingleComponents/PartForms/Select/SelectEmpC";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";
import { useParams } from "react-router-dom";
import { get_One_Days_Worked } from "../../../redux/actions/actionDaysWorked";

function ModifierDaysWorked() {
  const params = useParams();
  const employees = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const data = useSelector((state) => state.dataOperations.data);
  const dataIn = useSelector((state) => state.dataOperations.dataIn);

  const oneDays = useSelector((state) => state.days_worked.oneDays);

  const data_empC = useSelector((state) => state.Operation_EmpC.All_empC);

  const FK = useSelector((state) => state.employees.dataFK);
  const body = useSelector((state) => state.employees.data);

  const [empC, setEmpC_id] = useState([]);
  const [inputs, setInputs] = useState({});

  useLayoutEffect(() => {
    dispatch(get_One_Days_Worked());
  }, []);

  useEffect(() => {
    dispatch(get_One_Days_Worked(params.idDays));
    dispatch(getDataFK({ empC }));
    dispatch(getData({ user: inputs }));
  }, [inputs, empC]);

  const handleAjouter = () => {
    dispatch(
      Update(
        data.title,
        {
          id: params.idDays,
          body: body,
          FK: FK,
        },
        employees.emp
      )
    );
    nav("/message/success");

    console.log(FK);
    console.log(body);
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

      {dataIn ? (
        <div
          style={{ marginLeft: "20%", marginRight: "20%", marginTop: "20px" }}
        >
          <label>
            {" "}
            <strong> Technicaine </strong>{" "}
          </label>
          <br />
          <SelectEmpC
            putOn={oneDays}
            data={data_empC}
            name={"emp"}
            handledata={handleEmpC}
          />
          <br />
          <FormInputs
            putOn={oneDays}
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

export default ModifierDaysWorked;
