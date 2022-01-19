import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_One_Complain } from "../../../redux/actions/actionComplain";
import FormTable from "../../SingleComponents/PartForms/FormTable";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";

function TablesComplaints() {
  const data = useSelector((state) => state.dataOperations.data);
  const complain = useSelector((state) => state.complaints.complainAssistant);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_One_Complain());
  }, []);
  return (
    <div>
      <NavOp table={data.title} />
      <FormTable data={complain} title={data.title} id={data.idTable} />
    </div>
  );
}

export default TablesComplaints;
