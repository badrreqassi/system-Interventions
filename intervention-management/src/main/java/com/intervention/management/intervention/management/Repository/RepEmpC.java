package com.intervention.management.intervention.management.Repository;


import com.intervention.management.intervention.management.DOT.DOT_EmployeByServiceCompany;
import com.intervention.management.intervention.management.DOT.empC.EmpCompanyDTO;
import com.intervention.management.intervention.management.DOT.empC.getAllEmpC;
import com.intervention.management.intervention.management.Entity.Employee_Company;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface RepEmpC extends CrudRepository<Employee_Company,Long> {

    @Modifying
    @Transactional
    @Query(value = " DELETE FROM EMPLOYEE_COMPANY where ID_EMPLOYEES_COMPANY =:empC_id",nativeQuery = true)
    int deleteByIdEmpC(@Param("empC_id") Long treatment_id);





    @Query(value = " SELECT E.CIN as Cin ,C.NAME_COMPANY as NameCompany from EMPLOYEE_COMPANY E ,COMPANY C " +
            "where E.COMPANY_ID=C.NUM_COMPANY and C.SERVICE=:ser",nativeQuery = true)
    public List<DOT_EmployeByServiceCompany> getAllEmployeesByServiceCompany(@Param("ser") String ser) ;

    @Query(value = "select * from EMPLOYEE_COMPANY where EMAIL=:email and pass_word=:password ",nativeQuery = true)
    public List<Employee_Company> findByEmailAndPassWord(@Param("email") String Cin ,@Param("password") String password);

    @Query(value = " select E.ID_EMPLOYEES_COMPANY as Emp ,E.AGE,E.CIN,E.JOB,E.PHONE,E.SEXE,E.EMAIL,E.FIRST_NAME as firstName ," +
            "E.LAST_NAME as lastName, E.OFFICE_NUMBRE as OfficeNumbre,E.PASS_WORD as passWord , E.DATE_START as dateStart" +
            " ,C.NAME_COMPANY as CompanyName from EMPLOYEE_COMPANY E , COMPANY C where E.COMPANY_ID=C.NUM_COMPANY",nativeQuery = true)
    public List<getAllEmpC> getAllEmpC_R();

    @Query(value = " select E.ID_EMPLOYEES_COMPANY as Emp ,E.AGE,E.CIN,E.JOB,E.PHONE,E.SEXE,E.EMAIL,E.FIRST_NAME as firstName ," +
            "E.LAST_NAME as lastName, E.OFFICE_NUMBRE as OfficeNumbre,E.PASS_WORD as passWord , E.DATE_START as dateStart" +
            " ,C.NAME_COMPANY as CompanyName from EMPLOYEE_COMPANY E , COMPANY C where E.COMPANY_ID=C.NUM_COMPANY " +
            "and E.ID_EMPLOYEES_COMPANY=:emp",nativeQuery = true)
    public  getAllEmpC  getEmpCById_R(@Param("emp") Long emp);

    @Query(value = " select * from  EMPLOYEE_COMPANY where job='technicaine' ",nativeQuery = true)
    public List<Employee_Company> getAllTechnicaine();


}
