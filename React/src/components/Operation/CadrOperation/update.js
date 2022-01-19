import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { get_One_Company } from '../../../redux/actions/actionCompany'
import { get_One_Complain } from '../../../redux/actions/actionComplain'
import { get_One_Days_Worked } from '../../../redux/actions/actionDaysWorked'

import {get_One_Treatment} from '../../../redux/actions/actionsTreatments'
import {get_One_Piece} from '../../../redux/actions/actionPiece'
import NavOp from './NavBarOperations/NavOp'
import UpdatePart_2 from './UpdatePart_2'
import { get_One_Machine } from '../../../redux/actions/actionMachine'

function Update() {
     const params =useParams()
     const data = useSelector(state => state.dataOperations.data)
     const dataIn =useSelector(state => state.dataOperations.dataIn)
   console.log(data)
   
     console.log(params.id)
     
     const dispatch = useDispatch()
     const  content  = data.content

     useLayoutEffect(() => {
      dispatch(get_One_Company())
      dispatch(get_One_Complain())
      dispatch(get_One_Treatment())
      dispatch(get_One_Days_Worked())
      dispatch(get_One_Machine())
      dispatch(get_One_Piece())  
      
     }, [])
 
     
     useEffect(() => {
 
       
      
        switch (data.title) {
            case "Company":{
              
               dispatch(get_One_Company(params.id))

              break ;
            }
             case "Complaints":{
                
                dispatch(get_One_Complain(params.id))
               
               break ;
            }
            case "Treatments":{
                
                dispatch(get_One_Treatment(params.id))
                 
                break ;
             }
             case "DaysWorked":{
              
                dispatch(get_One_Days_Worked(params.id))
               
                break ;
             }
             case "Machine":{
                
                dispatch(get_One_Machine(params.id))
               
                break ;
             }
             case "Piece":{
               
                dispatch(get_One_Piece(params.id))
            
                break ;
             }
        }
           
     }, [ ])
     
       
    return (
        <div id="bodyOperation">
            <NavOp/>
           {params.id==0 ? <h1> you should Back for Tables to choose   etement that want to update</h1> :
              dataIn?<UpdatePart_2 title={data.title}/> : <> HII </>   
        }
        </div>
    )
}

export default Update
