import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wait from '../../../message/Wait'
import { get_data } from '../../../redux/actions/actionOperation'
import LayoutOP from '../CadrOperation/NavBarOperations/LayoutOP'
import { content } from '../Content/ContentMachine'
import FormsMachine from './FormsMachine'
 
function Machine() {
    const machines = useSelector(state => state.machine.machines)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_data({
          data:machines,
          title:"Machine",
          idTable:"machine_id",
          content:content
        }))
       
      }, [ ])
    return (
        <div id="bodyOperation">
           <Wait table={"Machine"}/>
           <FormsMachine/>
        </div>
    )
}

export default Machine
