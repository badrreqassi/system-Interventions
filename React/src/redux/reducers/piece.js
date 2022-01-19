import { ACCESS_FOR_PIECE,GET_ALL_PIECE_R, GET_ONE_PIECE } from "../actions/actionPiece";


const initialState={
    access:false,
    pieces:[],
    onePiece:{},
  
}
function pieceReducer(state=initialState , action) {
    switch (action.type) {
        case ACCESS_FOR_PIECE:
        return {
            ...state,
            access: action.access
        }
        case GET_ALL_PIECE_R:
        return {
            ...state,
            pieces: action.pieces
        }
        case GET_ONE_PIECE:
            return {
                ...state,
                onePiece:action.onePiece,
                
            }
    
        default:
          return state
    }
    
}
export default pieceReducer