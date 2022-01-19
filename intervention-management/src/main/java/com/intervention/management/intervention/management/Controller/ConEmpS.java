package com.intervention.management.intervention.management.Controller;

import com.intervention.management.intervention.management.Entity.Employee_Company;
import com.intervention.management.intervention.management.Entity.Employee_State;
import com.intervention.management.intervention.management.Services.SerEmpS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/EmployeeState")
public class ConEmpS {
    @Autowired
    private SerEmpS serEmpS;

    @GetMapping("/hello")
    public  String hello(){
        return "Hello";
    }

    @GetMapping("/stateEmployees/")
    public List<Employee_State> getAllStatEemployees(){
        return serEmpS.GetAllEmployee_State();
    }
    @GetMapping("/stateEmployees/{id_state}")
  private Optional<Employee_State> getOneStatEemployeeById(@PathVariable Long id_state){
        return serEmpS.GetOneEmployee_StateById(id_state);
    }
     @PutMapping("/stateEmployees/update/{id_state}")
    public Employee_State updateStateEmployeeById(@PathVariable Long id_state, @RequestBody Employee_State employee_state){
        return serEmpS.UpdateStateEmployeeById(id_state,employee_state);
     }
     @PostMapping("/stateEmployees/add")
    public Employee_State addStateEmployees(@RequestBody Employee_State employee_state){
        return serEmpS.AddStateEmployee(employee_state);
     }
     @DeleteMapping("/stateEmployees/delete/{id_state}")
     public  boolean deleteStateEmployeeById(@PathVariable Long id_state){
        return serEmpS.DeleteStateEmployeeById(id_state);
     }
    @GetMapping("/stateEmployees/Email/{email}/password/{password}")
    public Map<Object,Object> findByCinAndPassWord(@PathVariable String email , @PathVariable String password){
        return  serEmpS.findByEmailAndPassWord(email,password);
    }



}
