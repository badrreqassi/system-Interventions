package com.intervention.management.intervention.management.Repository;

import com.intervention.management.intervention.management.DOT.Compalints.ComplaintsWithNotMachine;
import com.intervention.management.intervention.management.DOT.Compalints.complaints;
import com.intervention.management.intervention.management.Entity.Complain;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface RepComplain extends CrudRepository<Complain, Long> {
    @Modifying
    @Transactional
    @Query(value = " DELETE FROM COMPLAIN where COMPLAIN_ID =:cm_id", nativeQuery = true)
    int deleteByIdComplain(@Param("cm_id") Long treatment_id);

    @Query(value = " select C.COMPLAIN_ID,C.DATE_COMPLAIN as DateComplain , C.DESCRIPTION_COMPLAIN as DescriptionComplain, C.TYPE_COMPLAIN as TypeComplain, C.STATUS,(S.FIRST_NAME ||' '|| S.LAST_NAME) as EmployeeState  ,(E.FIRST_NAME ||' '|| E.LAST_NAME )as  Technicaine  , (A.FIRST_NAME ||' '|| A.LAST_NAME )as  Assistant  , M.MACHINE_NAME as MachineName , S.OFFICE_NUMBRE as officeNumbre  from COMPLAIN C, EMPLOYEE_STATE S, EMPLOYEE_COMPANY E ,MACHINE M  ,EMPLOYEE_COMPANY A  where C.TECHNICAINE_ID= E.ID_EMPLOYEES_COMPANY and C.EMPLOYEE_STATE_ID=S.ID_EMPLOYEES_STATE and C.MACHINE_ID=M.MACHINE_ID   and C.ASSISTANT_ID=A.ID_EMPLOYEES_COMPANY order by C.DATE_COMPLAIN DESC",nativeQuery = true)
     public  List<complaints> getAllComplaints();

     @Query(value = "select C.COMPLAIN_ID,C.DATE_COMPLAIN as DateComplain , C.DESCRIPTION_COMPLAIN as DescriptionComplain, C.TYPE_COMPLAIN as TypeComplain, C.STATUS,(S.FIRST_NAME ||' '|| S.LAST_NAME) as EmployeeState  ,(E.FIRST_NAME ||' '|| E.LAST_NAME )as  Technicaine  , (A.FIRST_NAME ||' '|| A.LAST_NAME )as  Assistant  , M.MACHINE_NAME as MachineName , S.OFFICE_NUMBRE as officeNumbre  from COMPLAIN C, EMPLOYEE_STATE S, EMPLOYEE_COMPANY E ,MACHINE M  ,EMPLOYEE_COMPANY A  where C.TECHNICAINE_ID= E.ID_EMPLOYEES_COMPANY and C.EMPLOYEE_STATE_ID=S.ID_EMPLOYEES_STATE and C.MACHINE_ID=M.MACHINE_ID   and C.ASSISTANT_ID=A.ID_EMPLOYEES_COMPANY and E.CIN =:cin order by C.DATE_COMPLAIN DESC",nativeQuery = true)
     List<complaints> findComplainByTechnicaine(@Param("cin") String technicaine);

    @Query(value = "select C.COMPLAIN_ID,C.DATE_COMPLAIN as DateComplain , C.DESCRIPTION_COMPLAIN as DescriptionComplain, C.TYPE_COMPLAIN as TypeComplain, C.STATUS,(S.FIRST_NAME ||' '|| S.LAST_NAME) as EmployeeState  ,(E.FIRST_NAME ||' '|| E.LAST_NAME )as  Technicaine  , (A.FIRST_NAME ||' '|| A.LAST_NAME )as  Assistant  , M.MACHINE_NAME as MachineName , S.OFFICE_NUMBRE as officeNumbre  from COMPLAIN C, EMPLOYEE_STATE S, EMPLOYEE_COMPANY E ,MACHINE M  ,EMPLOYEE_COMPANY A  where C.TECHNICAINE_ID= E.ID_EMPLOYEES_COMPANY and C.EMPLOYEE_STATE_ID=S.ID_EMPLOYEES_STATE and C.MACHINE_ID=M.MACHINE_ID   and C.ASSISTANT_ID=A.ID_EMPLOYEES_COMPANY and  C.COMPLAIN_ID =:id order by C.DATE_COMPLAIN DESC",nativeQuery = true)
    complaints  findComplainById(@Param("id") Long id);

    @Query(value = "select C.COMPLAIN_ID,C.DATE_COMPLAIN as DateComplain , C.DESCRIPTION_COMPLAIN as DescriptionComplain, C.TYPE_COMPLAIN as TypeComplain, C.STATUS,(S.FIRST_NAME ||' '|| S.LAST_NAME) as EmployeeState  ,(E.FIRST_NAME ||' '|| E.LAST_NAME )as  Technicaine  , (A.FIRST_NAME ||' '|| A.LAST_NAME )as  Assistant  , M.MACHINE_NAME as MachineName , S.OFFICE_NUMBRE as officeNumbre  from COMPLAIN C, EMPLOYEE_STATE S, EMPLOYEE_COMPANY E ,MACHINE M  ,EMPLOYEE_COMPANY A  where C.TECHNICAINE_ID= E.ID_EMPLOYEES_COMPANY and C.EMPLOYEE_STATE_ID=S.ID_EMPLOYEES_STATE and C.MACHINE_ID=M.MACHINE_ID   and C.ASSISTANT_ID=A.ID_EMPLOYEES_COMPANY and  A.CIN=:cin order by C.DATE_COMPLAIN DESC",nativeQuery = true)
    List<complaints> findComplainByAssistant(@Param("cin") String assistant);

    @Query(value = "select C.COMPLAIN_ID,C.DATE_COMPLAIN as DateComplain ," +
            " C.DESCRIPTION_COMPLAIN as DescriptionComplain,C.TYPE_COMPLAIN as TypeComplain, C.STATUS " +
            "from COMPLAIN C where C.COMPLAIN_ID=:id", nativeQuery = true)
    ComplaintsWithNotMachine findComplaintsByIdWithNotFK(@Param("id") Long id);

    @Query(value = "select C.COMPLAIN_ID,C.DATE_COMPLAIN as DateComplain , C.DESCRIPTION_COMPLAIN as DescriptionComplain,C.TYPE_COMPLAIN as TypeComplain, C.STATUS,(S.FIRST_NAME ||' '|| S.LAST_NAME) as EmployeeState  , (E.FIRST_NAME ||' '|| E.LAST_NAME )as  Technicaine ,(A.FIRST_NAME ||' '|| A.LAST_NAME )as   Assistant ,M.MACHINE_NAME as MachineName , S.OFFICE_NUMBRE as officeNumbre  from COMPLAIN C, EMPLOYEE_STATE S, EMPLOYEE_COMPANY E ,MACHINE M ,EMPLOYEE_COMPANY A where C.TECHNICAINE_ID= E.ID_EMPLOYEES_COMPANY and C.ASSISTANT_ID= A.ID_EMPLOYEES_COMPANY and C.EMPLOYEE_STATE_ID=S.ID_EMPLOYEES_STATE and C.MACHINE_ID=M.MACHINE_ID and  C.COMPLAIN_ID  IN (select T.COMPLAIN_ID from treatment T ) and  E.CIN=:cin order by C.DATE_COMPLAIN DESC", nativeQuery = true)
    List<complaints> findCompleteComplainByTechnicaine(@Param("cin") String cin );

    @Query(value = "select C.COMPLAIN_ID,C.DATE_COMPLAIN as DateComplain , C.DESCRIPTION_COMPLAIN as DescriptionComplain,C.TYPE_COMPLAIN as TypeComplain, C.STATUS,(S.FIRST_NAME ||' '|| S.LAST_NAME) as EmployeeState  , (E.FIRST_NAME ||' '|| E.LAST_NAME )as  Technicaine ,(A.FIRST_NAME ||' '|| A.LAST_NAME )as   Assistant ,M.MACHINE_NAME as MachineName , S.OFFICE_NUMBRE as officeNumbre  from COMPLAIN C, EMPLOYEE_STATE S, EMPLOYEE_COMPANY E ,MACHINE M ,EMPLOYEE_COMPANY A where C.TECHNICAINE_ID= E.ID_EMPLOYEES_COMPANY and C.ASSISTANT_ID= A.ID_EMPLOYEES_COMPANY and C.EMPLOYEE_STATE_ID=S.ID_EMPLOYEES_STATE and C.MACHINE_ID=M.MACHINE_ID and  C.COMPLAIN_ID NOT IN (select T.COMPLAIN_ID from treatment T ) and  E.CIN=:cin order by C.DATE_COMPLAIN DESC", nativeQuery = true)
    List<complaints> findNotCompleteComplainByTechnicaine(@Param("cin") String cin );






}

/*  @Query(value = " SELECT C.* from complain C where " +
            "C.EMPLOYEE_COMPANY_ID=(select ID_EMPLOYEES_COMPANY from EMPLOYEE_COMPANY  where CIN=:cin) order by C.DATE_COMPLAIN DESC", nativeQuery = true)
    List<Complain> findComplainByEmpC(@Param("cin") String cin );  //   Non

    @Query(value = "select C.* from complain C  where C.COMPLAIN_ID NOT IN " +
            "(select T.COMPLAIN_ID from treatment T ) and " +
            "C.EMPLOYEE_COMPANY_ID=(select ID_EMPLOYEES_COMPANY from EMPLOYEE_COMPANY  where CIN=:cin) order by C.DATE_COMPLAIN DESC ", nativeQuery = true)
    List<complaints> findComplainByEmpCNotComplete(@Param("cin") String cin );

    @Query(value = " select C.COMPLAIN_ID,C.DATE_COMPLAIN as DateComplain , C.DESCRIPTION_COMPLAIN as DescriptionComplain," +
            "C.TYPE_COMPLAIN as TypeComplain, C.STATUS,(S.FIRST_NAME ||' '|| S.LAST_NAME) as EmployeeState  , " +
            "(E.FIRST_NAME ||' '|| E.LAST_NAME )as  EmployeeCompany  ,M.MACHINE_NAME as MachineName , S.OFFICE_NUMBRE as officeNumbre " +
            "from COMPLAIN C, EMPLOYEE_STATE S, EMPLOYEE_COMPANY E ,MACHINE M " +
            "where C.EMPLOYEE_COMPANY_ID= E.ID_EMPLOYEES_COMPANY and C.EMPLOYEE_STATE_ID=S.ID_EMPLOYEES_STATE  " +
            "and C.MACHINE_ID=M.MACHINE_ID and  C.COMPLAIN_ID  IN (select T.COMPLAIN_ID from treatment T ) and  E.CIN=:cin order by C.DATE_COMPLAIN DESC ", nativeQuery = true)
    List<complaints> findComplainByEmpC_Complete(@Param("cin") String cin );

    @Query(value = "  select C.COMPLAIN_ID,C.DATE_COMPLAIN as DateComplain , C.DESCRIPTION_COMPLAIN as DescriptionComplain," +
            "C.TYPE_COMPLAIN as TypeComplain, C.STATUS,(S.FIRST_NAME ||' '|| S.LAST_NAME) as EmployeeState  ," +
            " (E.FIRST_NAME ||' '|| E.LAST_NAME )as  EmployeeCompany  ,M.MACHINE_NAME as MachineName ,S.OFFICE_NUMBRE as officeNumbre " +
            "from COMPLAIN C, EMPLOYEE_STATE S, EMPLOYEE_COMPANY E ,MACHINE M " +
            "where C.EMPLOYEE_COMPANY_ID= E.ID_EMPLOYEES_COMPANY and C.EMPLOYEE_STATE_ID=S.ID_EMPLOYEES_STATE  and C.MACHINE_ID=M.MACHINE_ID  ", nativeQuery = true)
    public List<complaints> getAllComplaints_R();

    @Query(value = " select C.COMPLAIN_ID,C.DATE_COMPLAIN as DateComplain ," +
            " C.DESCRIPTION_COMPLAIN as DescriptionComplain,C.TYPE_COMPLAIN as" +
            " TypeComplain, C.STATUS,(S.FIRST_NAME ||' '|| S.LAST_NAME) as EmployeeState  ," +
            " (E.FIRST_NAME ||' '|| E.LAST_NAME )as  EmployeeCompany  ,M.MACHINE_NAME as MachineName ,S.OFFICE_NUMBRE as officeNumbre " +
            "from COMPLAIN C, EMPLOYEE_STATE S, EMPLOYEE_COMPANY E ,MACHINE M " +
            "where C.EMPLOYEE_COMPANY_ID= E.ID_EMPLOYEES_COMPANY and C.EMPLOYEE_STATE_ID=S.ID_EMPLOYEES_STATE  " +
            "and C.MACHINE_ID=M.MACHINE_ID and  E.CIN=:cin order by C.DATE_COMPLAIN DESC", nativeQuery = true)
    List<complaints> findComplainByEmpC_R(@Param("cin") String cin);

    @Query(value = "select C.COMPLAIN_ID,C.DATE_COMPLAIN as DateComplain , C.DESCRIPTION_COMPLAIN as DescriptionComplain," +
            "C.TYPE_COMPLAIN as TypeComplain, C.STATUS,(S.FIRST_NAME ||' '|| S.LAST_NAME) as EmployeeState  , " +
            "(E.FIRST_NAME ||' '|| E.LAST_NAME )as  EmployeeCompany  ,M.MACHINE_NAME as MachineName ,S.OFFICE_NUMBRE as officeNumbre " +
            "from COMPLAIN C, EMPLOYEE_STATE S, EMPLOYEE_COMPANY E ,MACHINE M " +
            "where C.EMPLOYEE_COMPANY_ID= E.ID_EMPLOYEES_COMPANY and C.EMPLOYEE_STATE_ID=S.ID_EMPLOYEES_STATE  and C.MACHINE_ID=M.MACHINE_ID and C.COMPLAIN_ID=:id", nativeQuery = true)
    complaints findComplainById_R(@Param("id") Long id);

    @Query(value = "select C.COMPLAIN_ID,C.DATE_COMPLAIN as DateComplain ," +
            " C.DESCRIPTION_COMPLAIN as DescriptionComplain,C.TYPE_COMPLAIN as TypeComplain, C.STATUS " +
            "from COMPLAIN C where C.COMPLAIN_ID=:id", nativeQuery = true)
    ComplaintsWithNotMachine findComplaintsById(@Param("id") Long id);


    @Query(value = " select C.COMPLAIN_ID,C.DATE_COMPLAIN as DateComplain , C.DESCRIPTION_COMPLAIN as DescriptionComplain," +
            "C.TYPE_COMPLAIN as TypeComplain, C.STATUS,(S.FIRST_NAME ||' '|| S.LAST_NAME) as EmployeeState  , " +
            "(E.FIRST_NAME ||' '|| E.LAST_NAME )as  EmployeeCompany  ,M.MACHINE_NAME as MachineName ,S.OFFICE_NUMBRE as officeNumbre " +
            "from COMPLAIN C, EMPLOYEE_STATE S, EMPLOYEE_COMPANY E ,MACHINE M " +
            "where C.EMPLOYEE_COMPANY_ID= E.ID_EMPLOYEES_COMPANY and C.EMPLOYEE_STATE_ID=S.ID_EMPLOYEES_STATE  " +
            "and C.MACHINE_ID=M.MACHINE_ID and  C.COMPLAIN_ID NOT IN (select T.COMPLAIN_ID from treatment T ) and  E.CIN=:cin order by C.DATE_COMPLAIN DESC ", nativeQuery = true)
    List<complaints> findComplainByEmpCNotComplete_R(@Param("cin") String cin); */
