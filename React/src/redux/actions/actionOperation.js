import ServiceCompany from "../../api/Service/ServiceCompany";
import ServecCompalin from "../../api/Service/ServecCompalin";
import ServiceDaysWorked from "../../api/Service/ServiceDaysWorked";
import ServiceTreatment from "../../api/Service/ServiceTreatment";
import ServiceMachine from "../../api/Service/ServiceMachine";
import ServicePiece from "../../api/Service/ServicePiece";
import { get_All_Machines } from "./actionMachine";
import { get_All_Company } from "./actionCompany";
import { get_All_Piece_R } from "./actionPiece";
import {
  findComplainByAssistant,
  get_Complaits_By_Emp_Company_R,
} from "./actionComplain";
import { get_All_Days_Worked_R } from "./actionDaysWorked";
import { gat_All_Treatment_R } from "./actionsTreatments";
import ServiceEmpC from "../../api/Service/ServiceEmpC";
import { get_All_Emp_C } from "./actionEmpC";
import ServiceEmpS from "../../api/Service/ServiceEmpS";
import { get_All_Emp_S } from "./actionEmpS";

export const GET_DATA_FOR_OPERATION = "GET_DATA_FOR_OPERATION";
export const DATA_IN = "DATA_IN";
export const ADD = "ADD";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";
export const GET_DATA_FOR_OPERATION_SELECT = "GET_DATA_FOR_OPERATION_SELECT";
export const DATA_IN_AC = "DATA_IN_AC";

export const get_data = (data) => {
  return async (dispatch) => {
    dispatch({ type: GET_DATA_FOR_OPERATION, operation: data });
  };
};
export const get_dataSelect = (data) => {
  return async (dispatch) => {
    dispatch({ type: GET_DATA_FOR_OPERATION_SELECT, operation: data });
  };
};

export const dataIn = (data) => {
  return async (dispatch) => {
    dispatch({ type: DATA_IN, dataIn: data });
  };
};

export const dataInForAccess = (dataIn) => {
  return async (dispatch) => {
    dispatch({ type: DATA_IN_AC, data: dataIn });
  };
};

export const Add = (Table, data, idUser) => {
  return async (dispatch) => {
    switch (Table) {
      case "Company": {
        try {
          const response = await ServiceCompany._ADD_COMPANY(data.body.user);
          dispatch({ type: ADD, data: response.data });
          dispatch(get_All_Company());
          dispatch(dataIn(true));
        } catch (error) {
          console.log(error);
          dispatch(dataIn(false));
        }
        break;
      }
      case "Complaints": {
        try {
          console.log(data.FK);
          const response = await ServecCompalin._ADD_COMPLAIN(
            data.body.user,
            data.FK
          );
          dispatch({ type: ADD, data: response.data });
          dispatch(findComplainByAssistant(idUser));
          dispatch(dataIn(true));
        } catch (error) {
          console.log(error);
          dispatch(dataIn(false));
        }
        break;
      }
      case "DaysWorked": {
        try {
          const response = await ServiceDaysWorked._ADD_DAYS(
            data.body.user,
            data.FK
          );
          dispatch({ type: ADD, data: response.data });
          dispatch(dataIn(true));
        } catch (error) {
          console.log(error);
          dispatch(dataIn(false));
        }
        break;
      }
      case "Treatments": {
        try {
          const response = await ServiceTreatment._ADD_TREATMENT(
            data.body.user,
            data.FK
          );
          dispatch({ type: ADD, data: response.data });
          dispatch(dataIn(true));
        } catch (error) {
          console.log(error);
          dispatch(dataIn(false));
        }
        break;
      }
      case "Machine": {
        try {
          const response = await ServiceMachine._ADD_MACHINE(data.body.user);
          dispatch({ type: ADD, data: response.data });
          dispatch(dataIn(true));
        } catch (error) {
          console.log(error);
          dispatch(dataIn(false));
        }
        break;
      }

      case "Piece": {
        try {
          const response = await ServicePiece._ADD_PIECE(
            data.body.user,
            data.FK
          );
          dispatch({ type: ADD, data: response.data });
          dispatch(dataIn(true));
        } catch (error) {
          console.log(error);
          dispatch(dataIn(false));
        }
        break;
      }
      case "EmployeeCompany": {
        console.log(data.FK);
        try {
          const response = await ServiceEmpC._POST_EMP_C(
            data.body.user,
            data.FK
          );

          dispatch({ type: ADD, data: response.data });
          dispatch(get_All_Emp_C());
          dispatch(dataIn(true));
        } catch (error) {
          console.log(error);
          dispatch(dataIn(false));
        }
        break;
      }
      case "EmployeeState": {
        try {
          const response = await ServiceEmpS._POST_EMP_S(data.body.user);

          dispatch({ type: ADD, data: response.data });
          dispatch(get_All_Emp_S());
          dispatch(dataIn(true));
        } catch (error) {
          console.log(error);
          dispatch(dataIn(false));
        }
        break;
      }
      case "nothing": {
        dispatch({ type: ADD, data: null });
        dispatch(dataIn(false));
        break;
      }
    }
  };
};

// ______________________________________________________________________________________________

export const Update = (Table, data, idUser) => {
  return async (dispatch) => {
    switch (Table) {
      case "Company": {
        try {
          const response = await ServiceCompany._PUT_COMPANY(
            data.id,
            data.body.user,
            data.FK
          );
          dispatch({ type: UPDATE, data: response.data });
          dispatch(get_All_Company());
          dispatch(dataIn(true));
        } catch (error) {
          console.log(error);
          dispatch(dataIn(false));
        }
        break;
      }
      case "Complaints": {
        try {
          const response = await ServecCompalin._PUT_COMPLAIN(
            data.id,
            data.body.user,
            data.FK
          );
          dispatch({ type: UPDATE, data: response.data });
          dispatch(findComplainByAssistant(idUser));
          dispatch(dataIn(true));
        } catch (error) {
          console.log(error);
          dispatch(dataIn(false));
        }
        break;
      }
      case "DaysWorked": {
        try {
          const response = await ServiceDaysWorked._PUT_DAYS(
            data.id,
            data.body.user,
            data.FK
          );
          dispatch({ type: UPDATE, data: response.data });
          dispatch(get_All_Days_Worked_R(idUser));
          dispatch(dataIn(true));
        } catch (error) {
          console.log(error);
          dispatch(dataIn(false));
        }
        break;
      }
      case "Treatments": {
        try {
          const response = await ServiceTreatment._PUT_TREATMENT(
            data.id,
            data.body.user,
            data.FK
          );
          dispatch({ type: UPDATE, data: response.data });
          dispatch(gat_All_Treatment_R(idUser));
          dispatch(dataIn(true));
        } catch (error) {
          console.log(error);
          dispatch(dataIn(false));
        }
        break;
      }
      case "Machine": {
        try {
          const response = await ServiceMachine._PUT_MACHINE(
            data.id,
            data.body.user,
            data.FK
          );
          dispatch({ type: UPDATE, data: response.data });
          dispatch(get_All_Machines());
          dispatch(dataIn(true));
        } catch (error) {
          console.log(error);
          dispatch(dataIn(false));
        }
        break;
      }

      case "Piece": {
        try {
          const response = await ServicePiece._PUT_PIECE(
            data.id,
            data.body.user,
            data.FK
          );
          dispatch({ type: UPDATE, data: response.data });
          dispatch(get_All_Piece_R());
          dispatch(dataIn(true));
        } catch (error) {
          console.log(error);
          dispatch(dataIn(false));
        }
        break;
      }

      case "EmployeeCompany": {
        try {
          console.log(data.FK);
          const response = await ServiceEmpC._PUT_EMP_C(
            data.id,
            data.body.user,
            data.FK
          );
          dispatch({ type: UPDATE, data: response.data });
          dispatch(get_All_Emp_C());
          dispatch(dataIn(true));
        } catch (error) {
          console.log(error);
          dispatch(dataIn(false));
        }
        break;
      }

      case "EmployeeState": {
        try {
          const response = await ServiceEmpS._PUT_EMP_S(
            data.id,
            data.body.user
          );
          dispatch({ type: UPDATE, data: response.data });
          dispatch(get_All_Emp_S());
          dispatch(dataIn(true));
        } catch (error) {
          console.log(error);
          dispatch(dataIn(false));
        }
        break;
      }

      case "nothing": {
        dispatch({ type: UPDATE, data: null });
        dispatch(dataIn(false));

        break;
      }
    }
  };
};

// ______________________________________________________________________________________________

export const Delete = (Table, data, idUser) => {
  return async (dispatch) => {
    switch (Table) {
      case "Company": {
        try {
          const response = await ServiceCompany._DELETE_COMPANY(data);
          dispatch({ type: DELETE, data: response.data });
        } catch (error) {
          console.log(error);
        }
        break;
      }
      case "Complaints": {
        try {
          const response = await ServecCompalin._DELETE_COMPLAIN(data);
          dispatch({ type: DELETE, data: response.data });
          dispatch(findComplainByAssistant(idUser));
        } catch (error) {
          console.log(error);
        }
        break;
      }
      case "DaysWorked": {
        try {
          const response = await ServiceDaysWorked._DELETE_DAYS(data);
          dispatch({ type: DELETE, data: response.data });
        } catch (error) {
          console.log(error);
        }
        break;
      }
      case "Treatments": {
        try {
          const response = await ServiceTreatment._DELETE_TREATMENT(data);
          dispatch({ type: DELETE, data: response.data });
        } catch (error) {
          console.log(error);
        }
        break;
      }
      case "Machine": {
        try {
          const response = await ServiceMachine._DELETE_MACHINE(data);
          dispatch({ type: DELETE, data: response.data });
        } catch (error) {
          console.log(error);
        }
        break;
      }

      case "Piece": {
        try {
          const response = await ServicePiece._DELETE_PIECE(data);
          dispatch({ type: DELETE, data: response.data });
        } catch (error) {
          console.log(error);
        }
        break;
      }
      case "EmployeeCompany": {
        try {
          const response = await ServiceEmpC._DELETE_EMP_C(data);
          dispatch({ type: DELETE, data: response.data });
          dispatch(get_All_Emp_C());
        } catch (error) {
          console.log(error);
        }
        break;
      }
      case "EmployeeState": {
        try {
          const response = await ServiceEmpS._DELETE_EMP_S(data);
          dispatch({
            type: DELETE,
            data: response.data,
          });
          dispatch(get_All_Emp_S());
        } catch (error) {
          console.log(error);
        }
        break;
      }
      case "nothing": {
        dispatch({ type: DELETE, data: null });
        break;
      }
    }
  };
};
