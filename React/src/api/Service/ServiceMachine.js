import  { Component } from 'react'
import { apiMachine } from '../api';

class ServiceMachine extends Component {

    _ACCES_FOR_MACHINE(value){
        return apiMachine().get('/access/'+value+'/');
    }
    _GET_ALL_MACHINES(){
        return apiMachine().get('/');
    }
    _GET_ONE_MACHINE(id){
        return apiMachine().get('/'+id)
    }
    _ADD_MACHINE(body){
        return apiMachine().post('/add',body)
    }
    _PUT_MACHINE(id,body){
        return apiMachine().put('/update/'+id,body)
    }
    _DELETE_MACHINE(id,body){
        return apiMachine().delete('/delete/'+id)
    }
    
}
export default  new ServiceMachine() 
