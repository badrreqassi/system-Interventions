package com.intervention.management.intervention.management.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Com_Seq")
    @SequenceGenerator(name = "Com_Seq", sequenceName = "Com_Seq", allocationSize = 1)
    @Column(name = "num_company", nullable = false)
    private Long numCompany;
    private String NameCompany;


    @Column(unique = true)
    private String Service ;


}

