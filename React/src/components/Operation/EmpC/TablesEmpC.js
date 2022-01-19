import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_One_Emp_C } from "../../../redux/actions/actionEmpC";
import FormTable from "../../SingleComponents/PartForms/FormTable";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";

function TablesEmpC() {
  const data = useSelector((state) => state.dataOperations.data);
  const data_empC = useSelector((state) => state.Operation_EmpC.All_empC);
  console.log(data_empC);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_One_Emp_C());
  }, []);
  return (
    <div>
      <NavOp table={data.title} />
      <FormTable data={data_empC} title={data.title} id={data.idTable} />
    </div>
  );
}

export default TablesEmpC;
