import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CadreComplain from "../components/Operation/compalin/CadreComplain";
import CadreCompany from "../components/Operation/Company/CadreCompany";
import CadreDays from "../components/Operation/Days Worked/CadreDays";
import CadreEmpC from "../components/Operation/EmpC/CadreEmpC";
import CadreEmpS from "../components/Operation/EmpS/CadreEmpS";
import CadreMachine from "../components/Operation/Machine/CadreMachine";
import CadrePiece from "../components/Operation/Piece/CadrePiece";
import CadreTreatments from "../components/Operation/Treatment/CadreTreatments";
import { get_All_Company } from "../redux/actions/actionCompany";
import {
  findComplainByAssistant,
  get_Complaits_By_Emp_Company,
  get_Complaits_By_Emp_Company_Complete,
  get_Complaits_By_Emp_Company_Not,
  get_Complaits_By_Emp_Company_R,
} from "../redux/actions/actionComplain";
import { get_All_Days_Worked_R } from "../redux/actions/actionDaysWorked";
import { getAllTechnicaine } from "../redux/actions/actionEmpC";
import { get_All_Emp_S } from "../redux/actions/actionEmpS";
import { get_All_Machines } from "../redux/actions/actionMachine";
import { Add, dataIn } from "../redux/actions/actionOperation";
import { get_All_Piece_R } from "../redux/actions/actionPiece";
import { gat_All_Treatment_R } from "../redux/actions/actionsTreatments";

function Operations() {
  const employees = useSelector((state) => state.employees.employees);
  const data_Access = useSelector((state) => state.accessTables.access);
  const [accessTreatments, setAccessTreatments] = useState(true);
  const [accessComplaints, setAccessComplaints] = useState(true);
  const [accessDaysWorked, setAccessDaysWorked] = useState(true);
  const [accessCompany, setAccessCompany] = useState(true);
  const [accessPiece, setAccessPiece] = useState(true);
  const [accessMachine, setAccessMachine] = useState(true);
  const [accessEmployeeCompany, setAccessEmployeeCompany] = useState(true);
  const [accessEmployeeState, setAccessEmployeeState] = useState(true);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    data_Access.map((data) => {
      switch (data.name_Table) {
        case "Treatments": {
          setAccessTreatments(false);
          break;
        }
        case "Complaints": {
          setAccessComplaints(false);
          break;
        }
        case "Company": {
          setAccessCompany(false);
          break;
        }
        case "DaysWorked": {
          setAccessDaysWorked(false);
          break;
        }
        case "Machine": {
          setAccessMachine(false);
          break;
        }
        case "Piece": {
          setAccessPiece(false);
          break;
        }
        case "EmployeeCompany": {
          setAccessEmployeeCompany(false);
          break;
        }
        case "EmployeeState": {
          setAccessEmployeeState(false);
          break;
        }
      }
    });
  }, [
    accessCompany,
    accessComplaints,
    accessDaysWorked,
    accessMachine,
    accessPiece,
    accessTreatments,
    accessEmployeeCompany,
    accessEmployeeState,
  ]);

  useEffect(() => {
    dispatch(get_All_Company());
    dispatch(get_Complaits_By_Emp_Company_R(employees.cin));
    dispatch(get_Complaits_By_Emp_Company_Not(employees.cin, true));
    dispatch(get_Complaits_By_Emp_Company_Complete(employees.cin));
    dispatch(gat_All_Treatment_R(employees.cin));
    dispatch(get_All_Days_Worked_R(employees.cin));
    dispatch(get_All_Machines());
    dispatch(get_All_Piece_R());
    dispatch(get_All_Emp_S());
    dispatch(findComplainByAssistant(employees.cin));
    dispatch(getAllTechnicaine());
    dispatch(Add("nothing"));
    dispatch(dataIn(false));
  }, []);

  return (
    <div id="bodyAccount">
      <div
        id="cadrAccount"
        className="border border-2 rounded-3 mx-auto"
        style={{ height: "900px" }}
      >
        <div id="cadrOperation" className="row text-center ">
          <div style={{ color: "#214069", marginBottom: "20px" }}>
            {" "}
            <h1>_______________________________________</h1>
            <h2> Tableaux que l'utilisateur peut utiliser </h2>
          </div>
          <br />

          <CadreTreatments op={"Treatments"} hidden={accessTreatments} />
          <CadreComplain op={"Complaints"} hidden={accessComplaints} />
          <div className="w-100" />
          {/* <CadreDays op={"DaysWorked"} hidden={accessDaysWorked} /> */}
          <CadreCompany op={"Company"} hidden={accessCompany} />
          <div className="w-100" />
          <CadrePiece op={"Piece"} hidden={accessPiece} />
          <CadreMachine op={"Machine"} hidden={accessMachine} />
          <div className="w-100" />
          <CadreEmpC op={"EmployeeCompany"} hidden={accessEmployeeCompany} />
          <CadreEmpS op={"EmployeeState"} hidden={accessEmployeeState} />
        </div>
      </div>
    </div>
  );
}

export default Operations;
