package com.firelord.cbb_repo.db.au3tech.tblcompany;

import com.firelord.health_track.dao.tblHealthTrackUserInfo.TBLHealthTrackUserInfoRepositoryEx;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

/**
 * TBLHealthTrackUserInfoRepositoryImpl
 */
public class TBLHealthTrackUserInfoRepositoryImpl implements TBLHealthTrackUserInfoRepositoryEx {
    //#region Fields

    @Autowired
    private MongoTemplate mongoTemplate;

    //#endregion
}
