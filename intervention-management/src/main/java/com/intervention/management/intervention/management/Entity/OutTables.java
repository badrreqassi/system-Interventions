package com.intervention.management.intervention.management.Entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OutTables {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "outT_Seq")
    @SequenceGenerator(name = "outT_Seq", sequenceName = "outT_Seq", allocationSize = 1)
    @Column(name = "idTable", nullable = false)
    private Long idTable;
    private String NameTable;


}
