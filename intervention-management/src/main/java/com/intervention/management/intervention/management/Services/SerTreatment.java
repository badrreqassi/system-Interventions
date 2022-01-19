package com.intervention.management.intervention.management.Services;

import com.intervention.management.intervention.management.DOT.*;
import com.intervention.management.intervention.management.DOT.Compalints.complaints;
import com.intervention.management.intervention.management.Entity.Complain;
import com.intervention.management.intervention.management.Entity.Employee_Company;
import com.intervention.management.intervention.management.Entity.Treatment;
import com.intervention.management.intervention.management.Repository.RepComplain;
import com.intervention.management.intervention.management.Repository.RepEmpC;
import com.intervention.management.intervention.management.Repository.RepTreatment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SerTreatment {
    @Autowired
    private RepTreatment reptreatment;
    @Autowired
    private RepEmpC repEmpC;
    @Autowired
    private RepComplain repcomplain;


    // Get ALL Treatment

    public List<Treatment> GetAlTreatment(){
        return (List<Treatment>) reptreatment.findAll();
    }

    // Get ALL Treatment R

    public List<treatment> GetAlTreatment_R(String cin){
        return   reptreatment.getAllTreatments_R(cin);
    }
    // Get One Treatment
    public OneTreatmentDTO GetOneTreatmentById(Long treatment_id){
        OneTreatmentDTO DTO=new OneTreatmentDTO();
        Optional<Treatment> T=reptreatment.findById(treatment_id);
        Optional<Employee_Company> employee_company=repEmpC.findById(T.get().getEmployee_company().getEmp());
        complaints complaints=repcomplain.findComplainById(T.get().getComplain().getComplain_id());
        TreatmentsWithNotFK treatmentsWithNotFK =reptreatment.getTreatmentsById(treatment_id);
        DTO.setTreatments(treatmentsWithNotFK);
         DTO.setComplaints(complaints);
        DTO.setEmployee_company(employee_company.get());

        return DTO ;
    }
    // update Treatment
    public treatment UpdateTreatmentById(Long treatment_id ,Long complain_id,Long empC_id, Treatment treatment ){
        Optional<Treatment> treatment1=reptreatment.findById(treatment_id);
        Optional<Complain> complain=repcomplain.findById(complain_id);
        Optional<Employee_Company> employee_company=repEmpC.findById(empC_id);

        if(treatment1.isPresent()){
            treatment1.get().setStartTreatment(treatment.getStartTreatment());
            treatment1.get().setDescription_Treatment(treatment.getDescription_Treatment());
            treatment1.get().setTreatmentEnd(treatment.getTreatmentEnd());
            treatment1.get().setComplain(complain.get());
            treatment1.get().setEmployee_company(employee_company.get());
          //  treatment1.get().setStatus(treatment.getStatus());
            reptreatment.save(treatment1.get());
            return  reptreatment.getTreatmentById_R(treatment1.get().getTreatment_id()) ;
        }
        return null;
    }
    // add Treatment
    public treatment AddTreatment(Treatment treatment,Long empC_id,Long complain_id){
        Optional<Employee_Company> employee_company=repEmpC.findById(empC_id);
        Optional<Complain> complain =repcomplain.findById(complain_id);
        treatment.setEmployee_company(employee_company.get());
        treatment.setComplain(complain.get());
        reptreatment.save(treatment);
        return reptreatment.getTreatmentById_R(treatment.getTreatment_id()) ;

    }
    // delete Treatment

    public Long DeleteCompanyEmployeeById(Long treatment_id){
        Long id= treatment_id ;
    reptreatment.deleteByIdTreatment(treatment_id) ;

    return  id;

    }



    // getAllIntervention
    public  List<CalendarIn> getALLIntervention(){
        return  reptreatment.getAllIntervention();
    }






}
