import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useNavigate } from "react-router-dom";
import { get_All_Company } from "../redux/actions/actionCompany";
import { get_Complaits_By_Emp_Company_R } from "../redux/actions/actionComplain";
import { get_All_Days_Worked_R } from "../redux/actions/actionDaysWorked";
import { get_All_Machines } from "../redux/actions/actionMachine";

import { get_All_Piece_R } from "../redux/actions/actionPiece";
import { gat_All_Treatment_R } from "../redux/actions/actionsTreatments";
import { content } from "../components/Operation/Content/ContentCompany";
import { content as contentL } from "../components/Operation/Content/ContentComplain";
import { content as contentD } from "../components/Operation/Content/ContentDays";
import { content as contentM } from "../components/Operation/Content/ContentMachine";
import { content as contentP } from "../components/Operation/Content/ContentPiece";
import { content as contentT } from "../components/Operation/Content/ContentTreatment";
import { dataIn, get_data } from "../redux/actions/actionOperation";
import { get_All_Emp_C } from "../redux/actions/actionEmpC";
import { get_All_Emp_S } from "../redux/actions/actionEmpS";

function Message() {
  const params = useParams();
  const nav = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.dataOperations.data);
  const In = useSelector((state) => state.dataOperations.dataIn);

  const employees = useSelector((state) => state.employees.employees);
  const company = useSelector((state) => state.company.company);
  const complain = useSelector((state) => state.complaints.complain_R);
  const days = useSelector((state) => state.days_worked.days);
  const machines = useSelector((state) => state.machine.machines);
  const pieces = useSelector((state) => state.piece.pieces);
  const treatment = useSelector((state) => state.treatments.treatments_R);
  const data_empC = useSelector((state) => state.Operation_EmpC.All_empC);
  const data_empS = useSelector((state) => state.empS.all_empS);

  useLayoutEffect(() => {
    dispatch(get_All_Company());
    dispatch(get_Complaits_By_Emp_Company_R(employees.cin));
    dispatch(gat_All_Treatment_R(employees.cin));
    dispatch(get_All_Days_Worked_R(employees.cin));
    dispatch(get_All_Machines());
    dispatch(get_All_Piece_R());
    dispatch(get_All_Emp_C());
    dispatch(get_All_Emp_S());
    dispatch(dataIn(false));
  }, []);
  useEffect(() => {
    switch (data.title) {
      case "Company": {
        dispatch(
          get_data({
            data: company,
            title: "Company",
            idTable: "numCompany",
            content: content,
          })
        );

        break;
      }
      case "Complaints": {
        dispatch(
          get_data({
            data: complain,
            title: "Complaints",
            idTable: "complain_id",
            content: contentL,
          })
        );

        break;
      }
      case "Treatments": {
        dispatch(
          get_data({
            data: treatment,
            title: "Treatments",
            idTable: "treatment_id",
            content: contentT,
          })
        );

        break;
      }
      case "DaysWorked": {
        dispatch(
          get_data({
            data: days,
            title: "DaysWorked",
            idTable: "d_work_id",
            content: contentD,
          })
        );

        break;
      }
      case "Machine": {
        dispatch(
          get_data({
            data: machines,
            title: "Machine",
            idTable: "machine_id",
            content: contentM,
          })
        );

        break;
      }
      case "Piece": {
        dispatch(
          get_data({
            data: pieces,
            title: "Piece",
            idTable: "piece_id",
            content: contentP,
          })
        );

        break;
      }
      case "EmployeeCompany": {
        dispatch(
          get_data({
            data: data_empC,
            title: "EmployeeCompany",
            idTable: "emp",
            content: content,
          })
        );

        break;
      }
      case "EmployeeState": {
        dispatch(
          get_data({
            data: data_empS,
            title: "EmployeeState",
            idTable: "emp",
            content: content,
          })
        );

        break;
      }
    }
  }, []);

  switch (params.status) {
    case "success":
      return In ? (
        <div className="alert alert-success">
          {setTimeout(() => {
            nav("/break");
          }, 1)}
          <strong>Success!</strong> This alert box could indicate a successful
          or positive action.
        </div>
      ) : (
        <div className="alert alert-danger">
          <strong>Danger!</strong> This alert box could indicate a dangerous or
          potentially negative action.
        </div>
      );
  }
}

export default Message;
