package com.intervention.management.intervention.management.Controller;

import com.intervention.management.intervention.management.Entity.Company;
import com.intervention.management.intervention.management.Services.SerCompany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Company")
  @CrossOrigin(origins = "http://localhost:3000")
public class ConCompany {

    @Autowired
    private SerCompany serCompany;
    @GetMapping("/hello")
    public  String hello(){
        return "Hello";
    }


    @GetMapping("/companies")
    public List<Company> GetAllCompanies(){
        return serCompany.getAllcompanies();
    }

    @GetMapping("/companies/{numCompany}")
    public Optional<Company> GetOneCompany(@PathVariable Long numCompany){
        return serCompany.getOneCompany(numCompany);
    }

    @PostMapping("/companies/add")
    public Company AddCompany(@RequestBody Company company){
        return serCompany.addCompany(company);
    }

    @PutMapping("/companies/update/{numCompany}")
    public Company UpdateOneCompanyById(@PathVariable Long numCompany, @RequestBody Company company ){
        return serCompany.updateOneCompany(numCompany,company);
    }

    @DeleteMapping("/companies/delete/{numCompany}")
    public Long DeleteCompanyById( @PathVariable Long numCompany ){
        return serCompany.deleteCompanyById(numCompany);
    }

    @GetMapping("/companies/accessForCompany/{ac}")
    public  boolean accessForCompany(@PathVariable String ac){
        return serCompany.accessForCompany(ac);
    }


}
