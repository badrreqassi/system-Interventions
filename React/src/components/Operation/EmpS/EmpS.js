import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wait from "../../../message/Wait";
import { get_data } from "../../../redux/actions/actionOperation";
import FormsEmpS from "./FormsEmpS";
import { content } from "../Content/ContentEmpC";

function EmpS() {
  const dispatch = useDispatch();
  const data_empS = useSelector((state) => state.empS.all_empS);
  console.log(data_empS);
  useEffect(() => {
    dispatch(
      get_data({
        data: data_empS,
        title: "EmployeeState",
        idTable: "emp",
        content: content,
      })
    );
  }, []);
  return (
    <div id="bodyOperation">
      <Wait table={"EmployeeState"} />
      <FormsEmpS />
    </div>
  );
}

export default EmpS;
