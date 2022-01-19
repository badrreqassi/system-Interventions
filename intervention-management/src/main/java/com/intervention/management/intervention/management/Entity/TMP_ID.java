package com.intervention.management.intervention.management.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class TMP_ID implements Serializable {

    private Machine machine;
    private Piece piece;
    private  Treatment treatment ;


}
