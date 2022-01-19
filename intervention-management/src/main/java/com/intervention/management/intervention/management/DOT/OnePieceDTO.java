package com.intervention.management.intervention.management.DOT;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OnePieceDTO {

    private PieceWithNotMachineId Piece;
    private machine machine;
}
