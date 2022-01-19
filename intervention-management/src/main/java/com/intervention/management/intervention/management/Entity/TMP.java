package com.intervention.management.intervention.management.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

@IdClass(TMP_ID.class)
public class TMP {
    @Id
    @ManyToOne
    @JoinColumn(nullable = false,name = "machine_machine_id")
    private Machine machine;
    @Id
    @ManyToOne
    @JoinColumn(nullable = false,name = "piece_id")
    private Piece piece;

    @ManyToOne
    @JoinColumn(nullable = false,name = "treatment_id")
    private Treatment treatment;

    private Date DateTMP;


}
