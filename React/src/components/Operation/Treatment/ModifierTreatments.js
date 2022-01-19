import React, { useEffect, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, getDataFK } from "../../../redux/actions/actionLogin";
import { Add, Update } from "../../../redux/actions/actionOperation";
import FormInputs from "../../SingleComponents/PartForms/inputs/FormInputs";
import SelectComplain from "../../SingleComponents/PartForms/Select/SelectComplain";
import SelectEmpC from "../../SingleComponents/PartForms/Select/SelectEmpC";
import { useParams } from "react-router-dom";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";
import { get_One_Treatment } from "../../../redux/actions/actionsTreatments";

function ModifierTreatments() {
  const params = useParams();
  const employees = useSelector((state) => state.employees.employees);

  const data = useSelector((state) => state.dataOperations.data);

  const oneTreatment = useSelector((state) => state.treatments.oneTreatment);
  const loading = useSelector((state) => state.treatments.loading);

  const data_empC = useSelector((state) => state.Operation_EmpC.technicaine);
  const data_complain = useSelector((state) => state.complaints.complete_C);
  console.log(data_complain);

  const FK = useSelector((state) => state.employees.dataFK);
  const body = useSelector((state) => state.employees.data);

  const [inputs, setInputs] = useState({});
  const [complain_id, setcomplain] = useState([]);

  const [empC, setEmpC_id] = useState([]);

  useEffect(() => {
    if (loading == false) {
      dispatch(get_One_Treatment(params.idTreatments));
    }

    dispatch(getDataFK({ empC, complain_id }));
    dispatch(getData({ user: inputs }));
  }, [inputs, empC]);

  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleAjouter = () => {
    dispatch(
      Update(
        data.title,
        { id: params.idTreatments, body: body, FK: FK },
        employees.emp
      )
    );
    nav("/message/success");

    console.log(FK);
    console.log(body);
  };

  const handleEmpC = (data) => {
    console.log(data);
    setEmpC_id(data);
  };

  const handleComplain = (data) => {
    setcomplain(data);
  };

  const handleInput = (data) => {
    setInputs(data);
  };
  const handleCancle = () => {
    nav(-1);
  };
  return (
    <div className="text-center">
      <NavOp table={"Treatments"} />

      {loading ? (
        <div
          style={{ marginLeft: "20%", marginRight: "20%", marginTop: "20px" }}
        >
          <label>
            <strong> Technicaine </strong>
          </label>
          <br />
          <SelectEmpC
            putOn={oneTreatment}
            data={data_empC}
            name={"emp"}
            handledata={handleEmpC}
            disabled={true}
          />
          <br />
          <label>
            <strong> Complaints </strong>
          </label>
          <br />
          <SelectComplain
            putOn={oneTreatment}
            data={data_complain}
            name={"complain_id"}
            handledata={handleComplain}
            disabled={true}
          />
          <br />
          <FormInputs
            putOn={oneTreatment.treatments}
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

export default ModifierTreatments;
