package com.intervention.management.intervention.management.Repository;

import com.intervention.management.intervention.management.Entity.Company;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface RepCompany extends CrudRepository<Company,Long> {
@Query(value = " select * from company  where access_For_Company=:ac",nativeQuery = true)
public List<Company> accessForCompany(@Param("ac") String ac)  ;
}
