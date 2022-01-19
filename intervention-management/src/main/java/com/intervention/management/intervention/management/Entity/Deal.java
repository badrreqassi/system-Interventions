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
public class Deal {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Dea_seq")
    @SequenceGenerator(name = "Dea_seq", sequenceName = "Dea_seq", allocationSize = 1)
    @Column(name = "deal_id", nullable = false)
    private Long deal_id;

    @ManyToOne(fetch = FetchType.EAGER,cascade=CascadeType.ALL)
    @JoinColumn( nullable = false , name = "company_id")
    private  Company company;

    @ManyToOne(fetch = FetchType.EAGER,cascade=CascadeType.ALL)
    @JoinColumn(name = "employee_state_id")
    private Employee_State employee_state; // by compares By Cin
    private int EmployeeNumbres;
    @Column(unique = true)
    private  String ServiceType;
    @JsonFormat(pattern="yyyy-MM-dd")
     private Date DateStart;
    @JsonFormat(pattern="yyyy-MM-dd")
    //@JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
     private Date DateEnd ;




}
