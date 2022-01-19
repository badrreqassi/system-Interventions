package com.intervention.management.intervention.management.Repository;

import com.intervention.management.intervention.management.DOT.machine;
import com.intervention.management.intervention.management.Entity.DayWork;
import com.intervention.management.intervention.management.Entity.Machine;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RepMachine extends CrudRepository<Machine,Long> {

@Query(value = "select M.MACHINE_ID, M.DATE_OF_DEATH as DateOfDeath  , M.DATE_OF_NORMAL_TREATMENT as DateOfNormalTreatment ," +
        "M.MACHINE_NAME as MachineName  ,M.NUM_MACHINE as  NumMachine  , M.START_DATE as StartDate" +
        "  , M.statue from machine M ",nativeQuery = true)
    public  List<machine> getAllMachine();

    @Query(value = "select M.MACHINE_ID, M.DATE_OF_DEATH as DateOfDeath  , M.DATE_OF_NORMAL_TREATMENT as DateOfNormalTreatment ," +
            "M.MACHINE_NAME as MachineName  ,M.NUM_MACHINE as  NumMachine  , M.START_DATE as StartDate" +
            "  , M.statue from machine M  where M.MACHINE_ID=:machine_id",nativeQuery = true)
    public  machine getMachineById(@Param("machine_id") Long machine_id);
}
