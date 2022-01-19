import { GET_DATA, GET_DATA_FK, GET_USER, LOGIN, LOGOUT, UPDATE_USER } from "../actions/actionLogin";

const initialState={
   employees:{},
   user:[],
   data:[],
   dataFK:[],
   typeuser:false ,  
   isLogin:false,
   isAuth: true ,  
}
function loginReducer(state=initialState,action){
    switch (action.type) {
        case LOGIN: 
      
       
        
      
        return{
            ...state,
            employees:action.data.employees.list[0],
            isAuth:action.data.employees.isEmpty,
            typeuser :action.data.typeuser
            
            
           

        }
        case GET_USER:
            return {
                ...state,
                user:action.payload.user,
                isLogin:action.payload.isLogin
               
            }
        case GET_DATA:
            return {
                    ...state,
                    data:action.user,
                   
                   
                }
         case GET_DATA_FK:
            return {
                    ...state,
                    dataFK:action.user,
                   
                   
                }
         case UPDATE_USER:
              return {
                     ...state,
                     employees:action.data,
                           
                           
                        }
            case LOGOUT:
               
               
                return {
                    ...state,
                     employees:null,
                     isAuth:true,
                   
                }

            default:  
            return state ;
    }
   
}
export default loginReducer