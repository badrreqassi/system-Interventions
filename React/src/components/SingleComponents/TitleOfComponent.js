import React from 'react'
import { Link } from 'react-router-dom';

function TitleOfComponent({name}) {
    let path="/"+name   ;
    return (
        
          
        <Link  id="section" className="text-decoration-none" to={path} >     <div  className="text-center">
                   <strong> 
                       <h1>______</h1>
                       <h2> {name}</h2>   
                  </strong>
               </div> </Link>
               
         
    )
}

export default TitleOfComponent
