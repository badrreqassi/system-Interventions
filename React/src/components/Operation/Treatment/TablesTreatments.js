import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_Complaits_By_Emp_Company } from "../../../redux/actions/actionComplain";
import FormTable from "../../SingleComponents/PartForms/FormTable";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";

function TablesTreatments() {
  const data = useSelector((state) => state.dataOperations.data);
  const treatment = useSelector((state) => state.treatments.treatments_R);
  return (
    <div>
      <NavOp table={"Treatments"} />
      <FormTable data={treatment} title={data.title} id={data.idTable} />
    </div>
  );
}

export default TablesTreatments;
