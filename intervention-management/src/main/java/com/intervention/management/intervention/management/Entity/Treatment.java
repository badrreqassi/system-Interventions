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
public class Treatment {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Ter_Seq")
    @SequenceGenerator(name = "Ter_Seq", sequenceName = "Ter_Seq", allocationSize = 1)
    @Column(name = "treatment_id", nullable = false)
    private Long treatment_id;

    @ManyToOne(cascade = CascadeType.ALL ,fetch = FetchType.EAGER)
    @JoinColumn( nullable = false,name = "complain_id")
    private Complain complain;

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinColumn(nullable = false,name = "employee_company_id")
    private Employee_Company employee_company;




    @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm")
    private Date StartTreatment;

    @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm")
    private Date TreatmentEnd;
    // private  String  statusTreatment ; //  in treatment / done //

    private  String Description_Treatment;












}
