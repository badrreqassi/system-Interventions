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
public class Complain {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Comp_Seq")
    @SequenceGenerator(name = "Comp_Seq", sequenceName = "Comp_Seq", allocationSize = 1)
    @Column(name = "complain_id", nullable = false)
    private Long complain_id;

    @ManyToOne(fetch = FetchType.EAGER,cascade=CascadeType.ALL)
    @JoinColumn( nullable = false,name = "employee_state_id") // by compaire By Cin
    private Employee_State employee_state ;


    @ManyToOne(fetch = FetchType.EAGER,cascade={CascadeType.MERGE,CascadeType.PERSIST})
    @JoinColumn(nullable = false,name = "technicaine_id")
    private Employee_Company employee_company;

    @ManyToOne(fetch = FetchType.EAGER,cascade={CascadeType.MERGE,CascadeType.PERSIST})
    @JoinColumn(nullable = false,name = "assistant_id")
    private Employee_Company assistant;

    @ManyToOne
    @JoinColumn(nullable = false, name = "machine_id")
    private Machine machine;

    private String TypeComplain; // machine or system

    @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm")
    private Date DateComplain ;
    private  String  DescriptionComplain ;
    private  String  status ; // Emergence Non-Emergence






}
