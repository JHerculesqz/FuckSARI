package com.firelord;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * IOTInsApplication
 */
@SpringBootApplication
@EnableScheduling
public class FuckSARIApplication implements ApplicationRunner {
    //#region Fields

//    @Autowired
//    private IInitAuto initAuto;

    //#endregion

    //#region main

    public static void main(String[] args) {
        SpringApplication.run(FuckSARIApplication.class, args);
    }

    //#endregion

    //#region run

    @Override
    public void run(ApplicationArguments args) {
//        this.initAuto.run();
    }

    //#endregion
}
