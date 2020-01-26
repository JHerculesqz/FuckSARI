package com.firelord.health_track.vo.getAutoUserInfoByUserID;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
public class GetAutoUserInfoByUserIDOutVo {
    //#region Fields

    @Setter
    @Getter
    private String userId;

    @Setter
    @Getter
    private String location;

    @Setter
    @Getter
    private double temperature;

    @Setter
    @Getter
    private String healthInfo;

    //#endregion
}
