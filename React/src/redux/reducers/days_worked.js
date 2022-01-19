import { ACCESS_FOR_DAYS_WORKED ,GET_ALL_DAYS_WORKED_R, GET_DATA_FOR_CHART, GET_ONE_DAYS} from "../actions/actionDaysWorked";

    
    const initialState={
        access:false ,
        days:[],
        oneDays:{},
        dataChart:{}
   
    }

    function days_workedReducer(state=initialState , action) {
        switch (action.type) {
            case ACCESS_FOR_DAYS_WORKED:
                return {
                    ...state,
                    access: action.access
                }
            case GET_ALL_DAYS_WORKED_R:
                 return {
                     ...state,
                     days:action.days
                }
            case GET_ONE_DAYS:
                return {
                    ...state,
                    oneDays:action.oneDays,
                    
            }
            case GET_DATA_FOR_CHART:
                return {
                    ...state,
                    dataChart:action.data,
                    
            }
            default:
                return state 
        }
        
    }

    export default days_workedReducer

