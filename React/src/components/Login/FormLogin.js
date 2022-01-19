import { useForm } from "react-hook-form"
import content from "./content"
import React from 'react'
import { useDispatch} from "react-redux";
import { getUser} from "../../redux/actions/actionLogin";



function FormLogin() {
    const { register,handleSubmit,getValues} =useForm();
    const dispatch = useDispatch()

    const handleEmail=(email)=>{

        let mail =email.split("@") ;
        if(mail[1]=="ministry.com"){
          return false;
          }
         return true
     }

    const onsubmit=data=>{
          if(data !== null){
             dispatch(getUser
              ({
              email:getValues("email"),
              password:getValues("password"),
              typeuser:handleEmail(getValues("email"))
             }))
          }
    
}

    return (
       
                  <form onChange={handleSubmit(onsubmit)}>
                     
                                        
                  { content.inputs.map((input,key)=>{
                                             return( 
                                <div key={key}>
                                <div className="mb-3 mt-3">
                                
                                        <label  className="form-label "  id="cadrLogin-label"
                                            >
                                             <strong>
                                             {input.label}
                                              </strong>
                                              </label>

                                        <input type={input.type} className="form-control col-xs-3"
                                             name={input.name}
                                             id="cadrLogin-input"
                                             placeholder={input.Placeholder}
                                             {...register(input.name, {
                                                                    required: true
                                                  })}
                                         />
                                          </div>
                                 </div>)
                     })}

                  
                    
                  </form>
                )
}

export default FormLogin

 