package com.intervention.management.intervention.management.DOT.empC;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.intervention.management.intervention.management.Entity.Company;

import javax.persistence.*;
import java.util.Date;

public interface getAllEmpC {

    Long getEmp();

    String getFirstName();

    String getLastName();

    String getSexe();

    String getCin();

    String getEmail();

    String getPassWord();

    int getAge();

    int getPhone();

   int getOfficeNumbre();

    @JsonFormat(pattern = "yyyy-MM-dd")
    Date getDateStart();

    String getJob();

    String getCompanyName();


}
