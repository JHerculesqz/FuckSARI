package com.firelord.health_track.vo.getGridData;

import com.firelord.health_track.vo.getPieData.GetPieDataInVo;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
public class GetGridDataInVo extends GetPieDataInVo {
    //#region Fields

    /**
     * 可选值：
     * type=0时，Exception/Normal
     * type=1时，所在地的值
     * type=2时，FEEDBACK/FEEDBACK_N
     */
    @Setter
    @Getter
    private String subType;

    @Setter
    @Getter
    private int limit;

    @Setter
    @Getter
    private int skip;

    //#endregion
}
