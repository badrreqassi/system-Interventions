import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import FormPart_FK from '../../SingleComponents/PartForms/FormPart_FK'
import FromsParts from '../../SingleComponents/PartForms/FromsParts'
import BtnOperation from './BtnOperation'


function UpdatePart_3({dataWillChange}) {
    const params =useParams()
    const data = useSelector(state => state.dataOperations.data)
    const  content  = data.content;
    
    return (
     <div id="cadrAdd" className="border border-2 rounded-3 mx-auto"  style={{height:"650px"}}> 
    <FromsParts 
      data={content.inputs}
      puts={true}
      putsDataFrom={dataWillChange}
      place={[3,15]}
       />
       
 
       <FormPart_FK 
   data={content.FK}

       />  
     
     
    <BtnOperation action={"update"} addfor={data.title} id={params.id} />
        </div>) ;
}

export default UpdatePart_3
