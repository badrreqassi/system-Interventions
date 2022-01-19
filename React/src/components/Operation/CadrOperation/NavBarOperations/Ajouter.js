import React from 'react'
import NavOp from './NavOp'

import FromsParts from '../../../SingleComponents/PartForms/FromsParts'
import { useSelector } from 'react-redux'
import FormPart_FK from '../../../SingleComponents/PartForms/FormPart_FK'
import { useNavigate } from 'react-router-dom'
import BtnOperation from '../BtnOperation'
function Ajouter() {
    const data = useSelector(state => state.dataOperations.data)
    const nav =useNavigate();
    const  content  = data.content
    
    return (
        <div id="bodyOperation">
            
              <NavOp/>
        <div id="cadrAdd" className="border border-2 rounded-3 mx-auto"  style={{height:"650px"}}> 
              <FromsParts 
        data={content.inputs}
        puts={false}
        place={[3,14]}
         />
         
        
        
        <FormPart_FK 
        data={content.FK}
       
       />
            <BtnOperation action={"add"} addfor={data.title}/>
        </div>
      
        </div>
    )
}

export default Ajouter
