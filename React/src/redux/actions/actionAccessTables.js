import ServiceAccessTables from "../../api/Service/ServiceAccessTables";
import { dataIn, dataInForAccess } from "./actionOperation";

export const GET_ACCESS = "GET_ACCESS";
export const GET_TABLES_NAME = "GET_TABLES_NAME";
export const ADD_TABLES_NAME = "ADD_TABLES_NAME";
export const DELETE_TABLES_NAME = "DELETE_TABLES_NAME";

export const get_AccessTables = (CinUser) => {
  return async (dispatch) => {
    try {
      const response = await ServiceAccessTables._ACCESS(CinUser);

      dispatch({ type: GET_ACCESS, data: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const get_Tables_Name = (cin) => {
  return async (dispatch) => {
    try {
      if (cin == null) {
        console.log("inmty");
        dispatch({ type: GET_TABLES_NAME });
        dispatch(dataInForAccess(false));
      } else {
        const response = await ServiceAccessTables._GET_ALL_TABLES_NAME(cin);
        console.log(response.data);
        dispatch({ type: GET_TABLES_NAME, data: response.data });
        dispatch(dataInForAccess(true));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const Add_Access = (id, body) => {
  return async (dispatch) => {
    try {
      const response = await ServiceAccessTables._ADD(id, body);
      console.log(response.data);
      dispatch({ type: ADD_TABLES_NAME, data: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const Delete_Access = (id) => {
  return async (dispatch) => {
    try {
      const response = await ServiceAccessTables._DELETE(id);
      console.log(response.data);
      dispatch({ type: DELETE_TABLES_NAME, data: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};
