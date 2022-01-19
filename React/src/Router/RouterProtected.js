import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Calendar from "../components/Calendar/Calendar";
import PageNotFound from "../pages/PageNotFound";
import Operations from "../pages/Operations";
import Account from "../components/My Acount/Account";
import Treatment from "../components/SingleComponents/Treatment";
import NotificationPage from "../components/Notification/NotificationPage";
import NotificationList from "../components/Notification/NotificationList";
import NotCompleteCmp from "../components/Notification/StatusOfNotification/NotCompleteCmp";
import CompleteCmp from "../components/Notification/StatusOfNotification/CompleteCmp";
import UpdateEmp from "../components/Operation/Empoyes/UpdateEmp";
import Company from "../components/Operation/Company/Company";
import Complain from "../components/Operation/compalin/Complain";
import Treatments from "../components/Operation/Treatment/Treatments";
import Days_Worked from "../components/Operation/Days Worked/Days_Worked";
import Machine from "../components/Operation/Machine/Machine";
import Piece from "../components/Operation/Piece/Piece";
import LayoutOP from "../components/Operation/CadrOperation/NavBarOperations/LayoutOP";
import TablesOperation from "../components/Operation/CadrOperation/NavBarOperations/TablesOperation";
import Ajouter from "../components/Operation/CadrOperation/NavBarOperations/Ajouter";
import Update from "../components/Operation/CadrOperation/update";
import Break from "../components/Operation/CadrOperation/NavBarOperations/Break";
import Btn_Modal from "../components/Operation/CadrOperation/Btn_Modal";
import Message from "../message/Message";
import FormsComplain from "../components/Operation/compalin/FormsComplain";
import TablesComplaints from "../components/Operation/compalin/TablesComplaints";
import AjouterComplaints from "../components/Operation/compalin/AjouterComplaints";
import ModifierComplaints from "../components/Operation/compalin/ModifierComplaints";
import FormsDaysWorked from "../components/Operation/Days Worked/FormsDaysWorked";
import TablesDaysWorked from "../components/Operation/Days Worked/TablesDaysWorked";
import AjouterDaysWorked from "../components/Operation/Days Worked/AjouterDaysWorked";
import ModifierDaysWorked from "../components/Operation/Days Worked/ModifierDaysWorked";
import FormsTreatment from "../components/Operation/Treatment/FormsTreatment";
import TablesTreatments from "../components/Operation/Treatment/TablesTreatments";
import AjouterTreatments from "../components/Operation/Treatment/AjouterTreatments";
import ModifierTreatments from "../components/Operation/Treatment/ModifierTreatments";
import FormsCompany from "../components/Operation/Company/FormsCompany";
import TablesCompany from "../components/Operation/Company/TablesCompany";
import AjouterCompany from "../components/Operation/Company/AjouterCompany";
import ModifierCompany from "../components/Operation/Company/ModifierCompany";
import FormsMachine from "../components/Operation/Machine/FormsMachine";
import TablesMachine from "../components/Operation/Machine/TablesMachine";
import AjouterMachine from "../components/Operation/Machine/AjouterMachine";
import ModifierMachine from "../components/Operation/Machine/ModifierMachine";
import FormsPiece from "../components/Operation/Piece/FormsPiece";
import TablesPiece from "../components/Operation/Piece/TablesPiece";
import AjouterPiece from "../components/Operation/Piece/AjouterPiece";
import ModifierPiece from "../components/Operation/Piece/ModifierPiece";
import Wait from "../message/Wait";
import Diagramme from "../components/Charts/ChartEmp";
import FormForComplain from "../components/SingleComponents/PartForms/FormForComplain";
import ChartSAdmin from "../components/Charts/ChartSAdmin";
import FormsEmpC from "../components/Operation/EmpC/FormsEmpC";
import ModifierEmpC from "../components/Operation/EmpC/ModifierEmpC";
import AjouterEmpC from "../components/Operation/EmpC/AjouterEmpC";
import TablesEmpC from "../components/Operation/EmpC/TablesEmpC";
import EmpC from "../components/Operation/EmpC/EmpC";
import FormsEmpS from "../components/Operation/EmpS/FormsEmpS";
import TablesEmpS from "../components/Operation/EmpS/TablesEmpS";
import AjouterEmpS from "../components/Operation/EmpS/AjouterEmpS";
import ModifierEmpS from "../components/Operation/EmpS/ModifierEmpS";
import EmpS from "../components/Operation/EmpS/EmpS";
import AccessEmpC from "../components/SingleComponents/AccessEmpC";

function RouterProtected() {
  return (
    <Routes>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route element={<NotificationPage />}>
        <Route path="/notifications" element={<NotificationList />} />
        <Route path="/notifications/New" element={<NotCompleteCmp />} />
        <Route path="/notifications/Old" element={<CompleteCmp />} />
      </Route>

      <Route element={<FormsComplain />}>
        <Route
          index={true}
          path="/tableComplaints"
          element={<TablesComplaints />}
        />
        <Route path="/ajouterComplaints" element={<AjouterComplaints />} />
        <Route
          path="/modifierComplaints/:idComplaints"
          element={<ModifierComplaints />}
        />
      </Route>

      <Route element={<FormsDaysWorked />}>
        <Route
          index={true}
          path="/tableDaysWorked"
          element={<TablesDaysWorked />}
        />
        <Route path="/ajouterDaysWorked" element={<AjouterDaysWorked />} />
        <Route
          path="/modifierDaysWorked/:idDays"
          element={<ModifierDaysWorked />}
        />
      </Route>

      <Route element={<FormsTreatment />}>
        <Route
          index={true}
          path="/tableTreatments"
          element={<TablesTreatments />}
        />
        <Route path="/ajouterTreatments" element={<AjouterTreatments />} />
        <Route
          path="/modifierTreatments/:idTreatments"
          element={<ModifierTreatments />}
        />
      </Route>

      <Route element={<FormsCompany />}>
        <Route index={true} path="/tableCompany" element={<TablesCompany />} />
        <Route path="/ajouterCompany" element={<AjouterCompany />} />
        <Route
          path="/modifierCompany/:idCompany"
          element={<ModifierCompany />}
        />
      </Route>

      <Route element={<FormsMachine />}>
        <Route index={true} path="/tableMachine" element={<TablesMachine />} />
        <Route path="/ajouterMachine" element={<AjouterMachine />} />
        <Route
          path="/modifierMachine/:idMachine"
          element={<ModifierMachine />}
        />
      </Route>

      <Route element={<FormsPiece />}>
        <Route index={true} path="/tablePiece" element={<TablesPiece />} />
        <Route path="/ajouterPiece" element={<AjouterPiece />} />
        <Route path="/modifierPiece/:idPiece" element={<ModifierPiece />} />
      </Route>

      <Route element={<FormsEmpC />}>
        <Route
          index={true}
          path="/tableEmployeeCompany"
          element={<TablesEmpC />}
        />
        <Route path="/ajouterEmployeeCompany" element={<AjouterEmpC />} />
        <Route
          path="/modifierEmployeeCompany/:idEmployeeCompany"
          element={<ModifierEmpC />}
        />
        <Route path="/accessEmployeeCompany/:idEmpC" element={<AccessEmpC />} />
      </Route>

      <Route element={<FormsEmpS />}>
        <Route
          index={true}
          path="/tableEmployeeState"
          element={<TablesEmpS />}
        />
        <Route path="/ajouterEmployeeState" element={<AjouterEmpS />} />
        <Route
          path="/modifierEmployeeState/:idEmployeeState"
          element={<ModifierEmpS />}
        />
      </Route>

      <Route path="/updateEmp" element={<UpdateEmp />} />
      <Route path="/operations" element={<Operations />} />
      <Route path="/company" element={<Company />} />
      <Route path="/complain" element={<Complain />} />
      <Route path="/treatment" element={<Treatments />} />
      <Route path="/daysWorked" element={<Days_Worked />} />
      <Route path="/machine" element={<Machine />} />
      <Route path="/piece" element={<Piece />} />
      <Route path="/employeecompany" element={<EmpC />} />
      <Route path="/employeestate" element={<EmpS />} />
      <Route path="operationTreatment" element={<Btn_Modal />} />

      <Route path="/account" element={<Account />} />

      <Route path="/Break" element={<Break />} />
      <Route path="/AjouterSouleComplain" element={<FormForComplain />} />
      <Route path="/Diagramme" element={<Diagramme />} />
      <Route path="/DiagrammeAdmin" element={<ChartSAdmin />} />
      <Route path="/treatment/:idComplain" element={<Treatment />} />
      <Route path="/:pageName" element={<PageNotFound />} />
      <Route path="/message/:status" element={<Message />} />
    </Routes>
  );
}

export default RouterProtected;
