import ServiceEmpC from "../../api/Service/ServiceEmpC";
import { dataIn } from "./actionOperation";

export const ADD_EMP_C = "ADD_EMP_C";
export const UPDATE_EMP_C = "UPDATE_EMP_C";
export const DELETE_EMP_C = "DELETE_EMP_C";
export const GET_ONE_EMP_C = "GET_ONE_EMP_C";
export const GET_ALL_EMP_C = "GET_ALL_EMP_C";
export const GET_ALL_TECHNICAINE = "GET_ALL_TECHNICAINE";

export const add_Emp_C = (idCompany, body) => {
  return async (dispatch) => {
    try {
      const response = await ServiceEmpC._POST_EMP_C(idCompany, body);
      dispatch({ type: ADD_EMP_C, data: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};
export const Update_Emp_C = (id, idCompany, body) => {
  return async (dispatch) => {
    try {
      const response = await ServiceEmpC._PUT_EMP_C(id, idCompany, body);
      dispatch({ type: UPDATE_EMP_C, data: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const Delete_Emp_C = (id) => {
  return async (dispatch) => {
    try {
      const response = await ServiceEmpC._DELETE_EMP_C(id);
      dispatch({ type: DELETE_EMP_C, data: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const get_One_Emp_C = (id) => {
  return async (dispatch) => {
    if (id === undefined) {
      dispatch({
        type: GET_ONE_EMP_C,
        data: { oneEmp_C: null, loading: false },
      });
      dispatch(dataIn(false));
    } else {
      const response = await ServiceEmpC._GET_ONE_EMP_C(id);

      dispatch({
        type: GET_ONE_EMP_C,
        data: { oneEmp_C: response.data, loading: true },
      });
      dispatch(dataIn(true));
    }
  };
};

export const get_All_Emp_C = () => {
  return async (dispatch) => {
    const response = await ServiceEmpC._GET_ALL_EMP_C();

    dispatch({ type: GET_ALL_EMP_C, data: response.data });
  };
};

export const getAllTechnicaine = () => {
  return async (dispatch) => {
    const response = await ServiceEmpC.getAllTechnicaine();

    dispatch({ type: GET_ALL_TECHNICAINE, data: response.data });
  };
};
