package com.firelord.health_track;

import com.firelord.spring.component.rpc.http.vo.ReqVo;
import com.firelord.spring.component.rpc.http.vo.RespVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@RestController
public class HealthTrackController {
    //#region Fields

    @Autowired
    private HealthTrackService healthTrackService;

    //#endregion

    //#region view

    @RequestMapping(value = {"/healthTrackInterview"}, method = RequestMethod.GET)
    public ModelAndView healthTrackInterview() {
        return this.healthTrackService.healthTrackInterview();
    }

    //#endregion

    //#region getAutoUserInfoByUserID

    @RequestMapping("/getAutoUserInfoByUserID")
    @ResponseBody
    public RespVo getAutoUserInfoByUserID(@RequestBody ReqVo oReqVo,
                                          HttpServletRequest oHttpServletRequest) {
        return this.healthTrackService.getAutoUserInfoByUserID(oReqVo, oHttpServletRequest);
    }

    //#endregion

    //#region upsertUserInfo

    @RequestMapping("/upsertUserInfo")
    @ResponseBody
    public RespVo upsertUserInfo(@RequestBody ReqVo oReqVo) {
        return this.healthTrackService.upsertUserInfo(oReqVo);
    }

    //#endregion
}
