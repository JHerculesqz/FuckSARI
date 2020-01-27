package com.firelord.init;

import com.firelord.component.io.xls.OfficeXlsConfigUtilsEx;
import com.firelord.component.io.xls.OfficeXlsxUtilsEx;
import com.firelord.health_track.dao.tblHealthTrackUser.TBLHealthTrackUser;
import com.firelord.health_track.dao.tblHealthTrackUser.TBLHealthTrackUserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

/**
 * InitAuto4Common
 */
public class InitAuto4Common {
    //#region Const

    /**
     * LOG_INIT_AUTO
     */
    static final String LOG_INIT_AUTO = "[FuckSARI.InitAuto]";

    //#endregion

    //#region Fields

    @Autowired
    private TBLHealthTrackUserRepository tblHealthTrackUserRepository;

    //#endregion

    //#region initWhiteList

    public void initWhiteList(String strDirPath) {
        //deleteAll
        this.tblHealthTrackUserRepository.deleteAll();

        //parse
        List<TBLHealthTrackUser> lstTBLHealthTrackUser = new ArrayList<>();
        OfficeXlsConfigUtilsEx.parseXls(strDirPath, 0, oRow -> {
            String strUserID = OfficeXlsxUtilsEx.getCell(0, oRow).toString();

            TBLHealthTrackUser oTBLHealthTrackUser = TBLHealthTrackUser.trans4InitWhiteList(strUserID);
            lstTBLHealthTrackUser.add(oTBLHealthTrackUser);
        });

        //saveAll
        this.tblHealthTrackUserRepository.saveAll(lstTBLHealthTrackUser);
    }

    //#endregion
}
