import React from 'react'


function ColorStatus({status}) {
    return (
         status == "Emergence"?
        <kbd  className="bg-danger text-white" > 
             {status}  intervention 
        </kbd> :<kbd  className="bg-warning text-white" > 
             {status}  intervention 
        </kbd>
    )
}

export default ColorStatus
