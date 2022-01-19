import { Component } from "react";
import { apiComplain } from "../api";

class ServecCompalin extends Component {
  _GET_COMPLAINTS_BY_EMP_COMPANY(id) {
    return apiComplain().get("/Technicaine/" + id);
  }
  _GET_COMPLAINTS_BY_EMP_COMPANY_R(id) {
    return apiComplain().get("/Technicaine/" + id);
  }
  _GET_COMPLAINTS_BY_EMP_COMPANY_NOT(id) {
    return apiComplain().get("NotCompleteComplain/Technicaine/" + id);
  }
  _GET_COMPLAINTS_BY_EMP_COMPANY_COMPLETE(id) {
    return apiComplain().get("/CompleteComplain/Technicaine/" + id);
  }

  _GET_ONE_COMPLAIN(id) {
    return apiComplain().get("/DT0/" + id);
  }

  _ADD_COMPLAIN(body, FK) {
    console.log(body);
    return apiComplain().post(
      "/add/" +
        Number(FK.empC) +
        "/" +
        Number(FK.empS) +
        "/" +
        Number(FK.machine_id) +
        "/" +
        FK.assistant,
      body
    );
  }
  _PUT_COMPLAIN(id, body, FK) {
    return apiComplain().put(
      "/update/" + id + "/" + FK.empC + "/" + FK.empS + "/" + FK.machine_id,
      body
    );
  }
  _DELETE_COMPLAIN(id) {
    return apiComplain().delete("/delete/" + id);
  }

  _GET_COMPLAINTS_BY_EMP_COMPANY_NOT_R(id) {
    return apiComplain().get("NotCompleteComplain/Technicaine/" + id);
  }

  findComplainByAssistant(id) {
    return apiComplain().get("/Assistant/" + id);
  }
}

export default new ServecCompalin();
