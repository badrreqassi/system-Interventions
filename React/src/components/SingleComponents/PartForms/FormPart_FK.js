import React  from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getDataFK } from '../../../redux/actions/actionLogin';

function FormPart_FK({data}) {
    const { register,handleSubmit,getValues} =useForm();  
    const dispatch = useDispatch()
    

    const onsubmit= data =>{ 
         dispatch(getDataFK(getValues()))
        console.log("form2")
        console.log(getValues())
      
        }
    return (
        <form onChange={handleSubmit(onsubmit)} >
        <fieldset id="buttomPart" >
         
        {
            data.map((input,key)=>{
                return(
                    <div  key={key} >
                    <label id="labelPrfile"> 
                        <strong>
                            {input.label}
                        </strong>
                    </label>
                    <input className="form-control" id="inputPrfile"  
                    type={input.type}
                    name={input.name}
                   
                    {...register(input.name, {
                        required: false
                            })}
                    
                    />
        
                   </div>
                   );

            })
        }


           </fieldset>
        </form>
    )
}

export default FormPart_FK
/*

data.FK.map((input,key)=>{
                return(
                    <div  key={key} >
                    <label id="labelPrfile"> 
                        <strong>
                            {input.label}
                        </strong>
                    </label>
                    <input className="form-control" id="inputPrfile"  
                    type={input.type}
                    name={input.name}
                   
                    {...register(input.name, {
                        required: false
                            })}
                    
                    />
        
                   </div>
                   );

            })
*/