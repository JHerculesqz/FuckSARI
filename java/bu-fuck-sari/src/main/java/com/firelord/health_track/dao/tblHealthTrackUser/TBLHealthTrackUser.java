package com.firelord.health_track.dao.tblHealthTrackUser;

import com.firelord.health_track.dao.tblHealthTrackUserHistory.TBLHealthTrackUserHistory;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * TBLHealthTrackUser
 */
@ToString
@Document(collection = "TBLHealthTrackUser")
public class TBLHealthTrackUser extends TBLHealthTrackUserHistory {
    //#region Fields

    /**
     * 当天是否反馈
     */
    @Setter
    @Getter
    private boolean feedBackToday = false;

    //#endregion

    //#region trans4InitWhiteList

    public static TBLHealthTrackUser trans4InitWhiteList(String strUserID) {
        TBLHealthTrackUser oTBLHealthTrackUser = new TBLHealthTrackUser();
        oTBLHealthTrackUser.setUserId(strUserID);
        return oTBLHealthTrackUser;
    }

    //#endregion
}
