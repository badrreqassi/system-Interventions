import { ACCESS_FOR_COMAPNY, GET_ALL_COMPANY, GET_ONE_COMPANY } from "../actions/actionCompany";

const initialState={
    company:[] ,
    access :false,
    oneCompany:{},
   
}
function companyReducer (state=initialState, action){
    switch (action.type) {
        case GET_ALL_COMPANY:
            return{
                ...state,
                company:action.company
            }
        case ACCESS_FOR_COMAPNY:
            return {
                ...state,
                access: action.access 
            }
        case GET_ONE_COMPANY:
            return {
                ...state,
                oneCompany:action. oneCompany,
                 
            }
    
        default:
           return state 
    }
    
}
export default companyReducer