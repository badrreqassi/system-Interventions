package com.intervention.management.intervention.management.Controller;

import com.intervention.management.intervention.management.Entity.TMP;
import com.intervention.management.intervention.management.Entity.TMP_ID;
import com.intervention.management.intervention.management.Services.SerTMP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class ConTMP {
    @Autowired
    private SerTMP serTMP;

    @GetMapping("/hello")
    public  String hello(){
        return "Hello";
    }


    @GetMapping("/TMP")
    public List<TMP> getAll(){
        return serTMP.GetALL();
    }


    @PutMapping("/TMP/update/{machine_id}/{piece_id}/{treatment_id}")
    public TMP updateTMP(@RequestBody TMP tmp, @PathVariable Long machine_id, @PathVariable Long piece_id, @PathVariable Long treatment_id){
        return serTMP.UpdateTMP(tmp,machine_id,piece_id,treatment_id);
    }

    @PostMapping("TMP/add/{machine_id}/{piece_id}/{treatment_id}")
    public TMP addTMP(@RequestBody  TMP tmp, @PathVariable Long machine_id,@PathVariable Long piece_id, @PathVariable Long treatment_id){
        return serTMP.AddTMP(tmp,machine_id,piece_id,treatment_id);
    }

    @DeleteMapping("/TMP/delete/{machine_id}/{piece_id}/{treatment_id}")
    public int  deleteTMP(@PathVariable Long machine_id,@PathVariable Long piece_id, @PathVariable Long treatment_id){
        return serTMP.DeleteTMP(machine_id,piece_id,treatment_id);
    }

}
