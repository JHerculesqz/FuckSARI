package com.firelord.health_track.vo.getLineData;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
public class PointVo {
    //#region Fields

    @Setter
    @Getter
    private String key;

    @Setter
    @Getter
    private double value;

    //#endregion
}
