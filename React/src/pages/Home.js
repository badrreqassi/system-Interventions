import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FromsParts from "../components/SingleComponents/PartForms/FromsParts";
import TitleOfComponent from "../components/SingleComponents/TitleOfComponent";
import { get_All_Company } from "../redux/actions/actionCompany";
import {
  get_Complaits_By_Emp_Company,
  get_Complaits_By_Emp_Company_R,
  get_Complaits_By_Emp_Company_Not,
} from "../redux/actions/actionComplain";
import { get_all_Intervention } from "../redux/actions/actionsTreatments";
import { content } from "../components/Operation/Content/ContentComplain";
import FormPart_FK from "../components/SingleComponents/PartForms/FormPart_FK";
import FormForComplain from "../components/SingleComponents/PartForms/FormForComplain";
import { get_All_Machines } from "../redux/actions/actionMachine";
import { get_All_Emp_S } from "../redux/actions/actionEmpS";
import { get_AccessTables } from "../redux/actions/actionAccessTables";
import { get_Data_For_Chart } from "../redux/actions/actionDaysWorked";
import { getAllTechnicaine, get_One_Emp_C } from "../redux/actions/actionEmpC";
import Nav from "../components/Navbar/Nav";
import Header from "../components/SingleComponents/Header";
import { useAlert } from "react-alert";
function Home() {
  const employees = useSelector((state) => state.employees.employees);
  const typeuser = useSelector((state) => state.employees.typeuser);

  const [hidden, setHidden] = useState(false);

  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(get_AccessTables(employees.cin));
    dispatch(get_All_Machines());
    dispatch(get_All_Emp_S());
    dispatch(get_all_Intervention());
  }, []);

  useEffect(() => {
    dispatch(get_Data_For_Chart(employees.cin));
    dispatch(get_Complaits_By_Emp_Company_Not(employees.cin));
    dispatch(get_Complaits_By_Emp_Company(employees.cin));
    dispatch(getAllTechnicaine());

    if (
      typeuser == false ||
      (typeuser == true && employees.job == "assistant")
    ) {
      setHidden(true);
    }
  }, []);

  return (
    <main id="main">
      {/* <Header />*/}

      <div id="section">
        <div id="section1">
          <TitleOfComponent name={"Calendar"} />
          <div id="bodysection" className="container-fluid">
            <h1 className="text-center" style={{ color: "#62d2a2" }}>
              Que signifie le calendrier ?
            </h1>
            <p>
              Le Calendrier fournit ?? tous les utilisateurs de ce site Web des
              informations dans le temps sur les ??v??nements qui se d??roulent
              dans notre institution...
            </p>
            <p>
              L'une des caract??ristiques de ce m??morandum est de fournir les
              informations n??cessaires sur les interventions des responsables de
              notre minist??re.
            </p>
          </div>
        </div>
        <div id="section2" hidden={hidden}>
          <TitleOfComponent name={"Notifications"} />
          <div id="bodysection" className="container-fluid ">
            <h1 className="text-center" style={{ color: "#62d2a2" }}>
              Quelles sont les notifications pour nous ?
            </h1>
            <p>
              The notices are complaints submitted by the employees of the
              ministry ... These notices provide the necessary information in
              order to implement the rationing as soon as possible...
            </p>
            <p>
              Les notifications annoncent un probl??me qui a conduit ?? la
              suspension du processus de travail d'un ou plusieurs salari??s, et
              le rationnement doit ??tre intervenu afin de relancer ce processus
              dans les plus brefs d??lais.
            </p>
          </div>
        </div>
        <div id="section3" style={{ marginBottom: "20px" }}>
          <TitleOfComponent name={"Operations"} />
          <div id="bodysection" className="container-fluid ">
            <h1 className="text-center" style={{ color: "#62d2a2" }}>
              Quelles sont les op??rations ?
            </h1>
            <p>
              C'est un ensemble de proc??dures effectu??es par une certaine partie
              pour contribuer ?? la fourniture d'informations pour suivre le
              rythme des ??v??nements
            </p>
            <p>
              Parmi ces actions, la r??ception des plaintes des employ??s et leur
              transformation en notifications ?? notre rationnement{" "}
            </p>
          </div>
        </div>
        <div id="section4" hidden={typeuser}>
          <TitleOfComponent name={"Diagramme"} />
          <div
            id="bodysection"
            className="container-fluid "
            style={{ marginBottom: "20px" }}
          >
            <h1 className="text-center" style={{ color: "#62d2a2" }}>
              Qu'est-ce que le diagramme d'activit?? ?
            </h1>

            <p>
              {" "}
              Cet indicateur repr??sente un suivi de votre activit?? au travail
              par le nombre d'interventions que vous avez faites{" "}
            </p>
            <p>
              au cours de la derni??re semaine de travail avec le nombre
              d'interventions faites par vos coll??gues{" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
