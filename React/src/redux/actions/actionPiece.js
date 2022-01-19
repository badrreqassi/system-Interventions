import ServicePiece from "../../api/Service/ServicePiece"
import { dataIn } from "./actionOperation"

 
export const ACCESS_FOR_PIECE="ACCESS_FOR_PIECE"
export const GET_ALL_PIECE_R="GET_ALL_PIECE_R"
export const GET_ONE_PIECE="GET_ONE_PIECE"

  
export const get_All_Piece_R=()=>{
  return  async dispatch=>{
          const response = await  ServicePiece._GET_ALL_PIECE_R()   
           dispatch({type:GET_ALL_PIECE_R , pieces :response.data})
  }

}
export const get_One_Piece=(id)=>{
  return  async dispatch=>{
    if(id ===undefined){

          dispatch({type:GET_ONE_PIECE })
          dispatch(dataIn(false))
    } 
    else {
          const response = await  ServicePiece._GET_ONE_PIECE(id)  
           dispatch({type:GET_ONE_PIECE,   onePiece :response.data  })
           dispatch(dataIn(true))
          }
  }

}