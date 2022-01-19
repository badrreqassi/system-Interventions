package com.intervention.management.intervention.management.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.intellij.lang.annotations.Pattern;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Employee_State {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "empS_SEQ")
    @SequenceGenerator(sequenceName = "empS_seq", allocationSize = 1, name = "empS_SEQ")
    @Column(name = "id_employeesState", nullable = false)
    private Long emp ;
    private String FirstName;
    private String LastName ;
    private String Sexe;
    @Column(unique = true , nullable = false)
    private String Cin;
    @Column(unique = true)
    private String email ;
    private String PassWord ;
    private int Age;
    private int Phone;
    private int OfficeNumbre ;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date dateStart ;
    private String Job ;

}
