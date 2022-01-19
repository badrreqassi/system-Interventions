import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/actionLogin";
import { VscAccount } from "react-icons/vsc";
import { GrLogout } from "react-icons/gr";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ProfileInTheBar({ FullName }) {
  const user = useSelector((state) => state.employees);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const Handlelogout = () => {
    dispatch(logout());
    nav("/");
    window.location.reload();
  };
  return (
    <li className="nav-item dropdown nav-link" style={{ color: "#214069" }}>
      <a data-toggle="dropdown" className="dropdown-toggle">
        <BsFillPersonLinesFill />
        {FullName}
      </a>
      <div className="dropdown-menu">
        <Link
          to="/account"
          className="dropdown-item  ml-auto text-uppercase f1"
        >
          {" "}
          <VscAccount /> Account{" "}
        </Link>
        <button
          onClick={Handlelogout}
          className="dropdown-item  ml-auto text-uppercase f1"
        >
          {" "}
          <GrLogout /> Logout{" "}
        </button>
      </div>
    </li>
  );
}

export default ProfileInTheBar;
