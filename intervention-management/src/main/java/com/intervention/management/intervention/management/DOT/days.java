package com.intervention.management.intervention.management.DOT;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.intervention.management.intervention.management.Entity.Employee_Company;

import javax.persistence.*;
import java.util.Date;

public interface days {
     Long getD_work_id();
    String getEmployeeCompany();
     int getIntervention();
    @JsonFormat(pattern="yyyy-MM-dd")
    Date getTheDay();


}
