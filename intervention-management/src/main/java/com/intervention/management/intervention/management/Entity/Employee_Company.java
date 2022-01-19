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

public class Employee_Company implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "empC_SEQ")
    @SequenceGenerator(sequenceName = "empC_seq", allocationSize = 1, name = "empC_SEQ")
    @Column(name = "id_employeesCompany", nullable = false)
    private Long emp ;
    private String FirstName;
    private String LastName ;
    private String Sexe;
    @Column(unique = true)
    private String Cin;
    @Column(unique = true)
    private String email ;
    private String PassWord ;
    private int Age;
    private int Phone;
    private int OfficeNumbre ;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date dateStart ;
    private  String Job;
    @ManyToOne(fetch = FetchType.EAGER,cascade=CascadeType.ALL)
    @JoinColumn(nullable = false,name = "Company_ID")
    private Company company;

}
