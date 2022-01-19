import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wait from "../../../message/Wait";
import { get_data } from "../../../redux/actions/actionOperation";
import LayoutOP from "../CadrOperation/NavBarOperations/LayoutOP";
import { content } from "../Content/ContentTreatment";
import FormsTreatment from "./FormsTreatment";

function Treatments() {
  const treatment = useSelector((state) => state.treatments.treatments_R);
  console.log(treatment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      get_data({
        data: treatment,
        title: "Treatments",
        idTable: "treatment_id",
        content: content,
      })
    );
  }, []);
  return (
    <div id="bodyOperation">
      <Wait table={"Treatments"} />
      <FormsTreatment />
    </div>
  );
}

export default Treatments;
