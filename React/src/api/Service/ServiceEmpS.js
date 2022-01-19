import { Component } from "react";
import { apiStateEmp } from "../api";

class ServiceEmpS extends Component {
  _GET_LOGIN(user) {
    return apiStateEmp().get(
      "/Email/" + user.email + "/password/" + user.password
    );
  }
  _GET_ONE_EMP_S(id) {
    return apiStateEmp().get("/" + id);
  }
  _GET_ALL_EMP_S() {
    return apiStateEmp().get("/");
  }

  _PUT_EMP_S(id, body) {
    console.log(body);
    return apiStateEmp().put("/update/" + id, body);
  }

  _POST_EMP_S(body) {
    console.log(body);
    return apiStateEmp().post("/add/", body);
  }

  _DELETE_EMP_S(id) {
    return apiStateEmp().delete("/delete/" + id);
  }
}

export default new ServiceEmpS();
