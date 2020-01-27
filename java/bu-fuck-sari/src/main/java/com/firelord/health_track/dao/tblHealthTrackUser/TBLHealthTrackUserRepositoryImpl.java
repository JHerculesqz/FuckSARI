package com.firelord.health_track.dao.tblHealthTrackUser;

import com.firelord.component.ds.date.DateUtilsEx;
import com.firelord.health_track.vo.getGridData.GetGridDataInVo;
import com.firelord.health_track.vo.getGridData.GridVo;
import com.firelord.health_track.vo.getPieData.GetPieDataInVo;
import com.firelord.health_track.vo.getPieData.GetPieDataOutVo;
import com.firelord.health_track.vo.upsertUserInfo.UpsertUserInfoInVo;
import jodd.typeconverter.Convert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import java.util.List;
import java.util.Map;

public class TBLHealthTrackUserRepositoryImpl implements TBLHealthTrackUserRepositoryEx {
    //#region Const

    private static final String EXCEPTION = "Exception";
    private static final String FEEDBACK = "FEEDBACK";

    //#endregion

    //#region Fields

    @Autowired
    private MongoTemplate mongoTemplate;

    //#endregion

    //#region upsertEx

    @Override
    public void upsertEx(UpsertUserInfoInVo oInVo) {
        Query oQuery = new Query(Criteria.where("userId").is(oInVo.getUserId()));
        TBLHealthTrackUser oOld = this.mongoTemplate.findOne(oQuery, TBLHealthTrackUser.class);
        //new
        if (null == oOld) {
            TBLHealthTrackUser oNew = trans2DBUpsertExNew(oInVo);
            this.mongoTemplate.save(oNew);
        }
        //old
        else {
            Update oUpdate = trans2DBUpsertExUpdate(oInVo);
            this.mongoTemplate.updateMulti(oQuery, oUpdate, TBLHealthTrackUser.class);
        }
    }

    private TBLHealthTrackUser trans2DBUpsertExNew(UpsertUserInfoInVo oInVo) {
        TBLHealthTrackUser oOutVo = new TBLHealthTrackUser();

        oOutVo.setUserId(oInVo.getUserId());
        oOutVo.setUserGroup(oInVo.getUserGroup());
        oOutVo.setLocation(oInVo.getLocation());
        oOutVo.setTemperature(oInVo.getTemperature());
        oOutVo.setHealthInfo(oInVo.getHealthInfo());
        oOutVo.setFeedBackTime(oInVo.getFeedBackTime());

        return oOutVo;
    }

    private Update trans2DBUpsertExUpdate(UpsertUserInfoInVo oInVo) {
        Update oUpdate = new Update();

        oUpdate.set("userGroup", oInVo.getUserGroup());
        oUpdate.set("location", oInVo.getLocation());
        oUpdate.set("temperature", oInVo.getTemperature());
        oUpdate.set("healthInfo", oInVo.getHealthInfo());
        oUpdate.set("feedBackTime", oInVo.getFeedBackTime());
        oUpdate.set("feedBackToday", true);

        return oUpdate;
    }

    //#endregion

    //#region getPieDataByType

    @Override
    public GetPieDataOutVo getPieDataByType(GetPieDataInVo oInVo) {
        //如果0
        if (oInVo.getType() == 0) {
            return getPieDataByType0();
        }
        //如果1
        else if (oInVo.getType() == 1) {
            return getPieDataByType1();
        }
        //如果2
        else if (oInVo.getType() == 2) {
            return getPieDataByType2();
        }
        //其它
        else {
            return new GetPieDataOutVo();
        }
    }

    private GetPieDataOutVo getPieDataByType0() {
        GetPieDataOutVo oOutVo = new GetPieDataOutVo();

        //更新Basic
        oOutVo.setTitle("体温异常分布");
        oOutVo.setSubTitle("");

        //更新Legend
        oOutVo.addLegend("异常");
        oOutVo.addLegend("正常");

        //更新Data
        Query oQueryException = new Query(Criteria.where("temperature").gt(37));
        Query oQueryNormal = new Query(Criteria.where("temperature").lte(37));
        long iCountException = this.mongoTemplate.count(oQueryException, TBLHealthTrackUser.class);
        long iCountNormal = this.mongoTemplate.count(oQueryNormal, TBLHealthTrackUser.class);
        oOutVo.addData("异常", iCountException * 1.0);
        oOutVo.addData("正常", iCountNormal * 1.0);

        return oOutVo;
    }

    private GetPieDataOutVo getPieDataByType1() {
        GetPieDataOutVo oOutVo = new GetPieDataOutVo();

        //更新Basic
        oOutVo.setTitle("所在地分布");
        oOutVo.setSubTitle("");

        Aggregation oAgg = Aggregation.newAggregation(
                Aggregation.group("location").count().as("count"));
        AggregationResults<Map> lstAggRes = this.mongoTemplate.aggregate(
                oAgg, TBLHealthTrackUser.class, Map.class);
        for (Map oMapRes : lstAggRes) {
            String strCategory = Convert.toString(oMapRes.get("_id"));
            Double iValue = Convert.toDoubleValue(oMapRes.get("count"));

            //更新Legend
            oOutVo.addLegend(strCategory);

            //更新Data
            oOutVo.addData(strCategory, iValue);
        }

        return oOutVo;
    }

    private GetPieDataOutVo getPieDataByType2() {
        GetPieDataOutVo oOutVo = new GetPieDataOutVo();

        //更新Basic
        oOutVo.setTitle("反馈情况");
        oOutVo.setSubTitle("");

        //更新Legend
        oOutVo.addLegend("已反馈");
        oOutVo.addLegend("未反馈");

        //更新Data
        Query oQueryFeedBackToday = new Query(Criteria.where("feedBackTime").
                is(DateUtilsEx.now(DateUtilsEx.TIMEZONE_8, DateUtilsEx.FORMAT3)));
        Query oQueryFeedBackTodayN = new Query(Criteria.where("feedBackTime").
                ne(DateUtilsEx.now(DateUtilsEx.TIMEZONE_8, DateUtilsEx.FORMAT3)));
        long iCountFeedBackToday = this.mongoTemplate.count(oQueryFeedBackToday, TBLHealthTrackUser.class);
        long iCountFeedBackTodayN = this.mongoTemplate.count(oQueryFeedBackTodayN, TBLHealthTrackUser.class);
        oOutVo.addData("已反馈", iCountFeedBackToday * 1.0);
        oOutVo.addData("未反馈", iCountFeedBackTodayN * 1.0);

        return oOutVo;
    }

    //#endregion

    //#region getGridDataByType

    @Override
    public GridVo getGridDataByType(GetGridDataInVo oInVo) {
        //如果0
        if (oInVo.getType() == 0) {
            return getGridDataByType0(oInVo);
        }
        //如果1
        else if (oInVo.getType() == 1) {
            return getGridDataByType1(oInVo);
        }
        //如果2
        else if (oInVo.getType() == 2) {
            return getGridDataByType2(oInVo);
        }
        //其它
        else {
            return new GridVo();
        }
    }

    private GridVo getGridDataByType0(GetGridDataInVo oInVo) {
        GridVo oOutVo = new GridVo();

        //find
        Query oQueryCount;
        Query oQuery;
        if (oInVo.getSubType().equals(EXCEPTION)) {
            oQueryCount = new Query(Criteria.where("temperature").gt(37));
            oQuery = new Query(Criteria.where("temperature").gt(37)).
                    limit(oInVo.getLimit()).skip(oInVo.getSkip());
        } else {
            oQueryCount = new Query(Criteria.where("temperature").lte(37));
            oQuery = new Query(Criteria.where("temperature").lte(37)).
                    limit(oInVo.getLimit()).skip(oInVo.getSkip());
        }
        long iCount = this.mongoTemplate.count(oQueryCount, TBLHealthTrackUser.class);
        List<TBLHealthTrackUser> lstRes = this.mongoTemplate.find(oQuery, TBLHealthTrackUser.class);

        //trans
        oOutVo.setCount(iCount);
        for (TBLHealthTrackUser oTBLHealthTrackUser : lstRes) {
            oOutVo.add(oTBLHealthTrackUser);
        }

        return oOutVo;
    }

    private GridVo getGridDataByType1(GetGridDataInVo oInVo) {
        GridVo oOutVo = new GridVo();

        //find
        Query oQueryCount = new Query(Criteria.where("location").is(oInVo.getSubType()));
        Query oQuery = new Query(Criteria.where("location").is(oInVo.getSubType())).
                limit(oInVo.getLimit()).skip(oInVo.getSkip());
        long iCount = this.mongoTemplate.count(oQueryCount, TBLHealthTrackUser.class);
        List<TBLHealthTrackUser> lstRes = this.mongoTemplate.find(oQuery, TBLHealthTrackUser.class);

        //trans
        oOutVo.setCount(iCount);
        for (TBLHealthTrackUser oTBLHealthTrackUser : lstRes) {
            oOutVo.add(oTBLHealthTrackUser);
        }

        return oOutVo;
    }

    private GridVo getGridDataByType2(GetGridDataInVo oInVo) {
        GridVo oOutVo = new GridVo();

        //find
        Query oQueryCount;
        Query oQuery;
        if (oInVo.getSubType().equals(FEEDBACK)) {
            oQueryCount = new Query(Criteria.where("feedBackTime").
                    is(DateUtilsEx.now(DateUtilsEx.TIMEZONE_8, DateUtilsEx.FORMAT3)));
            oQuery = new Query(Criteria.where("feedBackTime").
                    is(DateUtilsEx.now(DateUtilsEx.TIMEZONE_8, DateUtilsEx.FORMAT3))).
                    limit(oInVo.getLimit()).skip(oInVo.getSkip());
        } else {
            oQueryCount = new Query(Criteria.where("feedBackTime").
                    ne(DateUtilsEx.now(DateUtilsEx.TIMEZONE_8, DateUtilsEx.FORMAT3)));
            oQuery = new Query(Criteria.where("feedBackTime").
                    ne(DateUtilsEx.now(DateUtilsEx.TIMEZONE_8, DateUtilsEx.FORMAT3))).
                    limit(oInVo.getLimit()).skip(oInVo.getSkip());
        }
        long iCount = this.mongoTemplate.count(oQueryCount, TBLHealthTrackUser.class);
        List<TBLHealthTrackUser> lstRes = this.mongoTemplate.find(oQuery, TBLHealthTrackUser.class);

        //trans
        oOutVo.setCount(iCount);
        for (TBLHealthTrackUser oTBLHealthTrackUser : lstRes) {
            oOutVo.add(oTBLHealthTrackUser);
        }

        return oOutVo;
    }

    //#endregion
}
