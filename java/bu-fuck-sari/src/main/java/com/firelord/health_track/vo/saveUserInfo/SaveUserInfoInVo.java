package com.firelord.health_track.vo.saveUserInfo;

import com.firelord.health_track.dao.tblHealthTrackUserInfo.TBLHealthTrackUserInfo;
import lombok.ToString;
import org.springframework.data.mongodb.core.query.Update;

@ToString
public class SaveUserInfoInVo extends TBLHealthTrackUserInfo {
    //#region Fields

    //#endregion

    //#region trans2DB

    public TBLHealthTrackUserInfo trans2DBUpsertExNew() {
        TBLHealthTrackUserInfo oOutVo = new TBLHealthTrackUserInfo();

        oOutVo.setUserId(this.getUserId());
        oOutVo.setLocation(this.getLocation());
        oOutVo.setTemperature(this.getTemperature());
        oOutVo.setHealthInfo(this.getHealthInfo());
        oOutVo.setFeedBackTime(this.getFeedBackTime());

        return oOutVo;
    }

    public Update trans2DBUpsertExUpdate() {
        Update oUpdate = new Update();

        oUpdate.set("location", this.getLocation());
        oUpdate.set("temperature", this.getTemperature());
        oUpdate.set("healthInfo", this.getHealthInfo());

        return oUpdate;
    }

    //#endregion
}
