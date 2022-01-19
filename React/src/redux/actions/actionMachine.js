import ServiceMachine from "../../api/Service/ServiceMachine"
import { dataIn } from "./actionOperation"

  export const ACCESS_FOR_MACHINE="ACCESS_FOR_MACHINE"
  export const GET_ALL_MACHINES="GET_ALL_MACHINES"
  export const GET_ONE_MACHINE ="GET_ONE_MACHINE "

 export const access_For_Machine=(value)=>{
    return  async dispatch=>{
            const response = await  ServiceMachine._ACCES_FOR_MACHINE(value)         
             dispatch({type:ACCESS_FOR_MACHINE , access :response.data})
    }

}
export const get_All_Machines=( )=>{
  return  async dispatch=>{
          const response = await  ServiceMachine._GET_ALL_MACHINES()      
           dispatch({type:GET_ALL_MACHINES , machines :response.data})
  }

}

export const get_One_Machine=(id)=>{
  return  async dispatch=>{
    if(id ===undefined){

      dispatch({type:GET_ONE_MACHINE})
      dispatch(dataIn(false))
    } else
    {
          const response = await  ServiceMachine._GET_ONE_MACHINE(id)
           dispatch({type:GET_ONE_MACHINE ,  oneMachine:response.data })
            dispatch(dataIn(true))
          }
  }

}