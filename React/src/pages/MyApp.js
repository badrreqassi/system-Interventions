import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../components/Navbar/Nav";
import Header from "../components/SingleComponents/Header";
import Login from "./Login";
import RouterProtected from "../Router/RouterProtected";
import Footer from "../components/SingleComponents/Footer";

import { useNavigate } from "react-router-dom";

function MyApp() {
  const isAuth = useSelector((state) => state.employees);

  const dispatch = useDispatch();
  const nav = useNavigate();

  console.log(isAuth);
  useEffect(() => {}, []);

  return (
    <div>
      {isAuth.isAuth ? (
        <Login />
      ) : (
        <div className="myApp">
          <Nav />
          <RouterProtected />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default MyApp;
/**
 
 isAuth ? <Login/> : <div className="myApp" >
            

            
               <Header/>
                <Nav/>
                <Outlet/>
               // <RouterProtected/>
               <Footer/>
      
         </div>

          {  isAuth ? nav("/login") : <button onClick={Handlelogout}>
                    out
          </button>    }



 */
