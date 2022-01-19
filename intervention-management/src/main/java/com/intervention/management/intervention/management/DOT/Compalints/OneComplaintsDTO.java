package com.intervention.management.intervention.management.DOT.Compalints;

import com.intervention.management.intervention.management.DOT.Compalints.ComplaintsWithNotMachine;
import com.intervention.management.intervention.management.DOT.machine;
import com.intervention.management.intervention.management.Entity.Employee_Company;
import com.intervention.management.intervention.management.Entity.Employee_State;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OneComplaintsDTO {

    private ComplaintsWithNotMachine complaints;
    private Employee_Company employee_company;
    private Employee_State employee_state;
    private machine machine;
}
