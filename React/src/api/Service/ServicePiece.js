import React, { Component } from 'react'
import { apiPiece } from '../api';

 class ServicePiece extends Component {

   
    _GET_ALL_PIECE_R(){
        return apiPiece().get('/R');
    }
    _GET_ONE_PIECE(id){
        return apiPiece().get('/'+id)
    }
    _ADD_PIECE(body,FK){
        return apiPiece().post('/add/'+FK.machine_id,body)
    }
    _PUT_PIECE(id,body,FK){
        return apiPiece().put('/update/'+id+'/'+FK.machine_id,body)
    }
    _DELETE_PIECE(id){
        return apiPiece().delete('/delete/'+id)
    }
   
}
export default new ServicePiece()
