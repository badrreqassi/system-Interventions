import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Err_Msg, { Error_NON_DATA_FOUND } from "../../../message/Err_Msg";
import {
  get_Complaits_By_Emp_Company_Complete,
  get_Complaits_By_Emp_Company_Not,
} from "../../../redux/actions/actionComplain";
import methodeNotification from "../methodeNotification";

function NotCompleteCmp() {
  const employees = useSelector((state) => state.employees.employees);
  const complain = useSelector((state) => state.complaints.notComplete_C);
  const paginate = useSelector((state) => state.paginate.paginate);
  console.log("notComp");
  console.log(complain);
  const dispatch = useDispatch();

  return complain.length < 1 ? (
    <Err_Msg
      type={Error_NON_DATA_FOUND}
      text={"You Dont Have Any Intervention ..."}
    />
  ) : (
    methodeNotification.hanldleOneNotification(complain, paginate, false)
  );
}

export default NotCompleteCmp;
