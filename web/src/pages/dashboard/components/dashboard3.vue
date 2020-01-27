<template>
  <div class="dashboardWrapper">
    <div class="leftArea">
      <marvel-chart-pie ref="refPie3" id="refPie3" theme=""></marvel-chart-pie>
    </div>
    <div class="rightArea">
      <div class="rightAreaTop">
        <form-list ref="formLst3" :columnNum=1 :formLst="formLst3" @onRadioBoxesChange="_onRadioBoxesChange"></form-list>
      </div>
      <div class="rightAreaBottom">
        <marvel-table ref="formTable3"
                      gridId="formTable3"
                      :titles="titles"
                      :rows="rows"
                      :limit="limit"
                      :totalNum="totalNum"
                      :dynamicPaging="true"
                      :canDrag="false"
                      :hasFoot="true"
                      :columnConfig="false"
                      :showChangeLimit="false"
                      v-on:onIconClick="callback4OnIconClick"
                      v-on:onPageChange="_onPageChange"></marvel-table>
      </div>
    </div>
  </div>
</template>

<script>
  import HttpUtils from "./0.common/httpUtil/httpUtils";
  import FormList from "../../../components/form/formList";
  import MarvelDashboard from '~/widget/dboard/MarvelDashboard';
  import MarvelButton from '~/widget/btn/MarvelButton';
  import MarvelChartPie from "~/widget/echart/MarvelChartPie";
  import MarvelTable from '~/widget/table/MarvelTable';
  import CookieUtils from '~/component/cookie';
  import StrUtils from '~/component/str';
  import DateUtils from '~/component/date';
  import oMockUtils from "./0.common/mock"

  export default {
    name: 'dashboard3',
    components: {
      FormList,
      MarvelButton,
      MarvelDashboard,
      MarvelChartPie,
      MarvelTable
    },
    props: {},
    data() {
      return {
        /*region const*/
        debug: false,
        /*endregion*/
        /*region formLst*/
        formLst3:[{
          name: "反馈状态：",
          key: "feedbackStatus",
          type: "radioBoxes",
          editVisible: true,
          placeHolder: "",
          size: "",
          labelBeforeW: "",
          labelFormW: "",
          labelAfterW: "",
          afterText: "",
          validatorRule: {
            require: false,
            validateType: "",
            ruleRegex: "",
            ruleStringRange: [],
            ruleDigitRange: []
          },
          group: "radioGroup2",
          radioLst: [{
            key: "feedback1",
            name: "已反馈",
            defaultValue: true
          }, {
            key: "feedback2",
            name: "未反馈",
            defaultValue:  false
          }],
          hasTip: false,
          status: "",
          errMsg: "",
          defaultValue: ""
        }],
        /*endregion*/
        /*region grid*/
        titles:[{
          label: "ID",
          key: "id",
          type: "text",
          visible: false,
          width: "100px",
        },{
          label: "用户",
          key: "userId",
          type: "text",
          visible: true,
          width: "100px",
        },{
          label: "用户组",
          key: "userGroup",
          type: "text",
          visible: true,
          width: "100px",
        },{
          label: "所在地",
          key: "location",
          type: "text",
          visible: true,
          width: "100px",
        },{
          label: "体温",
          key: "temperature",
          type: "text",
          visible: true,
          width: "100px",
        },{
          label: "异常情况",
          key: "healthInfo",
          type: "text",
          visible: true,
          width: "100px",
        },{
          label: "操作列(查看历史体温)",
          key: "operation",
          type: "icon",
          visible: true,
          width: "100px"
        }],
        rows:[],
        limit:50,
        iPage: 1,
        totalNum:0,
        status:"FEEDBACK"
        /*endregion*/
      }
    },
    mounted: function () {
      //#region init

      this._initEx();

      //#endregion
    },
    destroyed: function () {
      //#region custom

      this._destroyed();

      //#endregion
    },
    methods: {
      //#region inner

      //#region lifeCycle

      _initEx: function () {
        var self = this;
        this._getPieData(function (oRes) {
          self._setPieData(oRes);
        });
        this._getGridData(function (oRes) {
          self._setGridData(oRes);
        });
      },

      _destroyed: function () {
      },

      //#endregion

      _getPieData: function(oAfterCallback){
        var self = this;
        var oRes = {};
        var reqBody = {
          reqBuVoStr: JSON.stringify({
            type: 2,
          })
        };
        if(this.debug){
          console.log(reqBody);
          oRes = oMockUtils.mock4GetPieData().resultObj;
          oAfterCallback(oRes);
        }else{
          HttpUtils.post("getPieData", reqBody).then(res => {
            oRes = res.data.resultObj;
            oAfterCallback(oRes);
          });
        }
      },

      _setPieData: function(oRes){
        oRes.radius = "50%";
        this.$refs.refPie3.setData(oRes);
      },

      _getGridData: function(oAfterCallback){
        var self = this;
        var oRes = {};
        var reqBody = {
          reqBuVoStr: JSON.stringify({
            type: 2,
            subType: this.status,
            limit: this.limit,
            skip: (this.iPage - 1) * this.limit
          })
        };
        if(this.debug){
          console.log(reqBody);
          oRes = oMockUtils.mock4GetGridData().resultObj;
          oAfterCallback(oRes);
        }else{
          HttpUtils.post("getGridData", reqBody).then(res => {
            oRes = res.data.resultObj;
            oAfterCallback(oRes);
          });
        }
      },

      _setGridData: function(oRes){
        this.totalNum = oRes.count;
        var arrRows = [];
        var arrRowsVo = JSON.parse(JSON.stringify(oRes.rowVos));
        for(var i = 0; i< arrRowsVo.length; i++){
          var oRow = arrRowsVo[i].cellVos;
          oRow.push({
            key: "id",
            value: StrUtils.uuid(),
          });
          oRow.push({
            key: "operation",
            value: [{
              value: "icon-stats-dots",
              color: "#3399ff",
              label: "查看历史数据"
            }]
          });

          arrRows.push(oRow);
        }
        this.rows = JSON.parse(JSON.stringify(arrRows));
      },

      _onRadioBoxesChange: function (key, value) {
        var self = this;

        if(value == "已反馈"){
          this.status = "FEEDBACK";
        }else if(value == "未反馈"){
          this.status = "FEEDBACK_N";
        }

        this._getGridData(function (oRes) {
          self._setGridData(oRes);
        });
      },

      _onPageChange: function (iPage) {
        this.iPage = iPage;
      },

      callback4OnIconClick: function (oRow, oCell, oIcon) {
        this.$emit("showHistory", oRow);
      },

      //#endregion
      //#region callback
      //#endregion
      //#region 3rd
      //#endregion
    }
  }
</script>

<style scoped>

  .dashboardWrapper {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: auto;
  }

  .leftArea{
    width: 400px;
    height: 100%;
    float: left;
  }

  .rightArea{
    width: calc(100% - 410px);
    height: 100%;
    float: left;
  }

  .rightAreaTop{
    height: 52px;
  }
  .rightAreaBottom{
    height: calc(100% - 52px);
  }

</style>
