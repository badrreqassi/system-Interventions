import { Component } from "react";
import { apiCompanyEmp } from "../api";

class ServiceEmpC extends Component {
  _GET_LOGIN(user) {
    return apiCompanyEmp().get(
      "/Email/" + user.email + "/password/" + user.password
    );
  }
  _PUT_EMP_C(id, body, FK) {
    console.log(FK);
    return apiCompanyEmp().put(
      "/update/" + id + "/company/" + FK.numCompany,
      body
    );
  }
  _POST_EMP_C(body, FK) {
    console.log(FK.company);
    console.log(body);
    return apiCompanyEmp().post("/add/" + FK.company, body);
  }
  _DELETE_EMP_C(id) {
    return apiCompanyEmp().delete("/delete/" + id);
  }
  _GET_ONE_EMP_C(id) {
    return apiCompanyEmp().get("/" + id);
  }
  _GET_ALL_EMP_C() {
    return apiCompanyEmp().get("/");
  }
  getAllTechnicaine() {
    return apiCompanyEmp().get("/All/Technicaine");
  }
}

export default new ServiceEmpC();
