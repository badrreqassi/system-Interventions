import React from "react";
import { useSelector } from "react-redux";
import FormTable from "../../SingleComponents/PartForms/FormTable";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";

function TablesDaysWorked() {
  const data = useSelector((state) => state.dataOperations.data);
  const days = useSelector((state) => state.days_worked.days);
  return (
    <div>
      <NavOp table={data.title} />
      <FormTable data={days} title={data.title} id={data.idTable} />
    </div>
  );
}

export default TablesDaysWorked;
