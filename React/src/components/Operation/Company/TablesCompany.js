import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_All_Company } from "../../../redux/actions/actionCompany";
import { dataIn } from "../../../redux/actions/actionOperation";
import FormTable from "../../SingleComponents/PartForms/FormTable";
import NavOp from "../CadrOperation/NavBarOperations/NavOp";

function TablesCompany() {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.company.company);
  useEffect(() => {
    dispatch(get_All_Company());
    dispatch(dataIn(false));
  }, []);
  const data = useSelector((state) => state.dataOperations.data);
  return (
    <div>
      <NavOp table={data.title} />
      <FormTable data={company} title={data.title} id={data.idTable} />
    </div>
  );
}

export default TablesCompany;
