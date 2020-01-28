package com.firelord.init;

import com.firelord.component.ds.date.DateUtilsEx;
import com.firelord.component.io.xls.OfficeXlsConfigUtilsEx;
import com.firelord.component.io.xls.OfficeXlsxUtilsEx;
import com.firelord.health_track.dao.tblHealthTrackUser.TBLHealthTrackUser;
import com.firelord.health_track.dao.tblHealthTrackUser.TBLHealthTrackUserRepository;
import com.firelord.health_track.dao.tblHealthTrackUserHistory.TBLHealthTrackUserHistory;
import com.firelord.health_track.dao.tblHealthTrackUserHistory.TBLHealthTrackUserHistoryRepository;
import jodd.typeconverter.Convert;
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

    @Autowired
    private TBLHealthTrackUserHistoryRepository tblHealthTrackUserHistoryRepository;

    //#endregion

    //#region initWhiteList

    public void initWhiteList(String strDirPath) {
        //deleteAll
        this.tblHealthTrackUserRepository.deleteAll();

        //parse
        List<TBLHealthTrackUser> lstTBLHealthTrackUser = new ArrayList<>();
        OfficeXlsConfigUtilsEx.parseXls(strDirPath, 0, oRow -> {
            if (oRow == null) {
                return;
            }

            String strUserID = OfficeXlsxUtilsEx.getCell(0, oRow).toString();

            TBLHealthTrackUser oTBLHealthTrackUser = TBLHealthTrackUser.trans4InitWhiteList(strUserID);
            lstTBLHealthTrackUser.add(oTBLHealthTrackUser);
        });

        //saveAll
        this.tblHealthTrackUserRepository.saveAll(lstTBLHealthTrackUser);
    }

    protected void init3rdData(String strDirPath) {
        //deleteAll
        this.tblHealthTrackUserRepository.deleteAll();

        //parse
        List<TBLHealthTrackUser> lstTBLHealthTrackUser = new ArrayList<>();
        List<TBLHealthTrackUserHistory> lstTBLHealthTrackUserHistory = new ArrayList<>();
        OfficeXlsConfigUtilsEx.parseXls(strDirPath, 0, oRow -> {
            if (oRow == null) {
                return;
            }

            String strFeedbackTime = DateUtilsEx.transFormat(
                    OfficeXlsxUtilsEx.getCell(2, oRow).toString(),
                    DateUtilsEx.JDK_FORMAT1, DateUtilsEx.JDK_FORMAT2);
            String strUserID1 = Convert.toString(OfficeXlsxUtilsEx.getCell(5, oRow));
            String strUserID2 = Convert.toString(OfficeXlsxUtilsEx.getCell(6, oRow));
            String strUserID = strUserID2 + "/" + strUserID1;
            String strUserGroup = OfficeXlsxUtilsEx.getCell(8, oRow).toString();
            Double iTemperature = Convert.toDouble(OfficeXlsxUtilsEx.getCell(10, oRow));
            String strLocation1 = OfficeXlsxUtilsEx.getCell(11, oRow).toString();
            String strLocation2 = OfficeXlsxUtilsEx.getCell(12, oRow).toString();
            String strLocation = strLocation1 + "-" + strLocation2;
            String strHealthInfo = OfficeXlsxUtilsEx.getCell(13, oRow).toString();

            TBLHealthTrackUser oTBLHealthTrackUser = new TBLHealthTrackUser();
            oTBLHealthTrackUser.setUserId(strUserID);
            oTBLHealthTrackUser.setUserGroup(strUserGroup);
            oTBLHealthTrackUser.setLocation(strLocation);
            oTBLHealthTrackUser.setTemperature(iTemperature);
            oTBLHealthTrackUser.setHealthInfo(strHealthInfo);
            oTBLHealthTrackUser.setFeedBackTime(strFeedbackTime);
            lstTBLHealthTrackUser.add(oTBLHealthTrackUser);

            TBLHealthTrackUserHistory oTBLHealthTrackUserHistory = new TBLHealthTrackUserHistory();
            oTBLHealthTrackUserHistory.setUserId(strUserID);
            oTBLHealthTrackUserHistory.setUserGroup(strUserGroup);
            oTBLHealthTrackUserHistory.setLocation(strLocation);
            oTBLHealthTrackUserHistory.setTemperature(iTemperature);
            oTBLHealthTrackUserHistory.setHealthInfo(strHealthInfo);
            oTBLHealthTrackUserHistory.setFeedBackTime(strFeedbackTime);
            lstTBLHealthTrackUserHistory.add(oTBLHealthTrackUserHistory);
        });

        //saveAll
        this.tblHealthTrackUserRepository.saveAll(lstTBLHealthTrackUser);
        this.tblHealthTrackUserHistoryRepository.saveAll(lstTBLHealthTrackUserHistory);

        //#endregion
    }

    //#endregion
}
