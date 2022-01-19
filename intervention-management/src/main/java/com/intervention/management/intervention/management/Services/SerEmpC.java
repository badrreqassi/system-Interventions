package com.intervention.management.intervention.management.Services;

import com.intervention.management.intervention.management.DOT.DOT_EmployeByServiceCompany;
import com.intervention.management.intervention.management.DOT.empC.OneEmpCDTO;
import com.intervention.management.intervention.management.DOT.empC.getAllEmpC;
import com.intervention.management.intervention.management.Entity.Company;
import com.intervention.management.intervention.management.Entity.Employee_Company;
import com.intervention.management.intervention.management.Repository.RepCompany;
import com.intervention.management.intervention.management.Repository.RepEmpC;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class SerEmpC {
@Autowired
    private RepEmpC repEmpC;
    @Autowired
     private RepCompany repCompany;

     // Get ALL Company Employees

    public List<getAllEmpC> GetAllCompanyEmployees(){
        return repEmpC.getAllEmpC_R();
    }
    // Get One Company Employee
    public OneEmpCDTO GetOneCompanyEmployeeById(Long empC_id){
        OneEmpCDTO dto= new OneEmpCDTO();
        Optional<Employee_Company> employee_company=repEmpC.findById(empC_id);
        Optional<Company> company= repCompany.findById(employee_company.get().getCompany().getNumCompany());
        dto.setCompany(company.get());
        getAllEmpC empC=repEmpC.getEmpCById_R(empC_id);
        dto.setEmpC(empC);
        return dto;
    }
    // update Company Employee
    public Employee_Company UpdateCompanyEmployeeById(Long empC_id ,Long company_id ,Employee_Company employee_company ){
       Optional<Employee_Company> empC= repEmpC.findById(empC_id);
        Optional<Company> company= repCompany.findById(company_id);

       if(empC.isPresent()){
           empC.get().setCin(employee_company.getCin());
           empC.get().setPassWord(employee_company.getPassWord());
           empC.get().setFirstName(employee_company.getFirstName());
           empC.get().setLastName(employee_company.getLastName());
           empC.get().setSexe(employee_company.getSexe());
           empC.get().setAge(employee_company.getAge());
           empC.get().setJob(employee_company.getJob());
           empC.get().setOfficeNumbre(employee_company.getOfficeNumbre());
           empC.get().setPhone(employee_company.getPhone());
           empC.get().setCompany(company.get());
           repEmpC.save(empC.get());
           return empC.get();

       }
       return null;
    }
    // add Company Employee
    public getAllEmpC AddCompanyEmployee(Long numCompany , Employee_Company employee_company){
        Optional<Company> company = repCompany.findById(numCompany);
        employee_company.setCompany(company.get());
       repEmpC.save(employee_company);
        return  repEmpC.getEmpCById_R(employee_company.getEmp());
    }
    // delete Company Employee

    public boolean DeleteCompanyEmployeeById(Long EmpC) {
        if (repEmpC.deleteByIdEmpC(EmpC) == 1) {
            return true;
        }
        return false;
    }



    public List<DOT_EmployeByServiceCompany> getAllEmployeesByServiceCompany(String ser){
        List<DOT_EmployeByServiceCompany> ob1=repEmpC.getAllEmployeesByServiceCompany(ser);
       ob1.forEach(ob11 -> System.out.println("Cin  : "+ob11.getCin() + "  Company name : "+ob11.getNameCompany()));
        return repEmpC.getAllEmployeesByServiceCompany(ser);
    }

    //  findByCin
    public Map<Object,Object> findByEmailAndPassWord(String email, String password) {
        List<Employee_Company> emp = repEmpC.findByEmailAndPassWord(email, password);
        boolean isEmpty = false;
        if (emp.isEmpty()) {
            isEmpty = true;
        }

        HashMap<Object, Object> map = new HashMap<>();
        map.put("list", emp);
        map.put("isEmpty", isEmpty);
        return map;
                    }

    //   emp c  technicaine

    public List<Employee_Company>  getAlltechnicaine(){
        return repEmpC.getAllTechnicaine();
    }

    }


