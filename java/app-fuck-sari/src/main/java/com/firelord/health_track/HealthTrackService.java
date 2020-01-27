package com.firelord.health_track;

import com.firelord.component.ds.date.DateUtilsEx;
import com.firelord.health_track.dao.tblHealthTrackUser.TBLHealthTrackUserRepository;
import com.firelord.health_track.dao.tblHealthTrackUserHistory.TBLHealthTrackUserHistoryRepository;
import com.firelord.health_track.vo.getAutoUserInfoByUserID.GetAutoUserInfoByUserIDInVo;
import com.firelord.health_track.vo.getAutoUserInfoByUserID.GetAutoUserInfoByUserIDOutVo;
import com.firelord.health_track.vo.upsertUserInfo.UpsertUserInfoInVo;
import com.firelord.spring.component.misc.geo.IPLocationUtilsEx;
import com.firelord.spring.component.misc.geo.vo.IPLocationOutVo;
import com.firelord.spring.component.rpc.http.vo.ReqVo;
import com.firelord.spring.component.rpc.http.vo.RespVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Component
public class HealthTrackService {
    //#region Fields

    @Autowired
    private TBLHealthTrackUserRepository tblHealthTrackUserRepository;
    @Autowired
    private TBLHealthTrackUserHistoryRepository tblHealthTrackUserInfoRepository;

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

    //#endregion

    //#region getAutoUserInfoByUserID

    /**
     * 获得自动填写的用户数据，自动填充在问卷调查页面
     *
     * @param oReqVo UserInfoInVo
     * @return UserInfoOutVo
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
     * @param oReqVo SaveUserInfoInVo
     * @return RespVo
     */
    public RespVo upsertUserInfo(ReqVo oReqVo) {
        RespVo oRespVo = new RespVo();

        //InVo
        UpsertUserInfoInVo oInVo = oReqVo.getReqBuVo(UpsertUserInfoInVo.class);
        oInVo.setFeedBackTime(DateUtilsEx.now(DateUtilsEx.TIMEZONE_8, DateUtilsEx.FORMAT3));

        //Provider
        this.tblHealthTrackUserRepository.upsertEx(oInVo);
        this.tblHealthTrackUserInfoRepository.upsertEx(oInVo);

        //OutVo
        return oRespVo;
    }

    //#endregion

    //#region getNotFeedBackUserList

    //#engregion
}