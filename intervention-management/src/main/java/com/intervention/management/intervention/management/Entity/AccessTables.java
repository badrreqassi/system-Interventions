package com.intervention.management.intervention.management.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccessTables {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Acc_Seq")
    @SequenceGenerator(name = "Acc_Seq", sequenceName = "Acc_Seq", allocationSize = 1)
    @Column(name = "Acc_id", nullable = false)
    private  Long Access_id;
   @ManyToOne
   @JoinColumn(nullable = false,name = "Tables_id")
    private OutTables outTables;
    private  String  CinUser ;




}
