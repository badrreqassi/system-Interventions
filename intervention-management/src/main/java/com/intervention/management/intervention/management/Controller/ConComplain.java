package com.intervention.management.intervention.management.Controller;

import com.intervention.management.intervention.management.DOT.Compalints.OneComplaintsDTO;
import com.intervention.management.intervention.management.DOT.Compalints.complaints;
import com.intervention.management.intervention.management.Entity.Complain;
import com.intervention.management.intervention.management.Services.SerComplain;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Complain")
public class ConComplain {
    @Autowired
    private SerComplain serComplain;

    @GetMapping("/hello")
    public String hello() {
        return "Hello";
    }

    @GetMapping("/Complaints")
    public List<complaints> getAllComplaints() {
        return serComplain.getAllComplaints();
    }

    @GetMapping("/Complaints/{id}")
    public   complaints   findComplainById(@PathVariable Long id) {
        return serComplain.findComplainById(id);
    }

    @GetMapping("/Complaints/Technicaine/{technicaine}")
    public  List<complaints>  findComplainByTechnicaine(@PathVariable String technicaine) {
        return serComplain.findComplainByTechnicaine(technicaine);
    }

    @GetMapping("/Complaints/Assistant/{Assistant}")
    public  List<complaints>  findComplainByAssistant(@PathVariable String Assistant) {
        return serComplain.findComplainByAssistant(Assistant);
    }

    @GetMapping("/Complaints/CompleteComplain/Technicaine/{cin}")
    public List<complaints> findCompleteComplainByTechnicaine(@PathVariable String cin){
        return serComplain.findCompleteComplainByTechnicaine(cin);
    }

    @GetMapping("/Complaints/NotCompleteComplain/Technicaine/{cin}")
    public List<complaints> findNotCompleteComplainByTechnicaine(@PathVariable String cin){
        return serComplain.findNotCompleteComplainByTechnicaine(cin);
    }

    @GetMapping("/Complaints/DT0/{complain_id}")
    private OneComplaintsDTO getOneComplainByIdDTO(@PathVariable Long complain_id) {
        return serComplain.GetOneComplainById(complain_id);
    }

    @PutMapping("/Complaints/update/{complain_id}/{empC_id}/{empS_id}/{machine_id}")
    public complaints updateComplainById(@PathVariable Long complain_id, @PathVariable Long empC_id, @PathVariable Long empS_id, @PathVariable Long machine_id, @RequestBody Complain complain) {
        return serComplain.UpdateComplainById(complain_id, empC_id, empS_id, machine_id, complain);
    }

    @DeleteMapping("/Complaints/delete/{complain_id}")
    public Long deleteComplainById(@PathVariable Long complain_id) {
        return serComplain.DeleteComplainById(complain_id);
    }

    @PostMapping("/Complaints/add/{empC_id}/{empS_id}/{machine_id}/{assistant}")
    public complaints addComplain(@RequestBody Complain complain, @PathVariable Long empC_id, @PathVariable Long empS_id, @PathVariable Long machine_id , @PathVariable Long assistant) {
        return serComplain.AddComplain(complain, empC_id, empS_id, machine_id,assistant);
    }

}

/*
 @GetMapping("/Complaints")
    public List<Complain> getAllComplaints() {
        return serComplain.GetAllComplain();
    }

    @GetMapping("/Complaints/R")
    public List<complaints> getAllComplaints_R() {
        return serComplain.GetAllComplain_R();
    }

    @GetMapping("/Complaints/{complain_id}")
    private OneComplaintsDTO getOneComplainById(@PathVariable Long complain_id) {
        return serComplain.GetOneComplainById(complain_id);
    }

    @PutMapping("/Complaints/update/{complain_id}/{empC_id}/{empS_id}/{machine_id}")
    public complaints updateComplainById(@PathVariable Long complain_id, @PathVariable Long empC_id, @PathVariable Long empS_id, @PathVariable Long machine_id, @RequestBody Complain complain) {
        return serComplain.UpdateComplainById(complain_id, empC_id, empS_id, machine_id, complain);
    }



    @DeleteMapping("/Complaints/delete/{complain_id}")
    public Long deleteComplainById(@PathVariable Long complain_id) {
        return serComplain.DeleteComplainById(complain_id);
    }

    @GetMapping("/Complaints/companyEmployee/{cin}")
    public List<Complain> findComplainByEmpC(@PathVariable String cin) {
        return serComplain.findComplainByEmpC(cin);
    }

    @GetMapping("/Complaints/companyEmployee/R/{cin}")
    public List<complaints> findComplainByEmpC_R(@PathVariable String cin ) {
        return serComplain.findComplainByEmpC_R(cin);
    }

    @GetMapping("/Complaints/NotComplete/companyEmployee/{cin}")
    public List<complaints> findComplainByEmpCNotComplete(@PathVariable String cin) {
        return serComplain.findComplainByEmpCNotComplete(cin);
    }

    @GetMapping("/Complaints/Complete/companyEmployee/{cin}")
    public List<complaints> findComplainByEmpC_Complete(@PathVariable String cin ) {
        return serComplain.findComplainByEmpC_Complete(cin);
    }

    @GetMapping("/Complaints/NotComplete/companyEmployee/R/{cin}")
    public List<complaints> findComplainByEmpCNotComplete_R(@PathVariable String cin) {
        return serComplain.findComplainByEmpCNotComplete_R(cin);
    }

    */
