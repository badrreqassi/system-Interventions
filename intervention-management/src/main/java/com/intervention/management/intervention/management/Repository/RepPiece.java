package com.intervention.management.intervention.management.Repository;

import com.intervention.management.intervention.management.DOT.PieceWithNotMachineId;
import com.intervention.management.intervention.management.DOT.onePiece;
import com.intervention.management.intervention.management.DOT.piece;
import com.intervention.management.intervention.management.Entity.Machine;
import com.intervention.management.intervention.management.Entity.Piece;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface RepPiece extends CrudRepository<Piece, Long> {

    @Modifying
    @Transactional
    @Query(value = " DELETE FROM PIECE where PIECE_ID =:pc_id", nativeQuery = true)
    int deleteByIdPIECE(@Param("pc_id") Long piece_id);


    @Query(value = "select P.PIECE_ID , P.DATE0F_DEATH as Date0fDeath , P.NAME_PIECE as NamePiece ," +
            "P.NUM_PIECE as NumPiece,P.START_PIECE as StartPiece  , " +
            "M.MACHINE_NAME  as MachineName from  PIECE P , MACHINE M where P.MACHINE_MACHINE_ID = M.MACHINE_ID", nativeQuery = true)
    public List<piece> getAllPiece_R();

    @Query(value = "select P.PIECE_ID , P.DATE0F_DEATH as Date0fDeath , P.NAME_PIECE as NamePiece , " +
            " P.NUM_PIECE as NumPiece,P.START_PIECE as StartPiece  ," +
            "M.MACHINE_NAME  as MachineName from  PIECE P , MACHINE M where P.MACHINE_MACHINE_ID = M.MACHINE_ID  and P.PIECE_ID =:pc_id", nativeQuery = true)
    piece getPieceById_R(@Param("pc_id") Long piece_id);

    @Query(value = "select P.PIECE_ID , P.DATE0F_DEATH as Date0fDeath , P.NAME_PIECE as NamePiece , " +
            " P.NUM_PIECE as NumPiece,P.START_PIECE as StartPiece  " +
            " from  PIECE P  where  P.PIECE_ID =:pc_id", nativeQuery = true)
    PieceWithNotMachineId getOnePieceWithNotIdMachine(@Param("pc_id") Long piece_id);


}
