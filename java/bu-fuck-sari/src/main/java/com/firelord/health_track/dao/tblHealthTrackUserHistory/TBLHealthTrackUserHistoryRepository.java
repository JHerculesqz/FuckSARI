package com.firelord.health_track.dao.tblHealthTrackUserHistory;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TBLHealthTrackUserHistoryRepository extends MongoRepository<TBLHealthTrackUserHistory, String>, TBLHealthTrackUserHistoryRepositoryEx {

}
