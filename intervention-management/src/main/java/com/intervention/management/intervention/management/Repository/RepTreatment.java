package com.intervention.management.intervention.management.Repository;

import com.intervention.management.intervention.management.DOT.CalendarIn;
import com.intervention.management.intervention.management.DOT.TreatmentsWithNotFK;
import com.intervention.management.intervention.management.DOT.treatment;
import com.intervention.management.intervention.management.Entity.Treatment;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

import java.util.List;

public interface RepTreatment extends CrudRepository<Treatment,Long> {
    @Modifying
    @Transactional
    @Query(value = " DELETE FROM treatment where treatment_id=:tr_id",nativeQuery = true)
    int deleteByIdTreatment(@Param("tr_id") Long treatment_id);
    @Query(value = "select T.TREATMENT_ID as Treatment_id,T.TREATMENT_END as TreatmentEnd ,C.DATE_COMPLAIN as DateComplain " +
            ",E.FIRST_NAME as FirstName ,E.LAST_NAME as LastName from TREATMENT T ,COMPLAIN C ,EMPLOYEE_COMPANY E where T.COMPLAIN_ID= C.COMPLAIN_ID and T.EMPLOYEE_COMPANY_ID=E.ID_EMPLOYEES_COMPANY " ,nativeQuery = true)
    List<CalendarIn> getAllIntervention();



    @Query(value = " select T.TREATMENT_ID ,T.DESCRIPTION_TREATMENT as DescriptionTreatment , T.START_TREATMENT as StartTreatment ," +
            "T.TREATMENT_END as TreatmentEnd , (S.FIRST_NAME ||' '|| S.LAST_NAME || ' at '|| C.DATE_COMPLAIN  ) as complain ," +
            "(E.FIRST_NAME ||' '|| E.LAST_NAME )as  EmployeeCompany " +
            "from  TREATMENT T , EMPLOYEE_COMPANY E , COMPLAIN C, EMPLOYEE_STATE S " +
            "where T.COMPLAIN_ID= C.COMPLAIN_ID and T.EMPLOYEE_COMPANY_ID=E.ID_EMPLOYEES_COMPANY " +
            " and  C.EMPLOYEE_STATE_ID=S.ID_EMPLOYEES_STATE  " +
            " and   E.CIN=:cin",nativeQuery = true)
    public List<treatment> getAllTreatments_R(@Param("cin") String cin)  ;

    @Query(value = " select * from treatment  where  Treatment_id =:ac",nativeQuery = true)
    public treatment getTreatmentById_R(@Param("ac") Long ac)  ;

    @Query(value = " select T.TREATMENT_ID ,T.DESCRIPTION_TREATMENT as Description_Treatment , T.START_TREATMENT as StartTreatment" +
            ",T.TREATMENT_END as TreatmentEnd from treatment T where  T.Treatment_id =:ac",nativeQuery = true)
    public TreatmentsWithNotFK getTreatmentsById(@Param("ac") Long ac)  ;
}
