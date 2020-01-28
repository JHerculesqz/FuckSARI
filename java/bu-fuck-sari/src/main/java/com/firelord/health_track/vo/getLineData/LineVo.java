package com.firelord.health_track.vo.getLineData;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@ToString
public class LineVo {
    //#region Fields

    @Setter
    @Getter
    private String title;

    @Setter
    @Getter
    private List<PointVo> pointVoList = new ArrayList<>();

    //#endregion
}
