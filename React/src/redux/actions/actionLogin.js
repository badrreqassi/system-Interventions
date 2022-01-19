import { messageService } from "../../api/Observable";
import ServiceEmpC from "../../api/Service/ServiceEmpC";
import ServiceEmpS from "../../api/Service/ServiceEmpS";
import { dataIn } from "./actionOperation";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_USER = "GET_USER";
export const GET_DATA = "GET_DATA";
export const GET_DATA_FK = "GET_DATA_FK";
export const UPDATE_USER = "UPDATE_USER";

export const login = (user) => {
  return async (dispatch) => {
    try {
      const response_C_ = await ServiceEmpC._GET_LOGIN(user);
      const response_S_ = await ServiceEmpS._GET_LOGIN(user);

      console.log(response_C_.data);
      console.log(response_S_.data);
      if (
        response_C_.data.isEmpty == true &&
        response_S_.data.isEmpty == true
      ) {
        messageService.sendMessage(
          " password  or email is incorrect  please try Again "
        );
      }

      user.typeuser
        ? dispatch({
            type: LOGIN,
            data: { employees: response_C_.data, typeuser: user.typeuser },
          })
        : dispatch({
            type: LOGIN,
            data: { employees: response_S_.data, typeuser: user.typeuser },
          });
    } catch (error) {
      console.log("error : " + error);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGOUT, data: null });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_USER, payload: { user: user, isLogin: true } });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getData = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_DATA, user: user });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDataFK = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_DATA_FK, user: user });
    } catch (error) {
      console.log(error);
    }
  };
};

export const update = (id, user, FK, typeuser) => {
  return async (dispatch) => {
    try {
      console.log(typeuser);
      if (typeuser) {
        const response = await ServiceEmpC._PUT_EMP_C(id, user, FK);
        dispatch({ type: UPDATE_USER, data: response.data });
        dispatch(dataIn(true));
      }
      if (typeuser == false) {
        const response_S = await ServiceEmpS._PUT_EMP_S(id, user);
        dispatch({ type: UPDATE_USER, data: response_S.data });
        dispatch(dataIn(true));
      }
    } catch (error) {
      console.log(error);
      dispatch(dataIn(false));
    }
  };
};
