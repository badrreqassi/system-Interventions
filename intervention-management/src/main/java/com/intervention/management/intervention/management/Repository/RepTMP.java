package com.intervention.management.intervention.management.Repository;

import com.intervention.management.intervention.management.Entity.TMP;
import com.intervention.management.intervention.management.Entity.TMP_ID;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.Date;

public interface RepTMP extends CrudRepository<TMP,TMP_ID> {

    @Modifying
    @Transactional
    @Query(value = "DELETE from TMP where machine_machine_id=:mc_id and piece_id=:pc_id and treatment_id=:tr_id ",nativeQuery = true)
    public int deleteByIdTmp(@Param("mc_id") Long machine_machine_id ,@Param("pc_id") Long piece_id ,@Param("tr_id") Long treatment_id) ;

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO TMP (DATETMP, MACHINE_MACHINE_ID, PIECE_ID, TREATMENT_ID) VALUES (:dtmp ,:mc_id, :pc_id, :tr_id)",nativeQuery = true)
     int insertRowInTMP(@Param("dtmp")Date dateTmp ,@Param("mc_id") Long machine_machine_id ,@Param("pc_id") Long piece_id ,@Param("tr_id") Long treatment_id) ;


    @Modifying
    @Transactional
    @Query(value = "UPDATE TMP set DATETMP =:dtmp where machine_machine_id=:mc_id and piece_id=:pc_id and treatment_id=:tr_id ",nativeQuery = true)
    int updateRowInTMP(@Param("dtmp")Date dateTmp ,@Param("mc_id") Long machine_machine_id ,@Param("pc_id") Long piece_id ,@Param("tr_id") Long treatment_id) ;


}
