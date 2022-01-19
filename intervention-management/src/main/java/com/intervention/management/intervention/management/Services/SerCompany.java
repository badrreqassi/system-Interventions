package com.intervention.management.intervention.management.Services;

import com.intervention.management.intervention.management.Entity.Company;
import com.intervention.management.intervention.management.Repository.RepCompany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SerCompany {


    @Autowired
    private RepCompany repCompany;

    //Get ALl Company
    public List<Company> getAllcompanies(){
        return (List<Company>) repCompany.findAll();
    }
    // Get One Company
    public Optional<Company> getOneCompany(Long NumCompany){
        return  repCompany.findById(NumCompany);
    }
    //Add Company
    public Company addCompany(Company company){
        return repCompany.save(company);
    }

    //Update Company
    public Company updateOneCompany(Long NumCompany, Company company){
        Optional<Company> C=repCompany.findById(NumCompany);
        if(C.isPresent()){
            C.get().setNameCompany(company.getNameCompany());
            C.get().setService(company.getService());

            repCompany.save(C.get());
            return C.get();
        }
        return null;
    }
    //Delete Company
    public Long deleteCompanyById(Long NumCompany){
        Long id=NumCompany  ;
        repCompany.deleteById(NumCompany);
        return id;
    }
    // accessForCompany
    public boolean accessForCompany(String ac){
       List<Company> list = repCompany.accessForCompany(ac);
       if(list.isEmpty()){
           return false ;
       }
       return  true ;

    }



}
