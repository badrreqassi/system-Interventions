import React, { useEffect, useLayoutEffect, useState } from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function BtnAccess({ op }) {
  const nav = useNavigate();
  const [Click, setClick] = useState("");
  const data_Access = useSelector((state) => state.accessTables.access);
  const [access, setAccess] = useState(false);

  useLayoutEffect(() => {
    console.log(data_Access);
    data_Access.map((data) => {
      if (data.name_Table == Click) {
        setAccess(true);
      }
    });
  }, [Click]);

  useEffect(() => {
    switch (Click) {
      case "Company": {
        access ? nav("/company") : nav("/operations");

        break;
      }
      case "Complaints": {
        access ? nav("/complain") : nav("/operations");

        break;
      }
      case "Treatments": {
        access ? nav("/treatment") : nav("/operations");

        break;
      }
      case "DaysWorked": {
        access ? nav("/daysWorked") : nav("/operations");

        break;
      }
      case "Machine": {
        access ? nav("/machine") : nav("/operations");

        break;
      }
      case "Piece": {
        access ? nav("/piece") : nav("/operations");

        break;
      }
      case "EmployeeCompany": {
        access ? nav("/employeecompany") : nav("/operations");

        break;
      }
      case "EmployeeState": {
        access ? nav("/employeestate") : nav("/operations");

        break;
      }
    }
  }, [access]);
  console.log(op);
  return (
    <button
      className="border-0"
      id="comments"
      onClick={() => {
        setClick(op);
      }}
    >
      <BsChevronDoubleRight color="red" />
    </button>
  );
}

export default BtnAccess;
