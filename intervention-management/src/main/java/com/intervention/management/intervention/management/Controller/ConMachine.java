package com.intervention.management.intervention.management.Controller;

import com.intervention.management.intervention.management.DOT.machine;
import com.intervention.management.intervention.management.Entity.Machine;
import com.intervention.management.intervention.management.Services.SerMachine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Machine")
@CrossOrigin(origins = "http://localhost:3000")
public class ConMachine {
    @Autowired
    private SerMachine sermachine;

    @GetMapping("/hello")
    public  String hello(){
        return "Hello";
    }

    @GetMapping("/Machines")
    public List<machine> getAllMachines(){
        return sermachine.GetAllMachines();
    }
    @GetMapping("/Machines/{machine_id}")
    public machine getMachineById(@PathVariable Long machine_id){
        return sermachine.GetMachineById(machine_id);
    }

    @PutMapping("/Machines/update/{machine_id}")
    public Machine updateMachineById( @PathVariable Long machine_id,@RequestBody Machine machine){
        return sermachine.UpdateMachineById(machine_id,machine);
    }
    @PostMapping("/Machines/add")
    public Machine addMachine(@RequestBody Machine machine){
        return sermachine.AddMachine(machine);
    }
    @DeleteMapping("/Machines/delete/{machine_id}")
    public Long deleteMachineById(@PathVariable Long machine_id){
        return sermachine.DeleteMachineById(machine_id);
    }





}
