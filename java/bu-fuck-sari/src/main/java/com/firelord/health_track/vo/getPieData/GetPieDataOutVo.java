package com.firelord.health_track.vo.getPieData;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@ToString
public class GetPieDataOutVo {
    //#region Fields

    @Setter
    @Getter
    private String title;

    @Setter
    @Getter
    private String subTitle;

    @Setter
    @Getter
    private List<String> legendItems = new ArrayList<>();

    @Setter
    @Getter
    private List<PieDataItemVo> data = new ArrayList<>();

    //#endregion

    //#region addLegend/Data

    public void addLegend(String strCategory) {
        if (!this.getLegendItems().contains(strCategory)) {
            this.getLegendItems().add(strCategory);
        }
    }

    public void addData(String strCategory, Double iValue) {
        PieDataItemVo oItemVo = new PieDataItemVo();
        oItemVo.setName(strCategory);
        oItemVo.setValue(iValue);
        this.getData().add(oItemVo);
    }

    //#endregion
}
