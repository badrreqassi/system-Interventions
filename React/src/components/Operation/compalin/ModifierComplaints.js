import React, { useEffect, useLayoutEffect, useState } from "react";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";
import { getData, getDataFK } from "../../../redux/actions/actionLogin";
import SelectMachine from "../../SingleComponents/PartForms/Select/SelectMachine";
import SelectEmpC from "../../SingleComponents/PartForms/Select/SelectEmpC";
import SelectEmpS from "../../SingleComponents/PartForms/Select/SelectEmpS";
import FormInputs from "../../SingleComponents/PartForms/inputs/FormInputs";
import NormalSelect from "../../SingleComponents/PartForms/Select/NormalSelect";
import { useForm } from "react-hook-form";
import {
  GET_ONE_COMPLAIN,
  get_One_Complain,
} from "../../../redux/actions/actionComplain";
import { Update } from "../../../redux/actions/actionOperation";
import { dataIn } from "../../../redux/actions/actionOperation";
import { messageService } from "../../../api/Observable";

function ModifierComplaints() {
  const params = useParams();
  const employees = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const data = useSelector((state) => state.dataOperations.data);
  //const dataIn = useSelector((state) => state.dataOperations.dataIn);

  const oneComplain = useSelector((state) => state.complaints.oneComplain);
  const loading = useSelector((state) => state.complaints.loading);

  const FK = useSelector((state) => state.employees.dataFK);
  const body = useSelector((state) => state.employees.data);

  const machine = useSelector((state) => state.machine.machines);
  const data_empS = useSelector((state) => state.empS.all_empS);
  const data_empC = useSelector((state) => state.Operation_EmpC.technicaine);

  const [machine_id, setMachine_id] = useState([]);
  const [empC, setEmpC_id] = useState([]);
  const [empS, setEmpS_id] = useState({});

  const [inputs, setInputs] = useState({});
  const [normalSelect, setNormalSelect] = useState([]);

  useEffect(() => {
    if (loading == false) {
      dispatch(get_One_Complain(params.idComplaints));
    }

    var F = { empC, empS, machine_id };
    dispatch(getDataFK(F));

    $.extend(inputs, normalSelect);
    dispatch(getData({ user: inputs }));
  }, [inputs, normalSelect]);

  const GiveTheRightJeson = (data) => {
    console.log(data);
    var status = data.status;
    var typeComplain = data.typeComplain;

    return { status, typeComplain };
  };
  console.log(oneComplain);
  const handleAjouter = () => {
    dispatch(
      Update(
        data.title,
        {
          id: params.idComplaints,
          body: body,
          FK: FK,
        },
        employees.cin
      )
    );
    dispatch(get_One_Complain());
    nav("/message/success");

    console.log(FK);
    console.log(body);
  };

  const handleMachine = (data) => {
    setMachine_id(data);
  };
  const handleEmpC = (data) => {
    setEmpC_id(data);
  };

  const handleEmpS = (data) => {
    setEmpS_id(data);
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
            <strong> Employee </strong>
          </label>
          <br />
          <SelectEmpS
            putOn={oneComplain}
            data={data_empS}
            name={"emp"}
            handledata={handleEmpS}
          />
          <br />
          <label>
            <strong> Technicaine </strong>
          </label>
          <br />
          <SelectEmpC
            putOn={oneComplain}
            data={data_empC}
            name={"emp"}
            handledata={handleEmpC}
          />
          <br />
          <label>
            <strong> Machine</strong>
          </label>
          <br />
          <SelectMachine
            putOn={oneComplain}
            data={machine}
            name={"machine_id"}
            handledata={handleMachine}
          />
          <br />

          <NormalSelect
            putOn={GiveTheRightJeson(oneComplain.complaints)}
            data={data.content.select}
            handledata={handleNormalSelect}
          />
          <FormInputs
            putOn={oneComplain.complaints}
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

export default ModifierComplaints;
