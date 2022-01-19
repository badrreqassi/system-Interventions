package com.intervention.management.intervention.management.DOT;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.intervention.management.intervention.management.Entity.Employee_Company;
import com.intervention.management.intervention.management.Entity.Employee_State;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

public interface machine {

    Long getMachine_id();

    String getMachineName();

    String getNumMachine();

    @JsonFormat(pattern = "yyyy-MM-dd")
    Date getStartDate();

    @JsonFormat(pattern = "yyyy-MM-dd")
    Date getDateOfDeath();

    @JsonFormat(pattern = "yyyy-MM-dd")
    Date getDateOfNormalTreatment();

    String getStatue();





}
