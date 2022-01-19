package com.intervention.management.intervention.management.DOT.Compalints;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public interface ComplaintsWithNotMachine {

    Long getComplain_id();

    String getTypeComplain();

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    Date getDateComplain();

    String getDescriptionComplain();

    String getStatus();
}
