package com.intervention.management.intervention.management.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
 @NoArgsConstructor
public class Piece implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pie_Seq")
    @SequenceGenerator(name = "pie_Seq", sequenceName = "pie_Seq", allocationSize = 1)
    @Column(name = "piece_id", nullable = false)
    private Long piece_id;
    @Column(name = "numPiece"  ,unique = true)
    private String numPiece;
    @Column(name = "namePiece")
    private String namePiece;
    @JsonFormat(pattern="yyyy-MM-dd")
    @Column(name = "startPiece")
    private Date startPiece;
    @JsonFormat(pattern="yyyy-MM-dd")
    @Column(name = "date0fDeath" ,nullable = true)
    private  Date date0fDeath;



    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn( nullable = false,name = "machine_machine_id")
    private Machine machine ;




}
