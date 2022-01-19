import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wait from '../../../message/Wait'
import { get_data } from '../../../redux/actions/actionOperation'
import LayoutOP from '../CadrOperation/NavBarOperations/LayoutOP'
import { content } from '../Content/ContentDays'
import FormsDaysWorked from './FormsDaysWorked'
 

function Days_Worked() {
    const days = useSelector(state => state.days_worked.days)
    console.log(days)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_data({
          data:days,
          title:"DaysWorked",
          idTable:"d_work_id",
          content:content
        }))
       
      }, [ ])
    return (
        <div id="bodyOperation">

          <Wait table={"DaysWorked"}/>
          <FormsDaysWorked/>

     </div>
    )
}

export default Days_Worked
