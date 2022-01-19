package com.intervention.management.intervention.management.DOT;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.intervention.management.intervention.management.Entity.Machine;

import java.util.Date;

public interface onePiece {
    Long getPiece_id();
    String getNumPiece();
    String getNamePiece();
    Machine getMachine();
    @JsonFormat(pattern="yyyy-MM-dd")
    Date getStartPiece();
    @JsonFormat(pattern="yyyy-MM-dd")
    Date getDate0fDeath();
}
