import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wait from "../../../message/Wait";
import { get_data } from "../../../redux/actions/actionOperation";
import LayoutOP from "../CadrOperation/NavBarOperations/LayoutOP";
import { content } from "../Content/ContentCompany";
import FormsCompany from "./FormsCompany";

function Company() {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.company.company);

  console.log(company);

  useEffect(() => {
    dispatch(
      get_data({
        data: company,
        title: "Company",
        idTable: "numCompany",
        content: content,
      })
    );
  }, []);
  return (
    <>
      <Wait table={"Company"} />
      <FormsCompany />
    </>
  );
}

export default Company;
