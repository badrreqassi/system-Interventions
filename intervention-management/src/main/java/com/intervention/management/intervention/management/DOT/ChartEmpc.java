package com.intervention.management.intervention.management.DOT;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public interface ChartEmpc {

     @JsonFormat(pattern="yyyy-MM-dd")
      String getTheDay() ;
     int getIntervention();
     int getMaxT();
}
