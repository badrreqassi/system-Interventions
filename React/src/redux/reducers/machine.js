import { ACCESS_FOR_MACHINE, GET_ALL_MACHINES, GET_ONE_MACHINE } from "../actions/actionMachine";


const initialState={
    access: false,
    machines:{},
    oneMachine:{},
    
}

function machineReducer(state=initialState , action) {
    switch (action.type) {
        case ACCESS_FOR_MACHINE:
            return {
                ...state,
                  access:action.access
            }
            case GET_ALL_MACHINES:
                return{
                    ...state,
                    machines:action.machines
                }
           case GET_ONE_MACHINE:
                return {
                     ...state,
                     oneMachine:action.oneMachine,
                
                 }
    
        default:
           return state
    }
    
}
export default machineReducer