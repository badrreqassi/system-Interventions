import React from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'

function Treatment() {
    // params.idComplain 
    const params =useParams()
    const { register,handleSubmit,getValues,setValue} =useForm();  
    const onsubmit=(data)=>{
        console.log(data)
    }
    return (
        <div>
            <form onChange={handleSubmit(onsubmit)}>
            <input className="form-control" id="inputPrfile"  
                    type="text"
                    name="description_Treatment"
                   
                    {...register("description_Treatment", {
                        required: false
                            })}
                    
                    />

            </form>
            
            
        </div>
    )
}

export default Treatment
