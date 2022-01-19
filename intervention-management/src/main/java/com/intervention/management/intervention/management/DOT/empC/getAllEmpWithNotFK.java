package com.intervention.management.intervention.management.DOT.empC;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public interface getAllEmpWithNotFK {
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
}
