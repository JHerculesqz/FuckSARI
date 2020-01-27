<template>
  <div class="dashboardWrapper">
    <div class="leftArea">
      <marvel-chart-pie ref="refPie2" id="refPie2" theme=""></marvel-chart-pie>
    </div>
    <div class="rightArea">
      <div class="rightAreaTop">
        <form-list ref="formLst2" :columnNum=1 :formLst="formLst2" @onBtnClick="_onBtnClick"></form-list>
      </div>
      <div class="rightAreaBottom">
        <marvel-table ref="formTable2"
                      gridId="formTable2"
                      :titles="titles"
                      :rows="rows"
                      :limit="limit"
                      :canDrag="false"
                      :hasFoot="true"
                      :columnConfig="false"
                      :showChangeLimit="false"
                      v-on:onIconClick="_onIconClick"
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
    name: 'dashboard2',
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
        formLst2:[{
          name: "地区状态：",
          key: "location",
          type: "inputWithBtn",
          editVisible: true,
          placeHolder: "请输入省名称",
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
          btnKey: "locationBtn",
          btnName: "查询",
          hasTip: false,
          status: "",
          errMsg: "",
          defaultValue: ""
        }],
        /*endregion*/
        /*region grid*/
        titles:[{
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
        status:"全国"
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
            type: 1,
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
        this.$refs.refPie2.setData(oRes);
      },

      _getGridData: function(oAfterCallback){
        var self = this;
        var oRes = {};
        var reqBody = {
          reqBuVoStr: JSON.stringify({
            type: 1,
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

      _onBtnClick: function (strBtnKey) {
        //获取输入内容
        var self = this;
        var strInputValue = this.$refs.formLst2.getValue().location;
        this.status = strInputValue;

        this._getGridData(function (oRes) {
          self._setGridData(oRes);
        });
      },

      _onPageChange: function (iPage) {
        this.iPage = iPage;
      },

      _onIconClick: function (oRow, oCell, oIcon) {
        console.log(oRow);
        console.log(oCell);
        console.log(oIcon);
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
    width: calc(100% - 400px);
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
