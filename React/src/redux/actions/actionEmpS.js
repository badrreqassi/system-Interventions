import ServiceEmpS from "../../api/Service/ServiceEmpS";
import { dataIn } from "./actionOperation";

export const GET_ALL_EMP_S = "GET_ALL_EMP_S";
export const GET_ONE_EMP_S = "GET_ONE_EMP_S";

export const get_All_Emp_S = () => {
  return async (dispatch) => {
    try {
      const response = await ServiceEmpS._GET_ALL_EMP_S();
      dispatch({ type: GET_ALL_EMP_S, data: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const get_One_Emp_S = (id) => {
  return async (dispatch) => {
    try {
      if (id === undefined) {
        dispatch({ type: GET_ONE_EMP_S });
        dispatch(dataIn(false));
      } else {
        const response = await ServiceEmpS._GET_ONE_EMP_S(id);
        dispatch({ type: GET_ONE_EMP_S, data: response.data });
        dispatch(dataIn(true));
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_ONE_EMP_S });
      dispatch(dataIn(false));
    }
  };
};
