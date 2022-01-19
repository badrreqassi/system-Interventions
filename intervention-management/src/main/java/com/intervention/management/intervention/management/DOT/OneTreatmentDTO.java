package com.intervention.management.intervention.management.DOT;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.intervention.management.intervention.management.Entity.Employee_Company;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OneTreatmentDTO {
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm ")
    private com.intervention.management.intervention.management.DOT.Compalints.complaints complaints;
    private Employee_Company employee_company;
    private TreatmentsWithNotFK treatments;

}
