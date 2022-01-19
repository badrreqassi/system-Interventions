import React from "react";
import { useSelector } from "react-redux";
import FormTable from "../../SingleComponents/PartForms/FormTable";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";

function TablesMachine() {
  const data = useSelector((state) => state.dataOperations.data);
  const machines = useSelector((state) => state.machine.machines);

  console.log(machines);
  return (
    <div>
      <NavOp table={data.title} />
      <FormTable data={machines} title={data.title} id={data.idTable} />
    </div>
  );
}

export default TablesMachine;
