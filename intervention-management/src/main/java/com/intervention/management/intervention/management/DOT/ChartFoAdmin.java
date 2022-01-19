package com.intervention.management.intervention.management.DOT;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public interface ChartFoAdmin {
    @JsonFormat(pattern="yyyy-MM-dd")
    Long getEmpC();
    Date getTheDay() ;
    int getIntervention();
    int getMaxT();
}
