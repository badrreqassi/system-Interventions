package com.intervention.management.intervention.management.Services;

import com.intervention.management.intervention.management.DOT.Compalints.ComplaintsWithNotMachine;
import com.intervention.management.intervention.management.DOT.Compalints.OneComplaintsDTO;
import com.intervention.management.intervention.management.DOT.Compalints.complaints;
import com.intervention.management.intervention.management.DOT.machine;
import com.intervention.management.intervention.management.Entity.Complain;
import com.intervention.management.intervention.management.Entity.Employee_Company;
import com.intervention.management.intervention.management.Entity.Employee_State;
import com.intervention.management.intervention.management.Entity.Machine;
import com.intervention.management.intervention.management.Repository.RepComplain;
import com.intervention.management.intervention.management.Repository.RepEmpC;
import com.intervention.management.intervention.management.Repository.RepEmpS;
import com.intervention.management.intervention.management.Repository.RepMachine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SerComplain {
    @Autowired
    private RepComplain repcomplain;
    @Autowired
    private RepMachine repMachine;
    @Autowired
    private RepEmpC repEmpC;
    @Autowired
    private RepEmpS repEmpS;


    // Get ALL Complain
    public List<complaints> getAllComplaints(){
        return repcomplain.getAllComplaints();
    }

    // findComplainByTechnicaine
    public List<complaints> findComplainByTechnicaine(String technicaine){
        return repcomplain.findComplainByTechnicaine(technicaine);
    }

    // findComplainByAssistant
    public List<complaints> findComplainByAssistant(String assistant){
        return repcomplain.findComplainByAssistant(assistant);
    }

    // findComplainById
    public  complaints findComplainById(Long id){
        return repcomplain.findComplainById(id);
    }
    // findCompleteComplainByTechnicaine
    public List<complaints> findCompleteComplainByTechnicaine(String cin){
        return repcomplain.findCompleteComplainByTechnicaine(cin);
    }
    // findNotCompleteComplainByTechnicaine

    public List<complaints> findNotCompleteComplainByTechnicaine(String cin){
        return repcomplain.findNotCompleteComplainByTechnicaine(cin);
    }

    // Get One Complain
    public OneComplaintsDTO GetOneComplainById(Long complain_id){
        OneComplaintsDTO oneComplaintsDTO=new  OneComplaintsDTO();
        System.out.println("hi");
        Optional<Complain> C = repcomplain.findById(complain_id);
        ComplaintsWithNotMachine complaintsWithNotMachine=  repcomplain.findComplaintsByIdWithNotFK(complain_id);
        Optional<Employee_Company> employee_company =repEmpC.findById(C.get().getEmployee_company().getEmp());
        Optional<Employee_State> employee_state =repEmpS.findById(C.get().getEmployee_state().getEmp());
        machine m = repMachine.getMachineById(C.get().getMachine().getMachine_id());
        oneComplaintsDTO.setComplaints(complaintsWithNotMachine);
        oneComplaintsDTO.setEmployee_company(employee_company.get());
        oneComplaintsDTO.setEmployee_state(employee_state.get());
        oneComplaintsDTO.setMachine(m);

        return oneComplaintsDTO ;
    }
    // update Complain
    public complaints UpdateComplainById(Long complain_id ,Long empC_id,Long empS_id,Long machine_id,Complain complain ){
        Optional<Complain> complain1=repcomplain.findById(complain_id);
        Optional<Employee_Company> empC=repEmpC.findById(empC_id);
        Optional<Employee_State> empS=repEmpS.findById(empS_id);
        Optional<Machine> machine =repMachine.findById(machine_id);

        if(complain1.isPresent()){
            complain1.get().setDateComplain(complain.getDateComplain());
            complain1.get().setTypeComplain(complain.getTypeComplain());
            complain1.get().setDescriptionComplain(complain.getDescriptionComplain());
            complain1.get().setEmployee_company(empC.get());
            complain1.get().setMachine(machine.get());
            complain1.get().setEmployee_state(empS.get());
            complain1.get().setStatus(complain.getStatus());

            repcomplain.save(complain1.get());
            return  repcomplain.findComplainById(complain1.get().getComplain_id()) ;
        }
        return null;
    }

    // delete Complain

    public  Long  DeleteComplainById(Long complain_id){
        Long id= complain_id ;
        repcomplain.deleteByIdComplain(complain_id);
        return id;
    }

    // add Complain
    public complaints AddComplain(Complain complain,Long empC_id,Long empS_id,Long machine_id ,Long assistant ){
        Optional<Employee_Company> employee_company=repEmpC.findById(empC_id);
        Optional<Employee_Company> Assistant =repEmpC.findById(assistant);
        Optional<Employee_State> employee_state=repEmpS.findById(empS_id);
        Optional<Machine> machine=repMachine.findById(machine_id);
        complain.setEmployee_state(employee_state.get());
        complain.setEmployee_company(employee_company.get());
        complain.setAssistant(Assistant.get());
        complain.setMachine(machine.get());
        repcomplain.save(complain);

        return  repcomplain.findComplainById(complain.getComplain_id());
    }






}
/*
* public List<Complain> GetAllComplain(){
        return (List<Complain>) repcomplain.findAll();
    }
    public List<complaints> GetAllComplain_R(){
        return repcomplain.getAllComplaints_R()  ;
    }

    // Get One Complain
    public OneComplaintsDTO GetOneComplainById(Long complain_id){
        OneComplaintsDTO oneComplaintsDTO=new  OneComplaintsDTO();
           Optional<Complain> C = repcomplain.findById(complain_id);
        ComplaintsWithNotMachine complaintsWithNotMachine=  repcomplain.findComplaintsById(complain_id);
        Optional<Employee_Company> employee_company =repEmpC.findById(C.get().getEmployee_company().getEmp());
        Optional<Employee_State> employee_state =repEmpS.findById(C.get().getEmployee_state().getEmp());
        machine m = repMachine.getMachineById(C.get().getMachine().getMachine_id());
        oneComplaintsDTO.setComplaints(complaintsWithNotMachine);
        oneComplaintsDTO.setEmployee_company(employee_company.get());
        oneComplaintsDTO.setEmployee_state(employee_state.get());
        oneComplaintsDTO.setMachine(m);

        return oneComplaintsDTO ;
    }

    // update Complain
    public complaints UpdateComplainById(Long complain_id ,Long empC_id,Long empS_id,Long machine_id,Complain complain ){
        Optional<Complain> complain1=repcomplain.findById(complain_id);
        Optional<Employee_Company> empC=repEmpC.findById(empC_id);
        Optional<Employee_State> empS=repEmpS.findById(empS_id);
        Optional<Machine> machine =repMachine.findById(machine_id);

        if(complain1.isPresent()){
            complain1.get().setDateComplain(complain.getDateComplain());
            complain1.get().setTypeComplain(complain.getTypeComplain());
            complain1.get().setDescriptionComplain(complain.getDescriptionComplain());
            complain1.get().setEmployee_company(empC.get());
            complain1.get().setMachine(machine.get());
            complain1.get().setEmployee_state(empS.get());
            complain1.get().setStatus(complain.getStatus());

            repcomplain.save(complain1.get());
            return  repcomplain.findComplainById_R(complain1.get().getComplain_id()) ;
        }
        return null;
    }
    // add Complain
    public complaints AddComplain(Complain complain,Long empC_id,Long empS_id,Long machine_id){
        Optional<Employee_Company> employee_company=repEmpC.findById(empC_id);
        Optional<Employee_State> employee_state=repEmpS.findById(empS_id);
        Optional<Machine> machine=repMachine.findById(machine_id);
        complain.setEmployee_state(employee_state.get());
        complain.setEmployee_company(employee_company.get());
        complain.setMachine(machine.get());
        repcomplain.save(complain);

        return  repcomplain.findComplainById_R(complain.getComplain_id());
    }
    // delete Complain

    public  Long  DeleteComplainById(Long complain_id){
        Long id= complain_id ;
      repcomplain.deleteByIdComplain(complain_id);
       return id;
    }
    // findComplainByEmpC
    public List<Complain> findComplainByEmpC(String cin){
        return repcomplain.findComplainByEmpC(cin);
    }
    // findComplainByEmpC R
    public List<complaints> findComplainByEmpC_R(String cin){
        return repcomplain.findComplainByEmpC_R(cin);
    }

    // findComplainByEmpCNotComplete
    public List<complaints> findComplainByEmpCNotComplete(String cin){
        return repcomplain.findComplainByEmpCNotComplete(cin);
    }


    // findComplainByEmpCNotComplete
    public List<complaints> findComplainByEmpC_Complete(String cin){
        return repcomplain.findComplainByEmpC_Complete(cin);
    }

    // findComplainByEmpCNotComplete_R
    public List<complaints> findComplainByEmpCNotComplete_R(String cin){
        return repcomplain.findComplainByEmpCNotComplete_R(cin);
    }*/
