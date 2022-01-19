import React, { useEffect, useState } from "react";
import LastSeen from "../SingleComponents/LastSeen";
import ColorStatus from "../SingleComponents/ColorStatus";
import StartTreatment from "../SingleComponents/StartTreatment";
import { useDispatch, useSelector } from "react-redux";
import { dataIn, get_data } from "../../redux/actions/actionOperation";

import { useNavigate } from "react-router-dom";
import Btn_Modal from "../Operation/CadrOperation/Btn_Modal";
import { getDataFK } from "../../redux/actions/actionLogin";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function OneNotification({ complain, status }) {
  const nav = useNavigate();
  const employees = useSelector((state) => state.employees.employees);

  const In = useSelector((state) => state.dataOperations.dataIn);
  const [color, setcolor] = useState("#8B0000");
  const [show, setshow] = useState(true);
  const [text, settext] = useState("start Treatment");

  const dispatch = useDispatch();

  const handleDate = (id) => {
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate() +
        "T" +
        today.getHours() +
        ":" +
        today.getMinutes();

    dispatch(
      get_data({
        startTreatment: date,
      })
    );
    dispatch(dataIn(true));

    dispatch(getDataFK({ empC: employees.emp, complain_id: id }));

    setcolor("#FF8C00");
    settext("In Progress ... ");
    setshow(false);

    if (complain.status == "done") {
      settext(complain.status);
      setcolor("green");
    }
  };

  useEffect(() => {
    dispatch(dataIn(false));
  }, []);

  return (
    <div id="notifyReadBody" className="rounded-3">
      <div id="icon">
        <span className="rounded-circle">
          <img
            src="/assets/images/img_avatar4.jpg"
            width="50"
            height="50"
            className="rounded-circle"
          />
        </span>{" "}
        <strong> {complain.employeeState}</strong>{" "}
        <span style={{ backgroundColor: "white" }}>
          {" "}
          <LastSeen data={complain.dateComplain} />
        </span>
      </div>
      <FaQuoteLeft />
      <blockquote>
        <p className="text-left fw-bolder fs-5">
          Bonjour ,<strong>{complain.employeeCompany} </strong>
        </p>
        <p className="fw-bolder">
          vous recevez maintenant un type{" "}
          <ColorStatus status={complain.status} />à partir de{" "}
          <kbd className="bg-primary text-white">{complain.employeeState} </kbd>
          qui fait face à un type : " <strong>{complain.typeComplain}</strong> "
          problème dans le machine{" "}
          <kbd className="bg-primary text-white">
            <strong>{complain.machineName}</strong>
          </kbd>{" "}
        </p>
        <p className="fw-bolder">
          {" "}
          Vous devez aller à
          <kbd className="bg-primary text-white">
            le bureau No {complain.officeNumbre}
          </kbd>
          pour découvrir le problème.{" "}
        </p>
        <span>{complain.employeeState} dit :</span>
        <p id="P_desc" className="fw-bolder">
          {complain.descriptionComplain}
        </p>

        <button
          hidden={status}
          disabled={In}
          id="startT"
          style={{ backgroundColor: color }}
          onClick={() => {
            handleDate(complain.complain_id);
          }}
        >
          {" "}
          {text}{" "}
        </button>
        <Btn_Modal hidden={show} />
      </blockquote>
      <FaQuoteRight />
    </div>
  );
}

export default OneNotification;
/*
 <div
      id="notifyReadBody"
      className=" container mt-3 p-3  text-balck rounded"
    >
      <blockquote className="blockquote ">
        <p className="text-left">
          Bonjour ,<strong>{complain.employeeCompany} </strong>
          <mark>
            <LastSeen data={complain.dateComplain} />
          </mark>
        </p>
        <p>
          {" "}
          vous recevez maintenant un type{" "}
          <ColorStatus status={complain.status} />à partir de{" "}
          <kbd className="bg-primary text-white">{complain.employeeState} </kbd>
          qui fait face à un type <strong>{complain.typeComplain}</strong>
          problème dans le machine{" "}
          <kbd className="bg-primary text-white">
            <strong>{complain.machineName}</strong>
          </kbd>{" "}
        </p>
        <p>
          {" "}
          Vous devez aller à
          <kbd className="bg-primary text-white">
            le bureau No {complain.officeNumbre}
          </kbd>
          pour découvrir le problème.{" "}
        </p>
        <span>{complain.employeeState} dit :</span>
        <p id="P_desc" className="bg-success ">
          {complain.descriptionComplain}
        </p>

        <footer className="blockquote-footer">
          {" "}
          From {complain.employeeCompany}{" "}
        </footer>

        <button
          hidden={status}
          disabled={In}
          id="startT"
          style={{ backgroundColor: color }}
          onClick={() => {
            handleDate(complain.complain_id);
          }}
        >
          {" "}
          {text}{" "}
        </button>
        <Btn_Modal hidden={show} />
      </blockquote>
    </div>
 */
