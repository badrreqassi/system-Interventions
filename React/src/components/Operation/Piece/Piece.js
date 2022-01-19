import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wait from '../../../message/Wait'
import { get_data } from '../../../redux/actions/actionOperation'
import LayoutOP from '../CadrOperation/NavBarOperations/LayoutOP'
import { content } from '../Content/ContentPiece'
import FormsPiece from './FormsPiece'
function Piece() {
 const dispatch= useDispatch()
    const pieces = useSelector(state => state.piece.pieces)
    useEffect(() => {
        dispatch(get_data({
          data:pieces,
          title:"Piece",
          idTable:"piece_id",
          content:content
        }))
       
      }, [ ])
    return (
        <div id="bodyOperation">
        <Wait table={"Piece"}/>
        <FormsPiece/>
     </div>
    )
}

export default Piece
