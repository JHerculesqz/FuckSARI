package com.firelord.health_track.vo.getGridData;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@ToString
public class RowVo {
    //#region Fields

    @Setter
    @Getter
    private List<CellVo> cellVos = new ArrayList<>();

    //#endregion

    //#region add

    public void add(String strKey, Object oValue) {
        CellVo oCellVo = new CellVo();
        oCellVo.setKey(strKey);
        oCellVo.setValue(oValue);
        this.cellVos.add(oCellVo);
    }

    //#endregion
}
