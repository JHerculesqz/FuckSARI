package com.firelord.health_track.vo.getPieData;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
public class PieDataItemVo {
    //#region Fields

    @Setter
    @Getter
    private String name;

    @Setter
    @Getter
    private double value;

    //#endregion
}
