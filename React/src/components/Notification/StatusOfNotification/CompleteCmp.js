import { useSelector } from 'react-redux'
import Err_Msg, { Error_NON_DATA_FOUND } from '../../../message/Err_Msg'
import methodeNotification from '../methodeNotification'
 


function CompleteCmp() {
    const complain = useSelector(state => state.complaints.complete_C)
    const paginate = useSelector(state => state.paginate.paginate)
    console.log(complain)
  
     
console.log("Im In complete")
    return (
        complain.length<1 ?  <Err_Msg type={Error_NON_DATA_FOUND} text={"You Dont Have Any Intervention ..."}/>  : methodeNotification.hanldleOneNotification(complain,paginate,true) 
    )
}

export default CompleteCmp
