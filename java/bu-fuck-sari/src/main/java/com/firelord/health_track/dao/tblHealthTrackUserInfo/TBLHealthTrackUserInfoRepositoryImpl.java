package com.firelord.health_track.dao.tblHealthTrackUserInfo;

import com.firelord.health_track.vo.saveUserInfo.SaveUserInfoInVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

  /**
 * TBLHealthTrackUserInfoRepositoryImpl
 */
public class TBLHealthTrackUserInfoRepositoryImpl implements TBLHealthTrackUserInfoRepositoryEx {
    //#region Fields

    @Autowired
    private MongoTemplate mongoTemplate;

    //#endregion

    //#region upsertEx

    @Override
    public void upsertEx(SaveUserInfoInVo oInVo) {
        Query oQuery = new Query(Criteria.where("userId").is(oInVo.getUserId()).
                and("feedBackTime").is(oInVo.getFeedBackTime()));
        TBLHealthTrackUserInfo oOld = this.mongoTemplate.findOne(oQuery,
                TBLHealthTrackUserInfo.class);
        //new
        if (null == oOld) {
            TBLHealthTrackUserInfo oNew = oInVo.trans2DBUpsertExNew();
            this.mongoTemplate.save(oNew);
        }
        //old
        else {
            Update oUpdate = oInVo.trans2DBUpsertExUpdate();
            this.mongoTemplate.updateMulti(oQuery, oUpdate, TBLHealthTrackUserInfo.class);
        }
    }

    //#endregion
}
