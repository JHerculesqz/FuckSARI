package com.firelord.health_track.dao.tblHealthTrackUserInfo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * TBLCompany
 */
@ToString
@Document(collection = "TBLHealthTrackUserInfo")
public class TBLHealthTrackUserInfo {
    //#region Fields

    /**
     * Key(例如：姓名)
     */
    @Setter
    @Getter
    private String userId;

    /**
     * 所在地(例如：湖北省-武汉市)
     */
    @Setter
    @Getter
    private String location;

    /**
     * 体温(整数，单位摄氏度)
     */
    @Setter
    @Getter
    private double temperature;

    /**
     * 身体异常情况
     * 格式：发热,咳嗽,感冒,四肢无力
     */
    @Setter
    @Getter
    private String healthInfo;

    @Setter
    @Getter
    private String feedBackTime;

    //#endregion
}
