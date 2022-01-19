package com.intervention.management.intervention.management.DOT;

import com.intervention.management.intervention.management.Entity.Employee_Company;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
 @AllArgsConstructor
@NoArgsConstructor
public class DiagrammeDTO {

    private List<Employee_Company> employee_company;
    private ChartFoAdmin chartAllEmp ;
}
