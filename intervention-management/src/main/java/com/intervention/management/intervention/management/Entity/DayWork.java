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
public class DayWork {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Day_Seq")
    @SequenceGenerator(name = "Day_Seq", sequenceName = "Day_Seq", allocationSize = 1)
    @Column(name = "d_work_id", nullable = false)
    private Long d_work_id;

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinColumn( nullable = false,name = "employee_company_id")
    private Employee_Company employee_company;

    private  int intervention;
   @Column(nullable = false)
   @JsonFormat(pattern="yyyy-MM-dd")
    private Date TheDay;




}
