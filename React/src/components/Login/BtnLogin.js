import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/actionLogin";

function BtnLogin({ handleClick }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.employees);
  console.log(user.isAuth);
  const nav = useNavigate();

  const onsubmit = () => {
    dispatch(
      login({
        email: user.user.email,
        password: user.user.password,
        typeuser: user.user.typeuser,
      })
    );

    //  handleClick("error")

    //    window.location.reload();
  };

  return (
    <button
      type="submit"
      className="btn "
      id="cadrLogin-btn"
      onClick={onsubmit}
    >
      Log In
    </button>
  );
}

export default BtnLogin;
