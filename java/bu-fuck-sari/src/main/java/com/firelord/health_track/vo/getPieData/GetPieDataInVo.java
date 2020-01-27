package com.firelord.health_track.vo.getPieData;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
public class GetPieDataInVo {
    //#region Fields

    /**
     * 可选值：0:人员状态，1:所在地，2:当天信息反馈状态
     */
    @Setter
    @Getter
    private int type;

    //#endregion
}
