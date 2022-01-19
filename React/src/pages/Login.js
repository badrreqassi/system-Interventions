import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import FormLogin from "../components/Login/FormLogin";
import Err_Msg, { Error_NON_USER_FOUND } from "../message/Err_Msg";
import BtnLogin from "../components/Login/BtnLogin";
import { useDispatch, useSelector } from "react-redux";
import MyApp from "./MyApp";
import { get_All_Emp_S } from "../redux/actions/actionEmpS";
import { get_All_Machines } from "../redux/actions/actionMachine";
import { get_All_Emp_C } from "../redux/actions/actionEmpC";
import { messageService } from "../api/Observable";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const isAuth = useSelector((state) => state.employees.isAuth);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(get_All_Machines());
    dispatch(get_All_Emp_C());
    dispatch(get_All_Emp_S());
  }, []);

  useEffect(() => {
    const subscription = messageService.onMessage().subscribe((message) => {
      if (message) {
        // add message to local state if not empty
        console.log(message);
        setErrorMessage(message.text);
      } else {
        // clear messages when empty message received
        setErrorMessage("");
      }
    });
  }, []);

  return (
    <div>
      <main>
        <div id="cadrLogin" className="border border-2 rounded-3 mx-auto">
          <div>
            <div id="LogoPlace">
              <img src="assets/images/logo01.png" />
            </div>
          </div>

          {isAuth ? (
            <>
              {errorMessage && (
                <div>
                  {" "}
                  <Err_Msg type={Error_NON_USER_FOUND} />{" "}
                </div>
              )}
              <FormLogin />
              <BtnLogin />
            </>
          ) : (
            <MyApp />
          )}
        </div>
      </main>
    </div>
  );
}

export default Login;
