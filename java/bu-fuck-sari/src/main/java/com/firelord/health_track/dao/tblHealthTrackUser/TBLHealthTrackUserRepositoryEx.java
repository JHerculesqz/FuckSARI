package com.firelord.health_track.dao.tblHealthTrackUser;

import com.firelord.health_track.vo.upsertUserInfo.UpsertUserInfoInVo;

public interface TBLHealthTrackUserRepositoryEx {
    void upsertEx(UpsertUserInfoInVo oInVo);
}