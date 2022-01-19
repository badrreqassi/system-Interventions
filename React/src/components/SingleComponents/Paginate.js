import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { get_paginate_info } from '../../redux/actions/actionPaginate'


function Paginate({complain}) {
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);
    const notificatinPerPage=6
    const pagesVisited = pageNumber * notificatinPerPage
    const onChange=({selected})=>{setPageNumber(selected) ;} ;
    const countPage=Math.ceil(complain.length/notificatinPerPage);

    const infoPaginate=()=>{
      
          dispatch(get_paginate_info(
              {
                notificatinPerPage:notificatinPerPage,
                pagesVisited:pagesVisited 
 
              }
          ))
    }
    useEffect(() => {
        infoPaginate()
        console.log(pagesVisited)
    }, [pageNumber])
    return (
        <div  className=" container mt-3 p-3 "> <ReactPaginate 
           breakLabel="..."
           previousLabel="Previous"
           nextLabel="Next"
           renderOnZeroPageCount={null}
            pageRangeDisplayed={5}

            pageCount={countPage}
            onPageChange={onChange}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"} 
            
            />
          
        </div>
    )
}

export default Paginate
