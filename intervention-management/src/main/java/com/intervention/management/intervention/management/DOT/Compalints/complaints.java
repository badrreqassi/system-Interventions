package com.intervention.management.intervention.management.DOT.Compalints;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.intervention.management.intervention.management.Entity.Employee_Company;
import com.intervention.management.intervention.management.Entity.Employee_State;
import com.intervention.management.intervention.management.Entity.Machine;

import javax.persistence.*;
import java.util.Date;

public interface complaints {

   Long getComplain_id();
   String getEmployeeState() ;
   String getTechnicaine();
   String getAssistant();
   String  getMachineName();
   String getTypeComplain();
   @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
   Date getDateComplain() ;
   String  getDescriptionComplain() ;
   String  getStatus() ;
   int getOfficeNumbre();



}
