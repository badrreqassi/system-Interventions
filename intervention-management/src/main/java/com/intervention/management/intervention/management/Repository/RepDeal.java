package com.intervention.management.intervention.management.Repository;

import com.intervention.management.intervention.management.Entity.Deal;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface RepDeal extends CrudRepository<Deal,Long> {
    @Modifying
    @Transactional
    @Query(value = "DELETE FROM DEAL where DEAL_ID =:de_id",nativeQuery = true)
    int deleteByIdDEAL(@Param("de_id") Long treatment_id);
}
