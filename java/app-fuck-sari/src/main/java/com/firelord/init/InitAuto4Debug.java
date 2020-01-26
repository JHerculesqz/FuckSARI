package com.firelord.init;

import com.firelord.spring.component.mvc.startup.IInitAuto;
import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

/**
 * InitAuto4Debug
 */
@Profile("debug")
@Component
@Log4j2
public class InitAuto4Debug extends InitAuto4Common implements IInitAuto {
    //#region run

    @Override
    public void run() {
        log.info(LOG_INIT_AUTO + "start...");

        log.info(LOG_INIT_AUTO + "end...");
    }

    //#endregion
}
