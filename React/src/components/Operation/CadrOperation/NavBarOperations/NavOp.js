import React from 'react'
import { Link } from 'react-router-dom'
 
 
function NavOp({table}) {
 
    return (
        
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <Link to={"/table"+table}  className="nav-link active" > Tables</Link>
            <Link to={"/ajouter"+table} className="nav-link active" > Ajouter</Link>
            
          </div>
        </nav>
       
    )
}

export default NavOp
