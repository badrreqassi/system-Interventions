import {
  ADD_TABLES_NAME,
  DELETE_TABLES_NAME,
  GET_ACCESS,
  GET_TABLES_NAME,
} from "../actions/actionAccessTables";

const initialState = {
  access: false,
  tablesName: {},
  newitem: {},
};
function accessReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACCESS:
      return {
        ...state,
        access: action.data,
      };
    case GET_TABLES_NAME:
      return {
        ...state,
        tablesName: action.data,
      };
    case ADD_TABLES_NAME:
      return {
        ...state,
        newitem: action.data,
      };
    case DELETE_TABLES_NAME:
      return {
        ...state,
        newitem: action.data,
      };

    default:
      return state;
  }
}
export default accessReducer;
