package com.firelord.health_track.dao.tblHealthTrackUser;

import com.firelord.health_track.dao.tblHealthTrackUserHistory.TBLHealthTrackUserHistory;
import com.firelord.health_track.vo.upsertUserInfo.UpsertUserInfoInVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

public class TBLHealthTrackUserRepositoryImpl implements TBLHealthTrackUserRepositoryEx {
    //#region Fields

    @Autowired
    private MongoTemplate mongoTemplate;

    //#endregion

    //#region upsertEx

    @Override
    public void upsertEx(UpsertUserInfoInVo oInVo) {
        Query oQuery = new Query(Criteria.where("userId").is(oInVo.getUserId()));
        TBLHealthTrackUser oOld = this.mongoTemplate.findOne(oQuery, TBLHealthTrackUser.class);
        //new
        if (null == oOld) {
            TBLHealthTrackUser oNew = trans2DBUpsertExNew(oInVo);
            this.mongoTemplate.save(oNew);
        }
        //old
        else {
            Update oUpdate = trans2DBUpsertExUpdate(oInVo);
            this.mongoTemplate.updateMulti(oQuery, oUpdate, TBLHealthTrackUser.class);
        }
    }
    private TBLHealthTrackUser trans2DBUpsertExNew(UpsertUserInfoInVo oInVo) {
        TBLHealthTrackUser oOutVo = new TBLHealthTrackUser();

        oOutVo.setUserId(oInVo.getUserId());
        oOutVo.setUserGroup(oInVo.getUserGroup());
        oOutVo.setLocation(oInVo.getLocation());
        oOutVo.setTemperature(oInVo.getTemperature());
        oOutVo.setHealthInfo(oInVo.getHealthInfo());
        oOutVo.setFeedBackTime(oInVo.getFeedBackTime());
        oOutVo.setFeedBackToday(true);

        return oOutVo;
    }
    private Update trans2DBUpsertExUpdate(UpsertUserInfoInVo oInVo) {
        Update oUpdate = new Update();

        oUpdate.set("userGroup", oInVo.getUserGroup());
        oUpdate.set("location", oInVo.getLocation());
        oUpdate.set("temperature", oInVo.getTemperature());
        oUpdate.set("healthInfo", oInVo.getHealthInfo());
        oUpdate.set("feedBackTime", oInVo.getFeedBackTime());
        oUpdate.set("feedBackToday", true);

        return oUpdate;
    }

    //#endregion
}
