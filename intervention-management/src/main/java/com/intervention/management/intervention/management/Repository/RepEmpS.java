package com.intervention.management.intervention.management.Repository;

import com.intervention.management.intervention.management.Entity.Employee_Company;
import com.intervention.management.intervention.management.Entity.Employee_State;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RepEmpS extends CrudRepository<Employee_State,Long> {
    @Query(value = "select * from Employee_State where email =:email and pass_word=:password ",nativeQuery = true)
    public List<Employee_State> findByEmailAndPassWord(@Param("email") String Cin , @Param("password") String password);
}
