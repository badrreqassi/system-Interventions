import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Add, Update } from '../../../redux/actions/actionOperation';
 
function BtnOperation({action,addfor,id}) {
    const nav =useNavigate();
    const dispatch = useDispatch()
    const body = useSelector(state => state.employees.data)
    const FK = useSelector(state => state.employees.dataFK)
   

    const hanldeSave=()=>{
        switch (addfor) {
            case "Company":{
                if(action=="add"){
                   dispatch(Add(addfor,{ body:body ,FK:FK}))
                   nav("/Break")
                }
                else if(action=="update"){
                    dispatch(Update(addfor,{ id:id,body:body ,FK:FK}))
                }
                   
                break;
            }
            case "Complaints":{
                if(action=="add"){
                   dispatch(Add(addfor,{ body:body ,FK:FK}))
                }
                else if(action=="update"){
                    dispatch(Update(addfor,{ id:id,body:body ,FK:FK}))
                }

                break;
            }
            case "DaysWorked":{
                if(action=="add"){
                   dispatch(Add(addfor,{ body:body ,FK:FK}))
                }
                else if(action=="update"){
                    dispatch(Update(addfor,{ id:id,body:body ,FK:FK}))
                }

                break;
            }
            case "Treatments":{
                if(action=="add"){
                   dispatch(Add(addfor,{ body:body ,FK:FK}))
                }
                else if(action=="update"){
                    dispatch(Update(addfor,{ id:id,body:body ,FK:FK}))
                }

                break;
            }
            case "Machine":{
                if(action=="add"){
                   dispatch(Add(addfor,{ body:body ,FK:FK}))
                }
                else if(action=="update"){
                    dispatch(Update(addfor,{ id:id,body:body ,FK:FK}))
                }

                break;
            }
            case "Piece":{
                if(action=="add"){
                   dispatch(Add(addfor,{ body:body ,FK:FK}))
                }
                else if(action=="update"){
                   
                   dispatch(Update(addfor,{ id:id,body:body ,FK:FK}))
                }

                break;
            }
                
              
        
           
        }
   
    }
   const hanldeCancle=()=>{
  
       nav("/tables")
   }
    return (
        <div id="cadrBtn" className="text center">
        <button type="submit" id="saveOp"onClick={hanldeSave} className="btn btn-primary px-5">  Save  </button>
        <button type="reset" id="cancleOp"onClick={hanldeCancle} className="btn btn-danger px-5">  Cancel  </button>
        </div>
    )
}

export default BtnOperation
