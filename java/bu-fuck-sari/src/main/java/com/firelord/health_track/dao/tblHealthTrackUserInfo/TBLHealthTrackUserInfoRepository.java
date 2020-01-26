package com.firelord.health_track.dao.tblHealthTrackUserInfo;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * TBLHealthTrackUserInfoRepository
 */
public interface TBLHealthTrackUserInfoRepository extends MongoRepository<TBLHealthTrackUserInfo, String>, TBLHealthTrackUserInfoRepositoryEx {

}
