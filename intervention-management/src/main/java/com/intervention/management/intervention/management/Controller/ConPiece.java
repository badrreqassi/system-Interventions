package com.intervention.management.intervention.management.Controller;

import com.intervention.management.intervention.management.DOT.OnePieceDTO;
import com.intervention.management.intervention.management.DOT.onePiece;
import com.intervention.management.intervention.management.DOT.piece;
import com.intervention.management.intervention.management.Entity.Piece;
import com.intervention.management.intervention.management.Services.SerPiece;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Piece")
@CrossOrigin(origins = "http://localhost:3000")
public class ConPiece {
     @Autowired
    public SerPiece serPiece;

    @GetMapping("/hello")
    public  String hello(){
        return "Hello";
    }

    @GetMapping("/Pieces")
    public List<Piece> getAllPieces(){
        return serPiece.GetAllPieces();
    }

    @GetMapping("/Pieces/R")
    public List<piece> getAllPieces_R(){
        return serPiece.GetAllPieces_R();
    }

    @GetMapping("/Pieces/{piece_id}")
    public OnePieceDTO getOnePieceById(@PathVariable Long piece_id){
        return serPiece.getOnePieceDTO(piece_id);
    }
    @PutMapping("/Pieces/update/{piece_id}/{machine_id}")
    public piece updatePieceById(@PathVariable Long piece_id ,@PathVariable Long machine_id ,@RequestBody Piece piece){
        return serPiece.UpdateOnePiece(piece_id,machine_id,piece);
    }
    @PostMapping("/Pieces/add/{machine_id}")
    public piece addPiece(@RequestBody Piece piece,@PathVariable Long machine_id){
        return serPiece.AddPiece(piece,machine_id);
    }
    @DeleteMapping("/Pieces/delete/{piece_id}")
    public Long deletePieceById(@PathVariable Long piece_id){
        return serPiece.DeletePieceById(piece_id);
    }


    @GetMapping("/Pieces/DTO/{piece_id}")
    public OnePieceDTO DTO_OnePiece(@PathVariable Long piece_id){
        return serPiece.getOnePieceDTO(piece_id) ;
    }



}
