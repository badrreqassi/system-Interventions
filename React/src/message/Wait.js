import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Wait({table}) {
  const nav =  useNavigate()
  useEffect(() => {
       setTimeout(() => {
        nav("/table"+table)
       }, 0.5);
  }, [])
    return (
        <div style={{height:"100vh"}}>
          
        </div>
    )
}

export default Wait
