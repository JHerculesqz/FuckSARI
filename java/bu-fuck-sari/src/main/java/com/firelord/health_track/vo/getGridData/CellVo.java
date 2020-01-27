package com.firelord.health_track.vo.getGridData;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
public class CellVo {
    //#region Fields

    @Setter
    @Getter
    private String key;

    @Setter
    @Getter
    private Object value;

    //#endregion
}
