package com.intervention.management.intervention.management.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Machine {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "mac_Seq")
    @SequenceGenerator(name = "mac_Seq", sequenceName = "mac_Seq", allocationSize = 1)
    @Column(name = "machine_id", nullable = false)
    private Long machine_id;
    private String MachineName;
    @Column(unique = true)
    private String NumMachine ;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date StartDate;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date DateOfDeath ;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date DateOfNormalTreatment ;
    private  String Statue ;




}
