package com.firelord.health_track.dao.tblHealthTrackUser;

import com.firelord.health_track.vo.getGridData.GetGridDataInVo;
import com.firelord.health_track.vo.getGridData.GridVo;
import com.firelord.health_track.vo.getPieData.GetPieDataInVo;
import com.firelord.health_track.vo.getPieData.GetPieDataOutVo;
import com.firelord.health_track.vo.upsertUserInfo.UpsertUserInfoInVo;

public interface TBLHealthTrackUserRepositoryEx {
    void upsertEx(UpsertUserInfoInVo oInVo);

    GetPieDataOutVo getPieDataByType(GetPieDataInVo oInVo);

    GridVo getGridDataByType(GetGridDataInVo oInVo);
}