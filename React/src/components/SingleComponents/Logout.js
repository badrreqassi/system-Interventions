import  { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/actions/actionLogin'

function Logout() {
   
    return  (<>
    <h1>Log Out</h1>
    </>);
}

export default Logout
