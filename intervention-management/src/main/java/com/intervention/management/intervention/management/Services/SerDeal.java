package com.intervention.management.intervention.management.Services;

import com.intervention.management.intervention.management.Entity.Company;
import com.intervention.management.intervention.management.Entity.Deal;
import com.intervention.management.intervention.management.Entity.Employee_State;
import com.intervention.management.intervention.management.Repository.RepCompany;
import com.intervention.management.intervention.management.Repository.RepDeal;
import com.intervention.management.intervention.management.Repository.RepEmpS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SerDeal {
 @Autowired
    private RepDeal repDeal;
    @Autowired
    private RepEmpS repEmpS;
    @Autowired
    private RepCompany repCompany;

 public List<Deal> GetAllDeals(){
     return (List<Deal>) repDeal.findAll();
 }

 public Optional<Deal> GetOneDeal(Long deal_id){
     return repDeal.findById(deal_id);
 }

 public Deal UpdateDealById(Long deal_id, Deal deal ){
     Optional<Deal> d=repDeal.findById(deal_id);
     if(d.isPresent()){
         d.get().setCompany(deal.getCompany());
         d.get().setEmployee_state(deal.getEmployee_state());
         d.get().setDateStart(deal.getDateStart());
         d.get().setDateEnd(deal.getDateEnd());
         d.get().setEmployeeNumbres(deal.getEmployeeNumbres());
         d.get().setServiceType(deal.getServiceType());
         repDeal.save(d.get());
         return d.get();
     }
     return null;
 }

 public Deal AddDeal(Deal deal,Long empS_id,Long company_id){
     Optional<Employee_State> employee_state=repEmpS.findById(empS_id);
     Optional<Company> company=repCompany.findById(company_id);
     if(  employee_state.get().getJob().equals("admin")) {
         deal.setCompany(company.get());
         deal.setEmployee_state(employee_state.get());
         repDeal.save(deal);
         return deal;
     }
     return null ;

 }
 public boolean DeleteDealById(Long deal_id){
     if(repDeal.deleteByIdDEAL(deal_id)==1){
         return true;
     }
     return false;
 }
}
