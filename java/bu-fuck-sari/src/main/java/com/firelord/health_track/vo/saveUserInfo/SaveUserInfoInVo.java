package com.firelord.health_track.vo.saveUserInfo;

import com.firelord.health_track.dao.tblHealthTrackUserInfo.TBLHealthTrackUserInfo;
import com.firelord.health_track.vo.getAutoUserInfoByUserID.GetAutoUserInfoByUserIDOutVo;
import lombok.ToString;

@ToString
public class SaveUserInfoInVo extends GetAutoUserInfoByUserIDOutVo {
    //#region Fields

    //#endregion

    //#region trans2DB

    public TBLHealthTrackUserInfo trans2DB() {
        TBLHealthTrackUserInfo oOutVo = new TBLHealthTrackUserInfo();

        oOutVo.setUserId(this.getUserId());
        oOutVo.setLocation(this.getLocation());
        oOutVo.setTemperature(this.getTemperature());
        oOutVo.setHealthInfo(this.getHealthInfo());

        return oOutVo;
    }

    //#endregion
}
