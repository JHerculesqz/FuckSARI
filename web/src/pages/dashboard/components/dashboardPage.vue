<template>
  <div class="formPageWrapper darkGray">
    <div class="topArea">
      <div class="dashboardStyle dashboardStyle1">
        <marvel-dashboard title="人员状态分布">
          <div slot="customArea"></div>
          <div slot="contArea" style="height: 100%;overflow:auto;">
            <dashboard1 ref="dashboard2" @showHistory="_showHistory"></dashboard1>
          </div>
        </marvel-dashboard>
      </div>
    </div>
    <div class="centerArea">
      <div class="dashboardStyle dashboardStyle3">
        <marvel-dashboard title="人员反馈情况">
          <div slot="customArea"></div>
          <div slot="contArea" style="height: 100%;overflow:auto;">
            <dashboard3 ref="dashboard3" @showHistory="_showHistory"></dashboard3>
          </div>
        </marvel-dashboard>
      </div>
    </div>
    <div class="bottomArea">
      <div class="dashboardStyle dashboardStyle2">
        <marvel-dashboard title="人员地区分布">
          <div slot="customArea"></div>
          <div slot="contArea" style="height: 100%;overflow:auto;">
            <dashboard2 ref="dashboard1" @showHistory="_showHistory"></dashboard2>
          </div>
        </marvel-dashboard>
      </div>
    </div>
    <marvel-dialog :showDialog="showDialog" :draggable="true" :hasFoot="false"
                   title="历史数据" :width="800" :height="600"
                   v-on:onClickDialogClose="_onClickDialogClose">
      <div v-if="showDialog" slot="dialogCont" style="width: 100%;height: 100%">
        <dialog-cont :userId="userId"></dialog-cont>
      </div>
    </marvel-dialog>
  </div>
</template>

<script>
  import MarvelTimer from "~/component/timer";
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
        /*region dialog*/
        showDialog: false,
        userId:"",
        /*endregion*/
        /*region timer*/
        timer: undefined,
        timerInterval: 5000
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
        this._startTimeInterval();
      },

      _destroyed: function () {
        this._endTimeInterval();
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
      },
      
      _startTimeInterval: function () {
        var self = this;
        if (self.timer == undefined) {
          self.timer = MarvelTimer.startTimer(function () {
            self.$refs.dashboard1.refresh();
            self.$refs.dashboard2.refresh();
            self.$refs.dashboard3.refresh();
          }, self.timerInterval);
        }
      },

      _endTimeInterval: function () {
        MarvelTimer.endTimer(this.timer);
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
    height: 100%;
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

  /*region darkGray*/

  .darkGray{
    background-color: #000e1c;
  }

  /*endregion*/

</style>

<style>
  /*region table*/
  .wfMarvelTable {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .wfMarvelTable .titleArea {
    width: 100%;
    height: 22px !important;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #eee;
  }

  .wfMarvelTable .freezeTables{
    height: calc(100% - 26px) !important;
  }

  .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont{
    border: none;
  }

  .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont thead{
    height: 28px;
  }

  .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont thead tr th{
    height: 28px;
    line-height: 28px;
    font-size: 14px;
  }

  .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont thead tr th:last-child:after{
    height: 28px !important;
  }

  .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont tbody{
    height: calc(100% - 28px);
  }

  .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont tbody tr td{
    height: 26px;
    font-size: 14px;
    font-weight: lighter;
  }

  .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont tbody tr td .textCell{
    line-height: 22px !important;
  }

  .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont tbody tr td .inputWrapper .radio .inputDefault{
    height: 22px;
  }

  .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont tbody tr td .dropdownBtnWrapper{
    height: 22px;
  }

  .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont tbody tr td .dropdownBtnWrapper .dropdownBtn{
    height: 22px;
    font-size: 12px;
  }

  .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont tbody tr td .dropdownBtnWrapper .dropdownBtn .label{
    height: 22px;
    font-size: 12px;
    border: none;
  }

  .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont tbody tr td .dropdownBtnWrapper .dropdownBtn .label .name{
    height: 20px;
    line-height: 20px;
    font-size: 12px;
  }

  .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont tbody tr td .dropdownBtnWrapper .dropdownBtn .label .expandAndFolderIcon{
    height: 20px;
    line-height: 20px;
    font-size: 12px;
  }

  .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont tbody tr td .dropdownBtnWrapper .dropdownBtn .options{
    bottom: 2px;
  }

  .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont tbody tr td .dropdownBtnWrapper .dropdownBtn .options .optionItem{
    height: 20px;
    line-height: 20px;
    font-size: 12px;
  }

  .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont tbody tr td .dropdownBtnWrapper .dropdownBtn .options .optionItem div{
    height: 20px;
    line-height: 20px;
    font-size: 12px;
  }

  .wfMarvelTable .footArea {
    height: 26px !important;
    padding: 0 4px !important;
    box-sizing: border-box;
    text-align: center;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }

  .wfMarvelTable .footArea .foot .pageSwitch .item{
    height: 18px;
    position: relative;
    top: 3px;
    line-height: 18px;
  }

  .wfMarvelTable .footArea .foot .select-page{
    position: relative;
    top: 2px;
  }

  .wfMarvelTable .footArea .foot .text{
    position: relative;
    top: 1px;
  }

  /*region darkGray*/

  .darkGray .wfMarvelTable{
    border: 1px solid #0e345e;
    border-bottom: none;
    box-sizing: border-box;
  }

  .darkGray .wfMarvelTable .titleArea {
    background-color: #031225 !important;
  }

  .darkGray .wfMarvelTable .freezeTables .freezeTable .gridWrapper{
    background-color: #031225;
  }

  .darkGray .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont{
    border-color: #0e345e;
  }

  .darkGray .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont thead{
    background-color: transparent;
  }

  .darkGray .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont thead tr th{
    background-color: #001a4c;
    border-color: #0e345e;
    color: #fff;
  }

  .darkGray .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont tbody tr td .textCell{
    color: rgba(255,255,255,0.8) !important;
  }

  .darkGray .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont thead tr th:last-child:after{
    background-color: #001a4c;
    border-color: #0e345e;
  }

  .darkGray .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont tbody  .evenRow{
    background-color: transparent !important;
    border-color: #0e345e;
  }

  .darkGray .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont tbody  tr:hover{
    background-color: #0e345e !important;
  }

  .darkGray .wfMarvelTable .freezeTables .freezeTable .gridWrapper .grid .gridCont tbody  tr td{
    border-color: #0e345e;
  }

  .darkGray .wfMarvelTable .footArea{
    border-color: #0e345e !important;
    background-color: #001a4c;
  }

  .darkGray .wfMarvelTable .footArea .foot .pageSwitch .item{
    color: #f0f0f0;
  }

  .darkGray .wfMarvelTable .footArea .foot .select-page{
    color: #ccc;
  }

  .darkGray .wfMarvelTable .footArea .foot .select-page select{
    color: #ccc;
    border: none;
    background-color: #000f1e;
  }

  .darkGray .wfMarvelTable .footArea .foot .text{
    color: #ccc;
  }

  /*endregion*/

  /*endregion*/

  /*region dashboard*/

  .darkGray .dashboardWrapper {
    background-color: #03182d !important;
    box-shadow: 0 0 2px #3399ff !important;
  }

  .darkGray .dashboardWrapper .title .titleArea {
    color: #3399ff  !important;
    font-weight: bold;
  }

  /*endregion*/

  /*region radio*/

  .darkGray .radioLabel {
    color: #ccc !important;
  }

  /*endregion*/

  /*region input*/

  .darkGray .inputWrapper {
    background-color: #000e1c;
  }

  .darkGray .inputWrapper .placeHolder {
    color: #999 !important;
  }

  .darkGray .inputDefault {
    border: 1px solid #224989 !important;
    font-size: 14px;
    color: #ffffff !important;
    background-color: transparent;
  }

  /*endregion*/

  /*region dialog*/

  .darkGray .tipDialogWrapper {
    box-shadow: 0 0 2px #3399ff !important;
    background-color: #001c39 !important;
  }

  .darkGray .tipDialogTitleArea .titleName:before {
    background-color: #3399ff;
  }

  .darkGray .tipDialogTitleArea .titleName {
    color: #FFF !important;
  }

  .darkGray .tipDialogTitleArea .closeBtn {
    color: #FFF !important;
  }

  .darkGray .tipDialogWrapper .tipDialogContArea {
  }

  .darkGray .tipDialogWrapper .tipDialogBtnArea {
    background-color: #1e1f36;
  }

  /*endregion*/

</style>
