import ServiceDaysWorked from "../../api/Service/ServiceDaysWorked"
import { dataIn } from "./actionOperation"

export const ACCESS_FOR_DAYS_WORKED="ACCESS_FOR_DAYS_WORKED" 
export const GET_ALL_DAYS_WORKED_R="GET_ALL_DAYS_WORKED_R"
export const GET_ONE_DAYS="GET_ONE_DAYS"
export const GET_DATA_FOR_CHART="GET_DATA_FOR_CHART"

 export const access_For_Days_Worked=(value)=>{
    return  async dispatch=>{
            const response = await  ServiceDaysWorked._ACCES_FOR_DAYS_WORKED(value)      
             dispatch({type:ACCESS_FOR_DAYS_WORKED , access :response.data})
    }

}
export const get_All_Days_Worked_R=(id)=>{
    return  async dispatch=>{
            const response = await  ServiceDaysWorked._GET_ALL_DAYS_WORKED_R(id)  
             dispatch({type:GET_ALL_DAYS_WORKED_R , days :response.data})
    }

}

export const get_One_Days_Worked=(id)=>{
    return  async dispatch=>{

        if(id ===undefined){

            dispatch({type:GET_ONE_DAYS })
            dispatch(dataIn(false))
          } else {
            const response = await  ServiceDaysWorked._GET_ONE_ONE_DAYS(id)  
             
             dispatch({type:GET_ONE_DAYS ,  oneDays :response.data   })
             dispatch(dataIn(true))
            }
    }
  
  }

export const get_Data_For_Chart=(id)=>{
  return async dispatch=>{
    if(id ===undefined){
      dispatch({type:GET_DATA_FOR_CHART })
    } else {

      const response=await ServiceDaysWorked._GET_DATA_FOR_CHART(id)
      console.log(response.data)
      dispatch( {type:GET_DATA_FOR_CHART, data:response.data})
    }

  }
}