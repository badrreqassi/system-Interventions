package com.intervention.management.intervention.management.Services;

import com.intervention.management.intervention.management.DOT.machine;
import com.intervention.management.intervention.management.Entity.Machine;
import com.intervention.management.intervention.management.Repository.RepMachine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SerMachine {
@Autowired
    private RepMachine repmachine;

public List<machine> GetAllMachines(){
    return  repmachine.getAllMachine();
}

public machine GetMachineById(Long machine_id){

    return repmachine.getMachineById(machine_id);
}
public Machine UpdateMachineById(Long  machine_id,Machine machine){
    Optional<Machine> m=repmachine.findById(machine_id);
    if(m.isPresent()){
        m.get().setMachineName(machine.getMachineName());
        m.get().setNumMachine(machine.getNumMachine());
        m.get().setDateOfNormalTreatment(machine.getDateOfNormalTreatment());
        m.get().setStatue(machine.getStatue());
        m.get().setStartDate(machine.getStartDate());
        m.get().setDateOfDeath(machine.getDateOfDeath());

        return repmachine.save(m.get());
    }
    return null;
}
public Machine AddMachine(Machine machine){
    return repmachine.save(machine);
}

public Long DeleteMachineById(Long machine_id){
    Long id= machine_id ;
     repmachine.deleteById(machine_id);
    return id ;
}




}
