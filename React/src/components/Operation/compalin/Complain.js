import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wait from '../../../message/Wait'
import { get_data } from '../../../redux/actions/actionOperation'
import FormForComplain from '../../SingleComponents/PartForms/FormForComplain'
import LayoutOP from '../CadrOperation/NavBarOperations/LayoutOP'
import { content } from '../Content/ContentComplain'
import FormsComplain from './FormsComplain'
 

function Complain() {
    const complain = useSelector(state => state.complaints.complain_R)
    console.log(complain)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_data({
          data:complain,
          title:"Complaints",
          idTable:"complain_id",
          content:content
        }))
       
      }, [ ])
    return (
        <div id="bodyOperation">
         <Wait table={"Complaints"}/>
          <FormsComplain/>
        </div>
    )
}

export default Complain

/*
 <Wait op={"Complaints"}/>
  */
