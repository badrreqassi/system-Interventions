import React, { Component } from 'react'
import { apiCompany } from '../api'

  class ServiceCompany extends Component {
      _GET_All_COMPANY(){
          return apiCompany().get('/')
      }
      _ACCES_FOR_COMPANY(value){
          return apiCompany().get('/accessForCompany/'+value+'/');
      }
      _GET_ONE_COMAPNY(id){
          return apiCompany().get('/'+id)
      }
      _ADD_COMPANY(value){
          return apiCompany().post('/add/',value)
      }
      _PUT_COMPANY(id,body,FK){
        return apiCompany().put('/update/'+id,body)
    }
    _DELETE_COMPANY(id){
        return apiCompany().delete('/delete/'+id)
    }
    
}
export default new ServiceCompany()
