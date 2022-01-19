export const  GET_PAGINATE_INFO='GET_PAGINATE_INFO'

export const get_paginate_info =(pgn)=>{
    return async dispatch =>{
        try {
            dispatch({type:GET_PAGINATE_INFO,payload:{paginate:pgn,loading:false}})

        } catch (error) {
            console.log(error)
            dispatch({type:GET_PAGINATE_INFO,payload:{paginate:pgn,loading:true}})
        }
    }
}