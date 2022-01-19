package com.intervention.management.intervention.management.Repository;

import com.intervention.management.intervention.management.Entity.OutTables;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RepOurTables extends CrudRepository<OutTables,Long> {
    @Query(value = "select T.* from  OUT_TABLES T " +
            "where   T.NAME_TABLE NOT IN (select O.NAME_TABLE from OUT_TABLES O ," +
            " ACCESS_TABLES A  where O.ID_TABLE=A.TABLES_ID  " +
            "and A.CIN_USER=:cin)",nativeQuery = true)

    public List<OutTables> getAllTableNameOfEmpC(@Param("cin") String cin);
}
