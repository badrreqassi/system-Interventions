import React from 'react'
import { useParams } from 'react-router-dom'

function PageNotFound() {
    const params=useParams();
    return (
        <div>
            <h2>{params.pageName} page not Found</h2>
        </div>
    )
}

export default PageNotFound
