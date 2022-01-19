package com.intervention.management.intervention.management.Controller;

import com.intervention.management.intervention.management.DOT.CalendarIn;
import com.intervention.management.intervention.management.DOT.OneTreatmentDTO;
import com.intervention.management.intervention.management.DOT.treatment;
import com.intervention.management.intervention.management.Entity.Treatment;
import com.intervention.management.intervention.management.Services.SerTreatment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Treatment")
@CrossOrigin(origins = "http://localhost:3000")
public class ConTreatment {
    @Autowired
    private SerTreatment serTreatment ;
    @GetMapping("/Treatments")
    public List<Treatment> getAllTreatment(){
        return serTreatment.GetAlTreatment();
    }

    @GetMapping("/Treatments/R/{cin}")
    public List<treatment> getAllTreatment_R(@PathVariable  String cin){
        return serTreatment.GetAlTreatment_R(cin) ;
    }

    @GetMapping("/Treatments/{treatment_id}")
    public OneTreatmentDTO getOneTreatmentBiId(@PathVariable Long treatment_id){
        return serTreatment.GetOneTreatmentById(treatment_id);
    }
    @PutMapping("/Treatments/update/{treatment_id}/{empC_id}/{complain_id}")
    public treatment updateTreatmentById(@PathVariable Long treatment_id ,@PathVariable Long complain_id,@PathVariable Long empC_id,@RequestBody Treatment treatment){
        return  serTreatment.UpdateTreatmentById(treatment_id,complain_id,empC_id,treatment);
    }
    @PostMapping("/Treatments/add/{empC_id}/{complain_id}")
    public treatment addTreatment(@RequestBody Treatment  treatment,@PathVariable Long empC_id,@PathVariable Long complain_id){
        return serTreatment.AddTreatment(treatment,empC_id,complain_id);
    }
    @DeleteMapping("/Treatments/delete/{treatment_id}")
    public Long  deleteTreatment(@PathVariable Long treatment_id){
        return serTreatment.DeleteCompanyEmployeeById(treatment_id);
    }
    @GetMapping("/Treatments/Intervention")
    public  List<CalendarIn>  getAllIntervention(){
        return serTreatment.getALLIntervention();
    }



}
