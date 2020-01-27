<template>
  <div class="formPageWrapper">
    <div class="topArea">
      <div class="dashboardStyle dashboardStyle1">
        <marvel-dashboard title="人员状态分布">
          <div slot="customArea"></div>
          <div slot="contArea" style="height: 100%;overflow:auto;">
            <dashboard1></dashboard1>
          </div>
        </marvel-dashboard>
      </div>
    </div>
    <div class="bottomArea">
      <div class="dashboardStyle dashboardStyle2">
        <marvel-dashboard title="人员地区分布">
          <div slot="customArea"></div>
          <div slot="contArea" style="height: 100%;overflow:auto;">
            <dashboard2></dashboard2>
          </div>
        </marvel-dashboard>
      </div>
      <div class="dashboardStyle dashboardStyle3">
        <marvel-dashboard title="人员反馈情况">
          <div slot="customArea"></div>
          <div slot="contArea" style="height: 100%;overflow:auto;">
            <dashboard3></dashboard3>
          </div>
        </marvel-dashboard>
      </div>

    </div>
    <div class="logoArea"></div>
  </div>
</template>

<script>
  import HttpUtils from "./0.common/httpUtil/httpUtils";
  import FormList from "../../../components/form/formList";
  import MarvelDashboard from '~/widget/dboard/MarvelDashboard';
  import MarvelButton from '~/widget/btn/MarvelButton';
  import CookieUtils from '~/component/cookie';
  import StrUtils from '~/component/str';
  import DateUtils from '~/component/date';
  import oMockUtils from "./0.common/mock"
  import Dashboard1 from "./dashboard1";
  import Dashboard2 from "./dashboard2";
  import Dashboard3 from "./dashboard3";

  export default {
    name: 'dashboardPage',
    components: {
      Dashboard3,
      Dashboard2,
      Dashboard1,
      FormList,
      MarvelButton,
      MarvelDashboard
    },
    props: {},
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
      },

      _destroyed: function () {
      },

      //#endregion

      //#endregion
      //#region callback
      //#endregion
      //#region 3rd
      //#endregion
    }
  }
</script>

<style scoped>

  .formPageWrapper {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: auto;
    background-color: #f0f0f0;
  }

  .topArea{
    height: 50%;
    width: 100%;
    padding: 10px 10px 0 10px;
    box-sizing: border-box;
  }

  .bottomArea{
    height: 50%;
    width: 100%;
    padding: 0 10px 10px 10px;
    box-sizing: border-box;
  }

  .logoArea{
    position: absolute;
    width: 60%;
    height: 60%;
    top: 20%;
    left: 20%;
    /*background: url("../../../../static/images/dun.svg") no-repeat center;*/
    /*background-size: contain;*/
    pointer-events: none;
  }

  .dashboardStyle{
    padding: 10px;
    box-sizing: border-box;
  }

  .dashboardStyle1{
    width: 100%;
    height: 100%;
  }
  .dashboardStyle2{
    width: 50%;
    height: 100%;
    float: left;
  }
  .dashboardStyle3{
    width: 50%;
    height: 100%;
    float: left;
  }

</style>
