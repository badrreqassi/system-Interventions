import { GET_PAGINATE_INFO } from "../actions/actionPaginate";

const initialState={
   paginate:[],
    loading:true
 }


 function paginateReducer(state=initialState , action){
     switch (action.type) {
         case GET_PAGINATE_INFO:
             return {
                 ...state,
                 paginate:action.payload.paginate,
                 loading:action.payload.loading
             }
         default:
            return state
     }

 }
 export default paginateReducer