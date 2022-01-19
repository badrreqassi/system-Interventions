import  { Component } from 'react'
import Paginate from '../SingleComponents/Paginate';
import OneNotification from './OneNotification';

 class methodeNotification extends Component {
    
    
    hanldleOneNotification(complain,paginate,status){
         
        return(
            
            <div id="notification">
                 {complain.slice(paginate.pagesVisited,paginate.pagesVisited+paginate.notificatinPerPage).map((complain)=>{
                return ( <OneNotification  key={complain.complain_id} complain={complain} status={status}/> );})} 

                   <Paginate complain={complain}/>
                </div>
        );
    }

    
   
}
export default new methodeNotification()
