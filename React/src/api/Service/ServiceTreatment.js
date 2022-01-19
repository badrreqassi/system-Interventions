import   { Component } from 'react'
import { apiTreatment } from '../api'

 class ServiceTreatment extends Component {
    _GET_All_INTERVENTION(){
        return apiTreatment().get('/Intervention')
    }
    _GET_All_TREATMENTS_R(id){
        return apiTreatment().get('/R/'+id)
    }
    _ACCES_FOR_TREATMENT(value){
        return apiTreatment().get('/access/'+value+'/');
    }
    _GET_ONE_TREATMENT(id){
        return apiTreatment().get('/'+id)
    }
    _ADD_TREATMENT(body,FK){
        return apiTreatment().post('/add/'+FK.empC+'/'+FK.complain_id,body)
    }
    _PUT_TREATMENT(id,body,FK){
        return apiTreatment().put('/update/'+id+'/'+FK.empC+'/'+FK.complain_id,body)
    }
    _DELETE_TREATMENT(id){
        return apiTreatment().delete('/delete/'+id)
    }
}
export default new  ServiceTreatment()
