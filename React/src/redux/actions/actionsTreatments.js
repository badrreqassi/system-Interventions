import ServiceTreatment from "../../api/Service/ServiceTreatment";
import { dataIn } from "./actionOperation";

export const GET_All_INTERVENTIONS = "GET_ALL_INTERVENTIONS";
export const ACCESS_FOR_TREATMENT = " ACCESS_FOR_TREATMENT";
export const GET_ALL_TREATMENTS_R = "GET_ALL_TREATMENTS_R";
export const GET_ONE_TREATMENT = "GET_ONE_TREATMENT";

export const get_all_Intervention = () => {
  return async (dispatch) => {
    try {
      const response = await ServiceTreatment._GET_All_INTERVENTION();
      dispatch({ type: GET_All_INTERVENTIONS, intervetion: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const access_For_Treatment = (value) => {
  return async (dispatch) => {
    const response = await ServiceTreatment._ACCES_FOR_TREATMENT(value);
    dispatch({ type: ACCESS_FOR_TREATMENT, access: response.data });
  };
};
export const gat_All_Treatment_R = (id) => {
  return async (dispatch) => {
    const response = await ServiceTreatment._GET_All_TREATMENTS_R(id);

    dispatch({ type: GET_ALL_TREATMENTS_R, treatments_R: response.data });
  };
};
export const get_One_Treatment = (id) => {
  return async (dispatch) => {
    if (id === undefined) {
      dispatch({
        type: GET_ONE_TREATMENT,
        data: { oneTreatment: null, loading: false },
      });
      dispatch(dataIn(false));
    } else {
      const response = await ServiceTreatment._GET_ONE_TREATMENT(id);
      dispatch({
        type: GET_ONE_TREATMENT,
        data: { oneTreatment: response.data, loading: true },
      });
      dispatch(dataIn(true));
    }
  };
};
