import React from 'react'
import {BsChevronDoubleRight }from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
function StartTreatment({idComplain,dateStart}) {
    console.log(dateStart)
    const nav =useNavigate();

    return (
        <button id="startT"  onClick={()=>{console.log("click")}}>  start Treatment  </button>
    )
}

export default StartTreatment


// onClick={()=>{nav("/treatment/"+idComplain)}} 
