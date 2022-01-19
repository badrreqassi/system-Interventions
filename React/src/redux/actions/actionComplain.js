import { messageService } from "../../api/Observable";
import ServecCompalin from "../../api/Service/ServecCompalin";
import { dataIn } from "./actionOperation";

export const GET_ALL_COMPLAINTS = "get_all_complaints";
export const GET_COMPLAINTS_BY_EMP_COMPANY = "get_complaints_by_company";
export const GET_COMPLAINTS_BY_EMP_COMPANY_R = "get_complaints_by_company_R";
export const GET_COMPLAINTS_BY_EMP_COMPANY_NOT =
  "get_complaints_by_company_Not";
export const GET_COMPLAINTS_BY_EMP_COMPANY_COMPLETE =
  "get_complaints_by_company_Complete";
export const ACCESS_FOR_COMPLAIN = "ACCESS_FOR_COMPLAIN";
export const GET_ONE_COMPLAIN = "GET_ONE_COMPLAIN";
export const FIND_COMPLAIN_BY_ASSISSTANT = "FIND_COMPLAIN_BY_ASSISSTANT";

export const get_all_complaints = () => {
  return async (dispatch) => {
    try {
      const response = await ServecCompalin._GET_ALL_COMPLAINTS();
      dispatch({ type: GET_ALL_COMPLAINTS, complaints: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_ALL_COMPLAINTS });
    }
  };
};

export const get_Complaits_By_Emp_Company = (id) => {
  return async (dispatch) => {
    try {
      const response = await ServecCompalin._GET_COMPLAINTS_BY_EMP_COMPANY(id);
      dispatch({
        type: GET_COMPLAINTS_BY_EMP_COMPANY,
        complain: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_COMPLAINTS_BY_EMP_COMPANY });
    }
  };
};

export const get_Complaits_By_Emp_Company_R = (id) => {
  return async (dispatch) => {
    try {
      const response = await ServecCompalin._GET_COMPLAINTS_BY_EMP_COMPANY_R(
        id
      );
      dispatch({
        type: GET_COMPLAINTS_BY_EMP_COMPANY_R,
        complain: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_COMPLAINTS_BY_EMP_COMPANY });
    }
  };
};

export const get_Complaits_By_Emp_Company_Not = (id, fortable) => {
  return async (dispatch) => {
    try {
      if (fortable) {
        const response =
          await ServecCompalin._GET_COMPLAINTS_BY_EMP_COMPANY_NOT_R(id);
        dispatch({
          type: GET_COMPLAINTS_BY_EMP_COMPANY_NOT,
          complain: response.data,
        });
      } else {
        const response =
          await ServecCompalin._GET_COMPLAINTS_BY_EMP_COMPANY_NOT(id);
        dispatch({
          type: GET_COMPLAINTS_BY_EMP_COMPANY_NOT,
          complain: response.data,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_COMPLAINTS_BY_EMP_COMPANY_NOT });
    }
  };
};

export const get_Complaits_By_Emp_Company_Complete = (id) => {
  return async (dispatch) => {
    try {
      const response =
        await ServecCompalin._GET_COMPLAINTS_BY_EMP_COMPANY_COMPLETE(id);
      dispatch({
        type: GET_COMPLAINTS_BY_EMP_COMPANY_COMPLETE,
        complain: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_COMPLAINTS_BY_EMP_COMPANY_COMPLETE });
    }
  };
};

export const get_One_Complain = (id) => {
  return async (dispatch) => {
    if (id === undefined) {
      dispatch({
        type: GET_ONE_COMPLAIN,
        data: { oneComplain: null, loading: false },
      });

      dispatch(dataIn(false));
    } else {
      const response = await ServecCompalin._GET_ONE_COMPLAIN(id);
      dispatch({
        type: GET_ONE_COMPLAIN,
        data: { oneComplain: response.data, loading: true },
      });
      dispatch(dataIn(true));
    }
  };
};

export const findComplainByAssistant = (id) => {
  return async (dispatch) => {
    if (id === undefined) {
      dispatch({ type: FIND_COMPLAIN_BY_ASSISSTANT });
      dispatch(dataIn(false));
    } else {
      const response = await ServecCompalin.findComplainByAssistant(id);
      console.log(response.data);
      dispatch({ type: FIND_COMPLAIN_BY_ASSISSTANT, data: response.data });
      dispatch(dataIn(true));
    }
  };
};
