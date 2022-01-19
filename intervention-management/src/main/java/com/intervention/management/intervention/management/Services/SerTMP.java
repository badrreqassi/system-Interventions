package com.intervention.management.intervention.management.Services;

import com.intervention.management.intervention.management.Entity.*;
import com.intervention.management.intervention.management.Repository.RepMachine;
import com.intervention.management.intervention.management.Repository.RepPiece;
import com.intervention.management.intervention.management.Repository.RepTMP;
import com.intervention.management.intervention.management.Repository.RepTreatment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SerTMP {
    @Autowired
    private RepTMP repTMP;
    @Autowired
    private RepTreatment reptreatment;
    @Autowired
    private RepMachine repmachine;
    @Autowired
    private RepPiece repPiece;

    public List<TMP> GetALL() {
        return (List<TMP>) repTMP.findAll();
    }

    public TMP AddTMP(TMP tmp, Long machine_id, Long piece_id, Long treatment_id) {
        Optional<TMP> tmp1 = null;
        Optional<Machine> machine = repmachine.findById(machine_id);
        Optional<Piece> piece = repPiece.findById(piece_id);
        Optional<Treatment> treatment = reptreatment.findById(treatment_id);
        if(  repTMP.insertRowInTMP(tmp.getDateTMP(),machine_id,piece_id,treatment_id)==1){
            tmp1= repTMP.findById(new TMP_ID(machine.get(),piece.get(),treatment.get()));
        }
        return  tmp1.get();
    }

    public TMP UpdateTMP(TMP tmp, Long machine_id, Long piece_id, Long treatment_id ) {
        Optional<TMP> tmp1 = null;
        Optional<Machine> machine = repmachine.findById(machine_id);
        Optional<Piece> piece = repPiece.findById(piece_id);
        Optional<Treatment> treatment = reptreatment.findById(treatment_id);
        Optional<TMP> tmps=repTMP.findById(new TMP_ID(machine.get(),piece.get(),treatment.get()));
        if(repTMP.updateRowInTMP(tmp.getDateTMP(),machine_id,piece_id,treatment_id)==1){
            tmp1= repTMP.findById(new TMP_ID(machine.get(),piece.get(),treatment.get()));
        }


        return tmp1.get();
    }

    public int DeleteTMP(Long machine_id, Long piece_id, Long treatment_id) {
       // System.out.println("TMP:{"+repTMP.findById(new TMP_ID(machine.get(),piece.get(),treatment.get()))+"}");
        repTMP.deleteByIdTmp(machine_id,piece_id,treatment_id);

        return  1;
    }
}
