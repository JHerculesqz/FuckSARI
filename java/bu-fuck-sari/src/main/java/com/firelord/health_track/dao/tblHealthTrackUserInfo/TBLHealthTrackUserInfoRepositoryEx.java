package com.firelord.health_track.dao.tblHealthTrackUserInfo;

import com.firelord.health_track.vo.saveUserInfo.SaveUserInfoInVo;

/**
 * TBLHealthTrackUserInfoRepositoryEx
 */
public interface TBLHealthTrackUserInfoRepositoryEx {
    void upsertEx(SaveUserInfoInVo oInVo);
}