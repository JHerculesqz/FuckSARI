package com.firelord.health_track.vo.getGridData;

import com.firelord.health_track.dao.tblHealthTrackUser.TBLHealthTrackUser;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@ToString
public class GridVo {
    //#region Fields

    @Setter
    @Getter
    private long count;

    @Setter
    @Getter
    private List<RowVo> rowVos = new ArrayList<>();

    //#endregion

    //#region add

    public void add(TBLHealthTrackUser oTBLHealthTrackUser) {
        RowVo oRowVo = new RowVo();
        oRowVo.add("userId", oTBLHealthTrackUser.getUserId());
        oRowVo.add("userGroup", oTBLHealthTrackUser.getUserGroup());
        oRowVo.add("location", oTBLHealthTrackUser.getLocation());
        oRowVo.add("temperature", oTBLHealthTrackUser.getTemperature());
        oRowVo.add("healthInfo", oTBLHealthTrackUser.getHealthInfo());
        oRowVo.add("feedBackTime", oTBLHealthTrackUser.getFeedBackTime());
        oRowVo.add("isFeedBackToday", oTBLHealthTrackUser.isFeedBackToday());
        this.rowVos.add(oRowVo);
    }

    //#endregion
}
