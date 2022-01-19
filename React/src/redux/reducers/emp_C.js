import {
  ADD_EMP_C,
  DELETE_EMP_C,
  GET_ALL_EMP_C,
  GET_ALL_TECHNICAINE,
  GET_ONE_EMP_C,
  UPDATE_EMP_C,
} from "../actions/actionEmpC";

const initialState = {
  Operation: [],
  oneEmp_C: {},
  dataIn: false,
  All_empC: {},
  technicaine: {},
  loading: false,
};

function EmpcReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EMP_C:
      return {
        ...state,
        Operation: action.data,
      };
    case UPDATE_EMP_C:
      return {
        ...state,
        Operation: action.data,
      };
    case DELETE_EMP_C:
      return {
        ...state,
        Operation: action.data,
      };
    case GET_ONE_EMP_C:
      return {
        ...state,
        oneEmp_C: action.data.oneEmp_C,
        loading: action.data.loading,
      };
    case GET_ALL_EMP_C:
      return {
        ...state,
        All_empC: action.data,
      };
    case GET_ALL_TECHNICAINE:
      return {
        ...state,
        technicaine: action.data,
      };

    default:
      return state;
  }
}
export default EmpcReducer;
