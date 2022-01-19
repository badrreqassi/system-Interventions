package com.intervention.management.intervention.management.DOT;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public interface TreatmentsWithNotFK {
    Long getTreatment_id();

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    Date getStartTreatment();

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    Date getTreatmentEnd();

    String getDescription_Treatment();
}
