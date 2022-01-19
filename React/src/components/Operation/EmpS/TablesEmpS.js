import React from "react";
import { useSelector } from "react-redux";
import FormTable from "../../SingleComponents/PartForms/FormTable";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";

function TablesEmpS() {
  const data = useSelector((state) => state.dataOperations.data);
  const data_empS = useSelector((state) => state.empS.all_empS);

  return (
    <div>
      <NavOp table={data.title} />
      <FormTable data={data_empS} title={data.title} id={data.idTable} />
    </div>
  );
}

export default TablesEmpS;
