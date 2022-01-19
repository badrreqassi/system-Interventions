import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch} from 'react-redux';
import { getData } from '../../../redux/actions/actionLogin';
 

function FromsParts({  data,place ,puts,putsDataFrom}) {
    const dispatch = useDispatch()
    const { register,handleSubmit,getValues,setValue} =useForm();  


    useEffect(() => {
        if(puts){
               
              
               
             
            
                  
                
                
                  Object.keys(putsDataFrom).map((key,i)=>{
                    setValue(key,putsDataFrom[key])
                   
                   
                    
                  })
 
               

                 
 
           
            
                
       
       
        }
         
    }, [])

    
    const onsubmit= data =>{ 
 dispatch(getData({ user :getValues()}))
 console.log("form1")
 console.log(getValues())
    

    }
   
        
    
   
    return (
        <>
        <form onChange={handleSubmit(onsubmit)}>
            <div id="leftPart" >
            {data.slice(0,place[0]).map((input,key)=>{
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

            })}
            

          

            </div>
            <div id="rightPart" >
            {data.slice(place[0],place[1]).map((input,key)=>{
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

            })}
             </div>
            </form>
          
            </>
    )
}

export default FromsParts
