package com.firelord.health_track;

import com.firelord.component.ds.date.DateUtilsEx;
import com.firelord.health_track.dao.tblHealthTrackUser.TBLHealthTrackUserRepository;
import com.firelord.health_track.dao.tblHealthTrackUserHistory.TBLHealthTrackUserHistory;
import com.firelord.health_track.dao.tblHealthTrackUserHistory.TBLHealthTrackUserHistoryRepository;
import com.firelord.health_track.vo.getAutoUserInfoByUserID.GetAutoUserInfoByUserIDInVo;
import com.firelord.health_track.vo.getAutoUserInfoByUserID.GetAutoUserInfoByUserIDOutVo;
import com.firelord.health_track.vo.getGridData.GetGridDataInVo;
import com.firelord.health_track.vo.getGridData.GridVo;
import com.firelord.health_track.vo.getLineData.GetLineDataHistoryInVo;
import com.firelord.health_track.vo.getLineData.LineVo;
import com.firelord.health_track.vo.getLineData.PointVo;
import com.firelord.health_track.vo.getPieData.GetPieDataInVo;
import com.firelord.health_track.vo.getPieData.GetPieDataOutVo;
import com.firelord.health_track.vo.upsertUserInfo.UpsertUserInfoInVo;
import com.firelord.spring.component.misc.geo.IPLocationUtilsEx;
import com.firelord.spring.component.misc.geo.vo.IPLocationOutVo;
import com.firelord.spring.component.rpc.http.vo.ReqVo;
import com.firelord.spring.component.rpc.http.vo.RespVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Component
public class HealthTrackService {
    //#region Fields

    @Autowired
    private TBLHealthTrackUserRepository tblHealthTrackUserRepository;
    @Autowired
    private TBLHealthTrackUserHistoryRepository tblHealthTrackUserHistoryRepository;

    //#endregion

    //#region view

    /**
     * 获得healthTrack问卷调查页面
     *
     * @return healthTrack问卷调查页面
     */
    public ModelAndView healthTrackInterview() {
        ModelAndView oModelAndView = new ModelAndView();
        oModelAndView.setViewName("pages/healthTrackInterview/index");
        return oModelAndView;
    }

    /**
     * 获得healthTrack统计页面
     *
     * @return healthTrack统计页面
     */
    public ModelAndView healthTrackDashboard() {
        ModelAndView oModelAndView = new ModelAndView();
        oModelAndView.setViewName("pages/healthTrackDashboard/index");
        return oModelAndView;
    }

    //#endregion

    //#region getAutoUserInfoByUserID

    /**
     * 获得自动填写的用户数据，自动填充在问卷调查页面
     *
     * @param oReqVo ReqVo
     * @return RespVo
     */
    public RespVo getAutoUserInfoByUserID(ReqVo oReqVo, HttpServletRequest oHttpServletRequest) {
        RespVo oRespVo = new RespVo();

        //InVo
        GetAutoUserInfoByUserIDInVo oInVo = oReqVo.getReqBuVo(
                GetAutoUserInfoByUserIDInVo.class);

        //Provider
        GetAutoUserInfoByUserIDOutVo oOutVo = new GetAutoUserInfoByUserIDOutVo();
        String strIp = IPLocationUtilsEx.getReqIP(oHttpServletRequest);
        IPLocationOutVo oIPLocationOutVo = IPLocationUtilsEx.getAddressByIp(strIp);
        oOutVo.setUserId(oInVo.getUserId());
        oOutVo.setLocation(oIPLocationOutVo.getRegion() + "-" + oIPLocationOutVo.getCity());

        //OutVo
        oRespVo.setResultObj(oOutVo);
        return oRespVo;
    }

    //#endregion

    //#region upsertUserInfo

    /**
     * 保存用户信息
     *
     * @param oReqVo ReqVo
     * @return RespVo
     */
    public RespVo upsertUserInfo(ReqVo oReqVo) {
        RespVo oRespVo = new RespVo();

        //InVo
        UpsertUserInfoInVo oInVo = oReqVo.getReqBuVo(UpsertUserInfoInVo.class);
        oInVo.setFeedBackTime(DateUtilsEx.now(DateUtilsEx.TIMEZONE_8, DateUtilsEx.FORMAT3));

        //Provider
        if (!this.tblHealthTrackUserRepository.existsByUserId(oInVo.getUserId())) {
            return RespVo.genRespVo4Err("用户不在白名单内");
        }
        this.tblHealthTrackUserRepository.upsertEx(oInVo);
        this.tblHealthTrackUserHistoryRepository.upsertEx(oInVo);

        //OutVo
        return oRespVo;
    }

    //#endregion

    //#region getPieData

    /**
     * 获得饼图数据
     *
     * @param oReqVo ReqVo
     * @return RespVo
     */
    public RespVo getPieData(ReqVo oReqVo) {
        RespVo oRespVo = new RespVo();

        //InVo
        GetPieDataInVo oInVo = oReqVo.getReqBuVo(GetPieDataInVo.class);

        //Provider
        GetPieDataOutVo oOutVo = this.tblHealthTrackUserRepository.getPieDataByType(oInVo);

        //OutVo
        oRespVo.setResultObj(oOutVo);
        return oRespVo;
    }

    //#endregion

    //#region getGridData

    /**
     * 获得表格数据
     *
     * @param oReqVo ReqVo
     * @return RespVo
     */
    public RespVo getGridData(ReqVo oReqVo) {
        RespVo oRespVo = new RespVo();

        //InVo
        GetGridDataInVo oInVo = oReqVo.getReqBuVo(GetGridDataInVo.class);

        //Provider
        GridVo oGridVo = this.tblHealthTrackUserRepository.getGridDataByType(oInVo);

        //OutVo
        oRespVo.setResultObj(oGridVo);
        return oRespVo;
    }

    //#endregion

    //#region getLineDataHistory

    public RespVo getLineDataHistory(ReqVo oReqVo) {
        RespVo oRespVo = new RespVo();

        //InVo
        GetLineDataHistoryInVo oInVo = oReqVo.getReqBuVo(GetLineDataHistoryInVo.class);

        //Provider
        List<TBLHealthTrackUserHistory> lstRes = this.tblHealthTrackUserHistoryRepository.
                findByUserId(oInVo.getUserId());
        LineVo oLineVo = new LineVo();
        for (TBLHealthTrackUserHistory oTBLHealthTrackUser : lstRes) {
            PointVo oPointVo = new PointVo();
            oPointVo.setKey(oTBLHealthTrackUser.getFeedBackTime());
            oPointVo.setValue(oTBLHealthTrackUser.getTemperature());
            oLineVo.getPointVoList().add(oPointVo);
        }

        //OutVo
        oRespVo.setResultObj(oLineVo);
        return oRespVo;
    }

    //#endregion
}
