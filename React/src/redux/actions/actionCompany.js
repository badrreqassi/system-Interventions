import ServiceCompany from "../../api/Service/ServiceCompany";
import { dataIn } from "./actionOperation";

export const GET_ALL_COMPANY = "GET_ALL_COMPANY";
export const ACCESS_FOR_COMAPNY = "ACCESS_FOR_COMAPNY";
export const GET_ONE_COMPANY = "GET_ONE_COMPANY";

export const get_All_Company = () => {
  return async (dispatch) => {
    const response = await ServiceCompany._GET_All_COMPANY();

    dispatch({ type: GET_ALL_COMPANY, company: response.data });
  };
};
export const access_For_Company = (value) => {
  return async (dispatch) => {
    const response = await ServiceCompany._ACCES_FOR_COMPANY(value);
    dispatch({ type: ACCESS_FOR_COMAPNY, access: response.data });
  };
};
export const get_One_Company = (id) => {
  return async (dispatch) => {
    if (id === undefined) {
      dispatch({ type: GET_ONE_COMPANY });
      dispatch(dataIn(false));
    } else {
      const response = await ServiceCompany._GET_ONE_COMAPNY(id);
      dispatch({ type: GET_ONE_COMPANY, oneCompany: response.data });
      dispatch(dataIn(true));
    }
  };
};
