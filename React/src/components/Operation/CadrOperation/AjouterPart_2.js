import React from 'react'
import { useSelector } from 'react-redux'
import FormTable from '../../SingleComponents/PartForms/FormTable'
import NavOp from './NavBarOperations/NavOp'

function AjouterPart_2({data}) {
    const data1 = useSelector(state => state.dataOperations.data)
    console.log(data)
    return (
        <div>
          <NavOp/>
          
         <FormTable 
                 data={data} 
                 title={data1.title} 
                 id={data1.idTable}/> 
        </div>
    )
}

export default AjouterPart_2
