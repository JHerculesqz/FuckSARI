package com.firelord.health_track.dao.tblHealthTrackUserHistory;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TBLHealthTrackUserHistoryRepository extends MongoRepository<TBLHealthTrackUserHistory, String>, TBLHealthTrackUserHistoryRepositoryEx {
    List<TBLHealthTrackUserHistory> findByUserId(String strUserId);
}
