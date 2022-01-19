package com.intervention.management.intervention.management.Repository;

import com.intervention.management.intervention.management.DOT.ChartEmpc;
import com.intervention.management.intervention.management.DOT.ChartFoAdmin;
import com.intervention.management.intervention.management.DOT.days;
import com.intervention.management.intervention.management.Entity.DayWork;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface RepDayWork extends CrudRepository<DayWork,Long> {
    @Modifying
    @Transactional
    @Query(value = "delete from DAY_WORK where D_WORK_ID=:dw_id",nativeQuery = true)
    public int deleteByIdDAY_WORK(@Param("dw_id") Long day_id);

    @Query(value = " select  D.TheDay as TheDay , D.Intervention as Intervention  , T.maxT as MaxT  from " +
            "(SELECT  EMPLOYEE_COMPANY_ID ,to_char(TREATMENT_END,'yyyy-MM-dd') as TheDay  , count(TREATMENT_ID) as Intervention  " +
            "from TREATMENT GROUP By  EMPLOYEE_COMPANY_ID , to_char(TREATMENT_END,'yyyy-MM-dd')  )  D , (select D.TheDay as theD ," +
            " max(D.Intervention)as maxT  from (SELECT  EMPLOYEE_COMPANY_ID ,to_char(TREATMENT_END,'yyyy-MM-dd') as TheDay  ," +
            " count(TREATMENT_ID) as Intervention  from TREATMENT GROUP By  EMPLOYEE_COMPANY_ID , to_char(TREATMENT_END,'yyyy-MM-dd')  )" +
            " d GROUP BY D.TheDay) T  where rownum<=5 and T.theD = D.TheDay and " +
            " EMPLOYEE_COMPANY_ID=(select ID_EMPLOYEES_COMPANY from EMPLOYEE_COMPANY " +
            " where CIN=:cin)" ,nativeQuery = true)
    //
    List<ChartEmpc> getDayWorkForEmpC(@Param("cin") String cin);



    @Query(value = " select D.D_WORK_ID ,D.THE_DAY as TheDay ,D.INTERVENTION as Intervention , (E.FIRST_NAME ||' '|| E.LAST_NAME )as  EmployeeCompany" +
            " from DAY_WORK D, EMPLOYEE_COMPANY E  " +
            "where D.EMPLOYEE_COMPANY_ID = E.ID_EMPLOYEES_COMPANY and " +
            "E.ID_EMPLOYEES_COMPANY=(select ID_EMPLOYEES_COMPANY from EMPLOYEE_COMPANY  where CIN=:cin) ",nativeQuery = true)
    public List<days> getAllDays_R( @Param("cin") String cin)  ;

    @Query(value = " select * from day_work where D_WORK_ID=:id  ",nativeQuery = true)
    public days getDaysById_R(@Param("id") Long id)  ;



}
/*
  */