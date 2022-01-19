import { Component } from 'react'
import { apiDaysWorked } from '../api';

  class ServiceDaysWorked extends Component {

     
    _GET_ALL_DAYS_WORKED_R(id){
      return apiDaysWorked().get('/employeeCompany/R/'+id);
     }
    _GET_ONE_ONE_DAYS(id){
    return apiDaysWorked().get('/'+id)
     }
   _ADD_DAYS(body,FK){
  return apiDaysWorked().post('/add/'+FK.empC,body)
    }

    _PUT_DAYS(id,body,FK){
      return apiDaysWorked().put('/update/'+id+'/'+FK.empC,body)
        }

   _DELETE_DAYS(id){
        return apiDaysWorked().delete('/delete/'+id)
       }
   _GET_DATA_FOR_CHART(id){
    return apiDaysWorked().get('/companyEmployee/'+id)
   }
     
}
export default new ServiceDaysWorked()