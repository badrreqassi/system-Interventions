import {
  ACCESS_FOR_TREATMENT,
  GET_All_INTERVENTIONS,
  GET_ALL_TREATMENTS_R,
  GET_ONE_TREATMENT,
} from "../actions/actionsTreatments";

const initialState = {
  Interventions: [],
  treatments_R: [],
  access: false,
  oneTreatment: {},
  loading: false,
};

function treatmentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_All_INTERVENTIONS:
      return {
        ...state,
        Interventions: action.intervetion,
        oneTreatment: {},
      };
    case ACCESS_FOR_TREATMENT:
      return {
        ...state,
        access: action.access,
      };
    case GET_ALL_TREATMENTS_R:
      return {
        ...state,
        treatments_R: action.treatments_R,
      };
    case GET_ONE_TREATMENT:
      return {
        ...state,
        oneTreatment: action.data.oneTreatment,
        loading: action.data.loading,
      };
    default:
      return state;
  }
}

export default treatmentsReducer;
