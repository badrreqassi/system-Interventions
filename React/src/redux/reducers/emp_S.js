import { GET_ALL_EMP_S, GET_ONE_EMP_S } from "../actions/actionEmpS";

const initialState = {
  all_empS: {},
  One_EmpS: {},
};

function empS_Reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EMP_S:
      return {
        ...state,
        all_empS: action.data,
      };
    case GET_ONE_EMP_S:
      return {
        ...state,
        One_EmpS: action.data,
      };

    default:
      return state;
  }
}
export default empS_Reducer;
