package com.firelord.health_track.vo.getLineData;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@ToString
public class PointVo {
    //#region Fields

    @Setter
    @Getter
    private String name;

    @Setter
    @Getter
    private List<Object> value = new ArrayList<>();

    //#endregion
}
