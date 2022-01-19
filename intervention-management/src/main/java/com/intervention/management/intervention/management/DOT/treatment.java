package com.intervention.management.intervention.management.DOT;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.intervention.management.intervention.management.Entity.Complain;
import com.intervention.management.intervention.management.Entity.Employee_Company;

import javax.persistence.*;
import java.util.Date;

public interface treatment {
    Long getTreatment_id();
    @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm ")
    String getComplain();
    String getEmployeeCompany();
    @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
    Date getStartTreatment();
    @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
    Date getTreatmentEnd();
    String getDescriptionTreatment();

}
