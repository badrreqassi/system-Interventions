   
   import React from 'react'
   import logo  from '../components/SingleComponents/gif/gif1.gif'

   export const Error_NON_DATA_FOUND="NON_DATA_FOUND";
   export const  Error_NON_USER_FOUND="NON_USER_FOUND"



   function Err_Msg({type,text}) {
        
        const HandleErr_Login =  
        <div className="alert alert-danger" >
      password  or email is incorrect  please try Again 
      </div>
                
            
        
        const HandleErr_No_data_found=
            
                <div className="text-center">
                  <div >   <img src={logo} alt="loading..." /> </div>
                         <h3 className="text-danger font-monospace  ">  {text}</h3>
                </div>
        
       return   type===Error_NON_DATA_FOUND ?  HandleErr_No_data_found : HandleErr_Login
   }
   
   export default Err_Msg
   
