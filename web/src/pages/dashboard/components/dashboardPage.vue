<template>
  <div class="formPageWrapper">
    <div class="topArea">
      <div class="dashboardStyle dashboardStyle1">
        <marvel-dashboard title="人员状态分布">
          <div slot="customArea"></div>
          <div slot="contArea" style="height: 100%;overflow:auto;">
            <dashboard1 @showHistory="_showHistory"></dashboard1>
          </div>
        </marvel-dashboard>
      </div>
    </div>
    <div class="centerArea">
      <div class="dashboardStyle dashboardStyle2">
        <marvel-dashboard title="人员地区分布">
          <div slot="customArea"></div>
          <div slot="contArea" style="height: 100%;overflow:auto;">
            <dashboard2 @showHistory="_showHistory"></dashboard2>
          </div>
        </marvel-dashboard>
      </div>
    </div>
    <div class="bottomArea">
      <div class="dashboardStyle dashboardStyle3">
        <marvel-dashboard title="人员反馈情况">
          <div slot="customArea"></div>
          <div slot="contArea" style="height: 100%;overflow:auto;">
            <dashboard3 @showHistory="_showHistory"></dashboard3>
          </div>
        </marvel-dashboard>
      </div>

    </div>
    <marvel-dialog :showDialog="showDialog" :canDrag="true" :hasFoot="false"
                   title="历史数据" :width="800" :height="600"
                   v-on:onClickDialogClose="_onClickDialogClose">
      <div v-if="showDialog" slot="dialogCont" style="width: 100%;height: 100%">
        <dialog-cont :userId="userId"></dialog-cont>
      </div>
    </marvel-dialog>
  </div>
</template>

<script>
  import HttpUtils from "./0.common/httpUtil/httpUtils";
  import FormList from "../../../components/form/formList";
  import MarvelDashboard from '~/widget/dboard/MarvelDashboard';
  import MarvelButton from '~/widget/btn/MarvelButton';
  import MarvelDialog from '~/widget/dialog/MarvelDialog';
  import CookieUtils from '~/component/cookie';
  import StrUtils from '~/component/str';
  import DateUtils from '~/component/date';
  import oMockUtils from "./0.common/mock"
  import Dashboard1 from "./dashboard1";
  import Dashboard2 from "./dashboard2";
  import Dashboard3 from "./dashboard3";
  import DialogCont from "./dialogCont";

  export default {
    name: 'dashboardPage',
    components: {
      DialogCont,
      Dashboard3,
      Dashboard2,
      Dashboard1,
      FormList,
      MarvelButton,
      MarvelDashboard,
      MarvelDialog
    },
    props: {},
    data() {
      return {
        /*region const*/
        debug: false,
        /*endregion*/
        showDialog: false,
        userId:""
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

      _showHistory: function (oRow) {
        this.userId = this._getCellByKey(oRow, "userId").value;
        this.showDialog = true
      },

      _onClickDialogClose: function () {
        this.showDialog = false
      },

      _getCellByKey: function (oRow, key) {
        for(var i = 0; i<oRow.length; i++){
          var oCell = oRow[i];
          if(oCell.key == key){
            return oCell;
          }
        }
      }

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

  .centerArea{
    height: 50%;
    width: 100%;
    padding: 0 10px 0 10px;
    box-sizing: border-box;
  }

  .bottomArea{
    height: 50%;
    width: 100%;
    padding: 0 10px 10px 10px;
    box-sizing: border-box;
  }

  .dashboardStyle{
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

</style>
