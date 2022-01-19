import React, { useEffect, useState } from "react";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormInputs from "../../SingleComponents/PartForms/inputs/FormInputs";
import { content } from "../../Operation/Content/ContentEmpC";
import { getData, update } from "../../../redux/actions/actionLogin";
import ReactJsAlert from "reactjs-alert";

function UpdateEmp() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const body = useSelector((state) => state.employees.data);
  const dataIn = useSelector((state) => state.dataOperations.dataIn);
  const employees = useSelector((state) => state.employees);
  const [showMessage, setshowMessage] = useState(true);

  const [inputs, setInputs] = useState({});

  console.log(employees);

  useEffect(() => {
    if (showMessage == false) {
      nav("/account");
    }
    dispatch(getData({ user: inputs }));
  }, [inputs, dataIn, showMessage]);

  const handleAjouter = () => {
    if (employees.typeuser) {
      dispatch(
        update(
          employees.employees.emp,
          body.user,
          employees.employees.company,
          employees.typeuser
        )
      );
    } else {
      dispatch(
        update(employees.employees.emp, body.user, {}, employees.typeuser)
      );
    }
    //nav("/account");

    console.log(body);
  };

  const handleInput = (data) => {
    setInputs(data);
  };
  const handleCancle = () => {
    nav(-1);
  };

  return (
    <div id="bodyAccount">
      <div
        id="cadrAccount"
        className="border border-2 rounded-3 mx-auto text-center"
        style={{ height: "950px" }}
      >
        {dataIn ? (
          <ReactJsAlert
            type={"success"}
            status={showMessage}
            title={"Modifier"}
            Close={() => {
              setshowMessage(false);
            }}
          />
        ) : (
          <div style={{ marginLeft: "20%", marginRight: "20%" }}>
            <br />
            <FormInputs
              putOn={employees.employees}
              data={content.inputs}
              handledata={handleInput}
            />
            <br />

            <br />
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginLeft: "10%", width: "20%" }}
              onClick={handleAjouter}
            >
              Modifier
            </button>
            <button
              type="button"
              className="btn btn-danger"
              style={{ marginLeft: "10%", width: "20%" }}
              onClick={handleCancle}
            >
              Annuler
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpdateEmp;
