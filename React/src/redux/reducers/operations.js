import {
  ADD,
  DATA_IN,
  DATA_IN_AC,
  DELETE,
  GET_DATA_FOR_OPERATION,
  GET_DATA_FOR_OPERATION_SELECT,
  UPDATE,
} from "../actions/actionOperation";

const initialState = {
  data: {},
  dataSelect: {},
  dataIn: false,
  dataIn_AC: false,
  NewItem: {},
};

function operationReduce(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_FOR_OPERATION:
      return {
        ...state,
        data: action.operation,
      };
    case GET_DATA_FOR_OPERATION_SELECT:
      return {
        ...state,
        dataSelect: action.operation,
      };
    case DATA_IN:
      return {
        ...state,
        dataIn: action.dataIn,
      };
    case DATA_IN_AC:
      return {
        ...state,
        dataIn_AC: action.data,
      };

    case ADD:
      return {
        ...state,
        NewItem: action.data,
      };
    case UPDATE:
      return {
        ...state,
        NewItem: action.data,
      };
    case DELETE:
      return {
        ...state,
        NewItem: action.data,
      };

    default:
      return state;
  }
}
export default operationReduce;
