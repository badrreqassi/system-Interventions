package com.intervention.management.intervention.management.Services;

import com.intervention.management.intervention.management.DOT.OnePieceDTO;
import com.intervention.management.intervention.management.DOT.PieceWithNotMachineId;
import com.intervention.management.intervention.management.DOT.machine;
import com.intervention.management.intervention.management.DOT.piece;
import com.intervention.management.intervention.management.Entity.Machine;
import com.intervention.management.intervention.management.Entity.Piece;
import com.intervention.management.intervention.management.Repository.RepMachine;
import com.intervention.management.intervention.management.Repository.RepPiece;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SerPiece {
    @Autowired
    private RepPiece repPiece;
    @Autowired
    private RepMachine repMachine;

    //Get ALl piece
    public List<Piece> GetAllPieces() {
        return (List<Piece>) repPiece.findAll();
    }

    //Get ALl piece R
    public List<piece> GetAllPieces_R() {
        return repPiece.getAllPiece_R();
    }

    // Get One Piece
    public piece GetOnePiece(Long piece_id) {

        return repPiece.getPieceById_R(piece_id);
    }

    //Add Piece
    public piece AddPiece(Piece piece, Long machine_id) {
        Optional<Machine> machine = repMachine.findById(machine_id);
        piece.setMachine(machine.get());
        repPiece.save(piece);
        return repPiece.getPieceById_R(piece.getPiece_id());
    }

    //Update Piece
    public piece UpdateOnePiece(Long piece_id, Long machine_id, Piece piece) {
        Optional<Piece> piece1 = repPiece.findById(piece_id);
        Optional<Machine> machine = repMachine.findById(machine_id);
        if (piece1.isPresent()) {
            piece1.get().setNamePiece(piece.getNamePiece());
            piece1.get().setNumPiece(piece.getNumPiece());
            piece1.get().setStartPiece(piece.getStartPiece());
            piece1.get().setDate0fDeath(piece.getDate0fDeath());
            piece1.get().setMachine(machine.get());

            repPiece.save(piece1.get());
            return repPiece.getPieceById_R(piece1.get().getPiece_id());
        }
        return null;
    }

    //Delete Piece
    public Long DeletePieceById(Long piece_id) {
        Long id = piece_id;
        repPiece.deleteByIdPIECE(piece_id);
        return id;

    }

    // get One Piece With DTO

    public OnePieceDTO getOnePieceDTO(Long piece_id){
        OnePieceDTO DTO_P = new OnePieceDTO();
        Optional<Piece> id = repPiece.findById(piece_id);
        PieceWithNotMachineId p= repPiece.getOnePieceWithNotIdMachine(piece_id);
        machine m= repMachine.getMachineById(id.get().getMachine().getMachine_id());
        DTO_P.setMachine(m);
        DTO_P.setPiece(p);
        return DTO_P ;
    }


}
