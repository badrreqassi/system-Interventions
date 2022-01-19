import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileInTheBar from "../SingleComponents/ProfileInTheBar";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { useSelector } from "react-redux";
import { BsPlusLg } from "react-icons/bs";

function Nav() {
  const employees = useSelector((state) => state.employees);
  const complain = useSelector((state) => state.complaints.notComplete_C);
  const [NumberNotify, setNumberNotify] = useState(0);
  const [FullName, setFullName] = useState("");
  const [hiddenNotify, setHiddenNotify] = useState(false);
  const [hiddenLink, setHiddenLink] = useState(false);

  console.log(employees);

  useEffect(() => {
    if (complain) {
      setNumberNotify(complain.length);
    }
    if (employees.employees) {
      setFullName(
        "  " +
          employees.employees.firstName +
          " " +
          employees.employees.lastName
      );
    }
    if (employees.typeuser == false) {
      setHiddenLink(true);
      setHiddenNotify(true);
    }
    if (employees.typeuser == true) {
      if (employees.employees.job == "technicaine") {
        setHiddenLink(true);
      } else {
        setHiddenNotify(true);
        setHiddenLink(false);
      }
    }
  }, [complain, employees.employees]);

  return (
    <nav
      id="nav"
      className="navbar navbar-light navbar-expand-sm  sticky-top  "
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="assets/images/Royaume-du-maroc-Kingdom-of-morocco-Vector-Logo.png"
            alt="Logo"
            style={{ width: "55px" }}
          />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link " style={{ color: "#214069" }} to="/">
              <span>
                <AiFillHome /> Home
              </span>
            </Link>
          </li>
          <li className="nav-item" hidden={hiddenNotify}>
            <Link
              className="nav-link "
              style={{ color: "#214069" }}
              to="/notifications/New"
            >
              <IoMdNotifications /> Notification
              <span className="badge badge-danger">{NumberNotify}</span>
            </Link>
          </li>

          <li
            className="nav-item dropdown nav-link "
            style={{ color: "#214069" }}
          >
            <a data-toggle="dropdown" className="dropdown-toggle">
              <MdMiscellaneousServices /> Operation
            </a>
            <div className="dropdown-menu">
              <Link className="nav-link text-Black" to="/operations">
                <MdMiscellaneousServices /> Operations
              </Link>
              <Link
                className="nav-link text-Black"
                to="/AjouterSouleComplain"
                hidden={hiddenLink}
              >
                <BsPlusLg /> Add complaints
              </Link>
            </div>
          </li>

          <ProfileInTheBar FullName={FullName} />
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
/*
<li className="nav-item">
            <Link className="nav-link text-white" to="/operations">
              <MdMiscellaneousServices /> Operation
            </Link>
 */
