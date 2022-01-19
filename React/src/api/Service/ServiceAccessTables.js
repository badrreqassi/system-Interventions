import { Component } from "react";
import { apiAccess } from "../api";

class ServiceAccessTables extends Component {
  _ACCESS(CinUser) {
    return apiAccess().get("/get/" + CinUser);
  }
  _GET_ALL_TABLES_NAME(cin) {
    return apiAccess().get("/AllTablesName/" + cin);
  }
  _ADD(id, body) {
    console.log(id);
    console.log(body);
    return apiAccess().post("/add/" + id, body);
  }
  _DELETE(idEmpc) {
    return apiAccess().delete("/delete/" + idEmpc);
  }
}
export default new ServiceAccessTables();
