import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import UpdatePart_3 from './UpdatePart_3'
/*
 
          */
function UpdatePart_2({title}) {
    const oneCompany=useSelector(state => state.company.oneCompany)
    const oneComplain = useSelector(state =>state.complaints.oneComplain )
    const oneTreatment = useSelector(state =>state.treatments.oneTreatment  )
    const oneDays = useSelector(state =>state.days_worked.oneDays  )
    const oneMachine = useSelector(state =>state.machine.oneMachine  )
    const onePiece = useSelector(state =>state.piece.onePiece  )
    
    const data = useSelector(state => state.dataOperations.data)

    const [status, setStatus] = useState(false)
    const [dataWillChange, setdataWillChange] = useState([])
    
   
    const handleSwitch=()=>{
        switch (title) {
            case "Company":{
             
              setdataWillChange(oneCompany) 
              
         
              break ;
            } case "Complaints":{
                 
                setdataWillChange(oneComplain)
               break ;
            }
            case "Treatments":{
               
                setdataWillChange(oneTreatment)
                break ;
             }
             case "DaysWorked":{
                 
                setdataWillChange(oneDays)
                break ;
             }
             case "Machine":{
              
                setdataWillChange(oneMachine)
                break ;
             }
             case "Piece":{
              
                setdataWillChange(onePiece)
               
                break ;
             }
        }
    }
    
    useEffect(() => {
       handleSwitch()

        setTimeout(() => {setStatus(true); }, 500);
    }, [])

     

    return (
        <div>
           
       {status? <UpdatePart_3 dataWillChange={dataWillChange}/> :<span  className="text-center font-italic  ">  Please wait ... </span> }
         
       

          
            
        </div>
    )
}

export default UpdatePart_2
