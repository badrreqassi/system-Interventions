import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Delete } from '../../../../redux/actions/actionOperation'
import FormsComplain from '../../compalin/FormsComplain'
 

 
import AjouterPart_2 from '../AjouterPart_2'
 
 

function TablesOperation( ){
    const data = useSelector(state => state.dataOperations.data)
    const NewItem = useSelector(state => state.dataOperations.NewItem)
    const employees = useSelector(state => state.employees.employee)
    const dispatch = useDispatch()
    const [state, setstate] = useState([])
    const [In, setIn] = useState(false)

 

  


  
    useEffect(() => {
     dispatch(Delete("nothing"))


      if(NewItem==null){

        setstate(data.data)
        setIn(true)
       
      }
      else{

      switch (data.title) {
      
        case "Company":{
         
          
          setstate([...data.data.filter(item=>item.numCompany !== NewItem.numCompany),NewItem])
          setIn(true)

          break ;
        }
         case "Complaints":{  
            
          setstate([...data.data.filter(item=>item.complain_id !== NewItem.complain_id),NewItem])
          setIn(true)
           
           break ;
        }
        case "Treatments":{
            
          setstate([...data.data.filter(item=>item.treatment_id !== NewItem.treatment_id),NewItem])
          setIn(true)
             
            break ;
         }
         case "Days Worked":{
          
          setstate([...data.data.filter(item=>item.d_work_id !== NewItem.d_work_id),NewItem])
        setIn(true)
           
            break ;
         }
         case "Machine":{
            
          setstate([...data.data.filter(item=>item.machine_id !== NewItem.machine_id),NewItem])
          setIn(true)
           
            break ;
         }
         case "Piece":{

          setstate([...data.data.filter(item=>item.piece_id !== NewItem.piece_id),NewItem])
          setIn(true)
        
            break ;
         }
    }

  }
      
      
    }, [In])
  
      
      
    return (
        <div id="bodyOperation">
            {In?<AjouterPart_2 data={state}/> :<></>}
         
           
         </div>
    )
}

export default TablesOperation
