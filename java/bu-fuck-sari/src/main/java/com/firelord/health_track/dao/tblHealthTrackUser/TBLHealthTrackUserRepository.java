package com.firelord.health_track.dao.tblHealthTrackUser;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TBLHealthTrackUserRepository extends MongoRepository<TBLHealthTrackUser, String>, TBLHealthTrackUserRepositoryEx {

}
