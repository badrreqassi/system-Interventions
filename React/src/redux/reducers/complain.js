import { data } from "jquery";
import {
  ACCESS_FOR_COMPLAIN,
  FIND_COMPLAIN_BY_ASSISSTANT,
  GET_ALL_COMPLAINTS,
  GET_COMPLAINTS_BY_EMP_COMPANY,
  GET_COMPLAINTS_BY_EMP_COMPANY_COMPLETE,
  GET_COMPLAINTS_BY_EMP_COMPANY_NOT,
  GET_COMPLAINTS_BY_EMP_COMPANY_R,
  GET_ONE_COMPLAIN,
} from "../actions/actionComplain";

const initialState = {
  complaints: [],
  complain: [],
  complain_R: [],
  complete_C: [],
  notComplete_C: [],
  access: false,
  oneComplain: {},
  loading: false,
  complainAssistant: {},
};

function complainReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COMPLAINTS:
      return {
        ...state,
        complaints: action.complaints,
      };

    case GET_COMPLAINTS_BY_EMP_COMPANY:
      return {
        ...state,
        complain: action.complain,
      };
    case GET_COMPLAINTS_BY_EMP_COMPANY_R:
      return {
        ...state,
        complain_R: action.complain,
      };
    case GET_COMPLAINTS_BY_EMP_COMPANY_NOT:
      return {
        ...state,
        notComplete_C: action.complain,
      };
    case GET_COMPLAINTS_BY_EMP_COMPANY_COMPLETE:
      return {
        ...state,
        complete_C: action.complain,
      };
    case ACCESS_FOR_COMPLAIN:
      return {
        ...state,
        access: action.access,
      };
    case GET_ONE_COMPLAIN:
      return {
        ...state,
        oneComplain: action.data.oneComplain,
        loading: action.data.loading,
      };
    case FIND_COMPLAIN_BY_ASSISSTANT:
      return {
        ...state,
        complainAssistant: action.data,
      };

    default:
      return state;
  }
}
export default complainReducer;
