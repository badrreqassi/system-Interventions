import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import iCalendarPlugin from "@fullcalendar/icalendar";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fullcalendar/core/main";
import "@fullcalendar/daygrid/main";
import "@fortawesome/fontawesome-free/css/all.css";
import { useSelector } from "react-redux";
import { BsFillCalendarEventFill } from "react-icons/bs";

function Calendar() {
  const intervention = useSelector((state) => state.treatments.Interventions);

  const headerToolbar = {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
  };

  const evt = [
    intervention.map((intr) => {
      return {
        id: intr.treatment_id,
        title: "intervention By [" + intr.lastName + " ]",
        start: intr.dateComplain,
        end: intr.treatmentEnd,
      };
    }),
  ];

  return (
    <div id="bodyAccount">
      <div
        id="cadrAccount"
        className="border border-2 rounded-3 mx-auto"
        style={{ height: "900px" }}
      >
        <div id="calondar" className="container">
          <div
            className="row title"
            style={{ marginTop: "50px", marginBottom: "20px" }}
          >
            <div
              style={{
                color: "#214069",
                marginLeft: "550px",
                marginBottom: "30px",
              }}
            >
              {" "}
              <h1>___________</h1>
              <h2>
                {" "}
                Calendar <BsFillCalendarEventFill />
              </h2>
            </div>
          </div>

          <FullCalendar
            plugins={[
              dayGridPlugin,
              iCalendarPlugin,
              timeGridPlugin,
              listPlugin,
            ]}
            headerToolbar={headerToolbar}
            weekends={false}
            height={"600px"}
            events={evt[0]}
          />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
/*
<div
              style={{
                color: "#214069",
              }}
            >
              {" "}
              <h1>______________________</h1>
              <h2>
                {" "}
                Calendar <BsFillCalendarEventFill />
              </h2>
            </div>
            
 */
