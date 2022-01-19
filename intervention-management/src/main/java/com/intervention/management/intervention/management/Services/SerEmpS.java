package com.intervention.management.intervention.management.Services;

import com.intervention.management.intervention.management.Entity.Employee_Company;
import com.intervention.management.intervention.management.Entity.Employee_State;
import com.intervention.management.intervention.management.Repository.RepEmpS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class SerEmpS {
@Autowired
    private RepEmpS repEmpS;

    // Get ALL EmpS
    public List<Employee_State> GetAllEmployee_State(){
        return (List<Employee_State>) repEmpS.findAll();
    }

    //Get one Emps
    public Optional<Employee_State> GetOneEmployee_StateById(Long id_State){
        return repEmpS.findById(id_State);
    }

    // Update State Employee
    public  Employee_State UpdateStateEmployeeById(Long id_state,Employee_State employee_state){
        Optional<Employee_State> empS= repEmpS.findById(id_state);
        System.out.println("in");
        if(empS.isPresent()){
            empS.get().setFirstName(employee_state.getFirstName());
            empS.get().setLastName(employee_state.getLastName());
            empS.get().setSexe(employee_state.getSexe());
            empS.get().setAge(employee_state.getAge());
            empS.get().setCin(employee_state.getCin());
            empS.get().setPassWord(employee_state.getPassWord());
            empS.get().setJob(employee_state.getJob());
            empS.get().setOfficeNumbre(employee_state.getOfficeNumbre());
            empS.get().setPhone(employee_state.getPhone());
            repEmpS.save(empS.get());
            return empS.get();
        }
        return null;
    }
    // Add State Employees
    public Employee_State AddStateEmployee( Employee_State employee_state){
        return repEmpS.save(employee_state);
    }

    //Delete State Employees

    public boolean DeleteStateEmployeeById(Long id_State){
        repEmpS.deleteById(id_State);
        return true;
    }
    public Map<Object,Object> findByEmailAndPassWord(String email, String password) {
        List<Employee_State> emp = repEmpS.findByEmailAndPassWord(email, password);
        boolean isEmpty = false;
        if (emp.isEmpty()) {
            isEmpty = true;
        }

        HashMap<Object, Object> map = new HashMap<>();
        map.put("list", emp);
        map.put("isEmpty", isEmpty);
        return map;
    }

}



