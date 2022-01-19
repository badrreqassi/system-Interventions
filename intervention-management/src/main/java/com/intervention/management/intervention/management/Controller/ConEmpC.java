package com.intervention.management.intervention.management.Controller;

import com.intervention.management.intervention.management.DOT.DOT_EmployeByServiceCompany;
import com.intervention.management.intervention.management.DOT.empC.OneEmpCDTO;
import com.intervention.management.intervention.management.DOT.empC.getAllEmpC;
import com.intervention.management.intervention.management.Entity.Employee_Company;
import com.intervention.management.intervention.management.Services.SerEmpC;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
// @CrossOrigin(origins = "http://localhost:3002")
@RestController
@RequestMapping("/CompanyEmployee")
public class ConEmpC  {
    @Autowired
    private SerEmpC serEmpC;

    @GetMapping("/hello")
    public  String hello(){
        return "Hello";
    }

    @GetMapping("/CompanyEmployees")
    public List<getAllEmpC> getAllCompanyEmployees(){
        return serEmpC.GetAllCompanyEmployees();
    }
    @GetMapping("/CompanyEmployees/{empC_id}")
    public OneEmpCDTO getOneCompanyEmployeeById(@PathVariable Long empC_id){
        return  serEmpC.GetOneCompanyEmployeeById(empC_id) ;
    }
    @PutMapping("/CompanyEmployees/update/{empC_id}/company/{company_id}")
    public Employee_Company updateCompanyEmployeeById(@PathVariable Long empC_id ,@PathVariable Long company_id,@RequestBody Employee_Company employee_company){
        return serEmpC.UpdateCompanyEmployeeById(empC_id,company_id,employee_company);
    }
    @PostMapping("/CompanyEmployees/add/{numCompany}")
    public getAllEmpC addCompanyEmployees(@PathVariable Long numCompany ,@RequestBody Employee_Company employee_company ){
        return serEmpC.AddCompanyEmployee(numCompany ,employee_company);
    }
    @DeleteMapping("/CompanyEmployees/delete/{empC_id}")
    public Boolean deleteCompanyEmployeeById(@PathVariable Long empC_id ){
        return serEmpC.DeleteCompanyEmployeeById(empC_id);
    }
    @GetMapping("/CompanyEmployees/Service/{ser}")
    public List<DOT_EmployeByServiceCompany> getAllEmployeesByServiceCompany(@PathVariable String ser){
        return serEmpC.getAllEmployeesByServiceCompany(ser);
    }
    @GetMapping("/CompanyEmployees/Email/{email}/password/{password}")
      public Map<Object,Object> findByCinAndPassWord(@PathVariable String email , @PathVariable String password){
        return  serEmpC.findByEmailAndPassWord(email,password);
    }
    @GetMapping("/CompanyEmployees/All/Technicaine")
    public List<Employee_Company> getAllTechnicaine(){
        return  serEmpC.getAlltechnicaine();
    }





}
