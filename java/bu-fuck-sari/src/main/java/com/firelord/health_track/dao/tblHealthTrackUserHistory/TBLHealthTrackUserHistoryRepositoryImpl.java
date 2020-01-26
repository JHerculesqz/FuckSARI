package com.firelord.health_track.dao.tblHealthTrackUserHistory;

import com.firelord.health_track.vo.upsertUserInfo.UpsertUserInfoInVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

public class TBLHealthTrackUserHistoryRepositoryImpl implements TBLHealthTrackUserHistoryRepositoryEx {
    //#region Fields

    @Autowired
    private MongoTemplate mongoTemplate;

    //#endregion

    //#region upsertEx

    @Override
    public void upsertEx(UpsertUserInfoInVo oInVo) {
        Query oQuery = new Query(Criteria.where("userId").is(oInVo.getUserId()).
                and("feedBackTime").is(oInVo.getFeedBackTime()));
        TBLHealthTrackUserHistory oOld = this.mongoTemplate.findOne(oQuery,
                TBLHealthTrackUserHistory.class);
        //new
        if (null == oOld) {
            TBLHealthTrackUserHistory oNew = trans2DBUpsertExNew(oInVo);
            this.mongoTemplate.save(oNew);
        }
        //old
        else {
            Update oUpdate = trans2DBUpsertExUpdate(oInVo);
            this.mongoTemplate.updateMulti(oQuery, oUpdate, TBLHealthTrackUserHistory.class);
        }
    }
    private TBLHealthTrackUserHistory trans2DBUpsertExNew(UpsertUserInfoInVo oInVo) {
        TBLHealthTrackUserHistory oOutVo = new TBLHealthTrackUserHistory();

        oOutVo.setUserId(oInVo.getUserId());
        oOutVo.setUserGroup(oInVo.getUserGroup());
        oOutVo.setLocation(oInVo.getLocation());
        oOutVo.setTemperature(oInVo.getTemperature());
        oOutVo.setHealthInfo(oInVo.getHealthInfo());
        oOutVo.setFeedBackTime(oInVo.getFeedBackTime());

        return oOutVo;
    }
    private Update trans2DBUpsertExUpdate(UpsertUserInfoInVo oInVo) {
        Update oUpdate = new Update();

        oUpdate.set("userGroup", oInVo.getUserGroup());
        oUpdate.set("location", oInVo.getLocation());
        oUpdate.set("temperature", oInVo.getTemperature());
        oUpdate.set("healthInfo", oInVo.getHealthInfo());
        oUpdate.set("feedBackTime", oInVo.getFeedBackTime());

        return oUpdate;
    }

    //#endregion
}
