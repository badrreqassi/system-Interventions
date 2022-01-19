package com.intervention.management.intervention.management.Repository;

import com.intervention.management.intervention.management.DOT.tablesName;
import com.intervention.management.intervention.management.Entity.AccessTables;

import com.intervention.management.intervention.management.Entity.OutTables;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RepAccess  extends CrudRepository<AccessTables,Long> {
   @Query( value = " select O.NAME_TABLE from ACCESS_TABLES A ,OUT_TABLES O  where A.TABLES_ID=O.ID_TABLE and A.CIN_USER=:cn",nativeQuery = true)
    public List<tablesName> getAccess(@Param("cn") String cinUser ) ;
@Query(value = "DELETE from ACCESS_TABLES where CIN_USER=:cin",nativeQuery = true)
    public boolean deleteByCin(@Param("cin") String cin);

}
