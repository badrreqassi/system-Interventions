import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataIn } from "../../redux/actions/actionOperation";

import FormsAccount from "./FormsAccount";
import Plus from "./Plus";

function Account() {
  const user = useSelector((state) => state.employees.employees);

  const typeuser = useSelector((state) => state.employees.typeuser);
  const [heigh, setheigh] = useState("800");
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeuser && user.job == "technicaine") {
      setheigh("1200");
    }
    dispatch(dataIn(false));
  }, []);
  return (
    <div id="bodyAccount">
      <div
        id="cadrAccount"
        className="border border-2 rounded-3  text-center"
        style={{ height: heigh + "px" }}
      >
        <div
          style={{
            color: "#214069",
            marginBottom: "5px",
            marginLeft: "-50px",
            marginTop: "70px",
          }}
        >
          {" "}
          <h1>_________</h1>
          <h2> Le Profile </h2>
        </div>

        <Plus />

        <FormsAccount />
        <span id="picAccount" className="rounded-circle">
          <img
            src="/assets/images/img_avatar4.jpg"
            width="200"
            height="200"
            className="rounded-circle"
          />
        </span>
      </div>
    </div>
  );
}

export default Account;
