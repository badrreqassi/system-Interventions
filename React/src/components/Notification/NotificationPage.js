import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  get_Complaits_By_Emp_Company,
  get_Complaits_By_Emp_Company_Not,
  get_Complaits_By_Emp_Company_Complete,
} from "../../redux/actions/actionComplain";
import { dataIn } from "../../redux/actions/actionOperation";

function NotificationPage() {
  const employees = useSelector((state) => state.employees.employees);

  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    dispatch(get_Complaits_By_Emp_Company(employees.cin));
    dispatch(get_Complaits_By_Emp_Company_Complete(employees.cin));
    dispatch(get_Complaits_By_Emp_Company_Not(employees.cin));
  }, []);

  return (
    <div id="cadrNotification">
      <div id="headrNotification">
        <div id="statusNotification" className="dropdown">
          <button
            type="button"
            className="btn  dropdown-toggle"
            data-toggle="dropdown"
          >
            Notifications status
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link to="/notifications" className="dropdown-item active">
                {" "}
                All{" "}
              </Link>{" "}
            </li>
            <li>
              <Link to="/notifications/New" className="dropdown-item ">
                {" "}
                New{" "}
              </Link>
            </li>
            <li>
              <Link to="/notifications/Old" className="dropdown-item  ">
                {" "}
                Complete{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default NotificationPage;
/*
 
                        
*/
