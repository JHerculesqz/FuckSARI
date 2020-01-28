<template>
  <div class="dialogContWrapper">
    <marvel-chart-line ref="chartLine" id="chartLine" theme="dark"></marvel-chart-line>
  </div>
</template>

<script>
  import HttpUtils from "./0.common/httpUtil/httpUtils";
  import FormList from "../../../components/form/formList";
  import MarvelButton from '~/widget/btn/MarvelButton';
  import MarvelChartLine from '~/widget/echart/MarvelChartLine';
  import CookieUtils from '~/component/cookie';
  import StrUtils from '~/component/str';
  import DateUtils from '~/component/date';
  import oMockUtils from "./0.common/mock"

  export default {
    name: 'dialogCont',
    components: {
      FormList,
      MarvelButton,
      MarvelChartLine
    },
    props: {
      userId:{
        type: String,
        default: "",
        required: false,
      }
    },
    data() {
      return {
        /*region const*/
        debug: false,
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
        this._getLineData(function (oRes) {
          self._setLineData(oRes);
        });
      },

      _destroyed: function () {
      },

      //#endregion

      _getLineData: function (oAfterCallback) {
        var oRes = {};
        var reqBody = {
          reqBuVoStr: JSON.stringify({
            userId: this.userId
          })
        };
        if(this.debug){
          console.log(reqBody);
          oRes = oMockUtils.mock4GetLineData().resultObj;
          oAfterCallback(oRes);
        }else{
          HttpUtils.post("getLineDataHistory", reqBody).then(res => {
            oRes = res.data.resultObj;
            oAfterCallback(oRes);
          });
        }
      },

      _setLineData: function (oRes) {
        var self = this;
        var oOption = {
          title: "",
          backgroundColor: "rgba(0,0,0,0)",
          splitLine: true,
          min:"dataMin",
          max:"dataMax",
          data: []
        };
        oOption.data = JSON.parse(JSON.stringify(oRes.pointVoList));
        this.$nextTick(function () {
          self.$refs.chartLine.setData(oOption);
        });
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

  .dialogContWrapper {
    width: 760px;
    height: 500px;
    position: relative;
    overflow: auto;
  }

</style>
