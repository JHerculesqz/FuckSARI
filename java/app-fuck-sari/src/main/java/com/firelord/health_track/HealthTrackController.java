package com.firelord.health_track;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

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
}
