import React from "react";
import { useSelector } from "react-redux";
import FormTable from "../../SingleComponents/PartForms/FormTable";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";

function TablesPiece() {
  const data = useSelector((state) => state.dataOperations.data);

  const pieces = useSelector((state) => state.piece.pieces);
  return (
    <div>
      <NavOp table={data.title} />
      <FormTable data={pieces} title={data.title} id={data.idTable} />
    </div>
  );
}

export default TablesPiece;
