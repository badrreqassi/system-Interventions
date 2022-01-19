import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wait from "../../../message/Wait";
import { get_Tables_Name } from "../../../redux/actions/actionAccessTables";
import { get_data } from "../../../redux/actions/actionOperation";
import { content } from "../Content/ContentEmpC";
import FormsEmpC from "./FormsEmpC";

function EmpC() {
  const dispatch = useDispatch();
  const data_empC = useSelector((state) => state.Operation_EmpC.All_empC);
  const employees = useSelector((state) => state.employees.employees);
  useEffect(() => {
    dispatch(
      get_data({
        data: data_empC,
        title: "EmployeeCompany",
        idTable: "emp",
        content: content,
      })
    );
  }, []);
  return (
    <div id="bodyOperation">
      <Wait table={"EmployeeCompany"} />
      <FormsEmpC />
    </div>
  );
}

export default EmpC;
