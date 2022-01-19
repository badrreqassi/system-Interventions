package com.intervention.management.intervention.management.DOT;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public interface piece {
    Long getPiece_id();

    String getNumPiece();

    String getNamePiece();

    String getMachineName();

    @JsonFormat(pattern = "yyyy-MM-dd")
    Date getStartPiece();

    @JsonFormat(pattern = "yyyy-MM-dd")
    Date getDate0fDeath();


}
