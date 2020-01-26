package com.firelord.health_track;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;

@Component
public class HealthTrackService {
    //#region Fields

    //#endregion

    //#region view

    public ModelAndView healthTrackInterview() {
        ModelAndView oModelAndView = new ModelAndView();
        oModelAndView.setViewName("pages/healthTrackInterview/healthTrackInterview");
        return oModelAndView;
    }

    //#endregion
}
