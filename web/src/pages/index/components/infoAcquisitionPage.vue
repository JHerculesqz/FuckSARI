<template>
  <div class="formPageWrapper">
    <div class="contTitle">
      调查问卷
    </div>
    <p class="contDescribe">
      调查问卷信息描述，调查问卷信息描述，调查问卷信息描述，调查问卷信息描述，调查问卷信息描述，调查问卷信息描述。
    </p>
    <div class="contentArea">
      <form-list :ref="sessionKeyName1[0]" :columnNum=1 :formLst="formLst1_0"></form-list>
      <div class="labelArea">当前所在地：</div>
      <form-list :ref="sessionKeyName1[2]" :columnNum=10 :formLst="formLst1_2"></form-list>
      <form-list :ref="sessionKeyName1[3]" :columnNum=1 :formLst="formLst1_3"></form-list>
    </div>
    <marvel-button ref="confirm" label="提交" classCustom="classCustom4LicenseBtn" size="large"
                   v-on:onClick="_onClickToConfirm"></marvel-button>
  </div>
</template>

<script>
  import FormList from "../../../components/form/formList";
  import MarvelButton from '~/widget/btn/MarvelButton';
  import oMockUtils from "./mock"

  export default {
    name: 'infoAcquisitionPage',
    components: {
      FormList,
      MarvelButton
    },
    props: {},
    data() {
      return {
        /*region const*/
        debug: true,
        /*endregion*/
        /*region form*/
        sessionKeyName1:["form_0", "form_1", "form_2"],

        formLst1_0:[],
        formLst1_2:[],
        formLst1_3:[],
        /*endregion*/
        /*region data rule*/
        arrDataRuleLst:[]
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
        this._loadConfigVo(function (oRes) {
          self._setConfigVo(oRes);
        });
      },

      _destroyed: function () {
      },

      //#endregion

      _loadConfigVo: function(oAfterCallback){
        var oRes = {};
        if(this.debug){
          oRes = oMockUtils.mock4LoadConfigVo();
        }else{
          var strRes =  buConfigInner.loadConfigVo4AxisJSResp();
          oRes = JSON.parse(strRes);
        }

        oAfterCallback(oRes);
      },

      _setConfigVo: function(oRes){
        /*region formLst1*/

        this.formLst1_0 = [{
          name: "姓名：",
          key: "name",
          type: "input",
          editVisible: true,
          placeHolder: "",
          size: "normal",
          labelBeforeW: "100%",
          labelFormW: "100%",
          labelAfterW: "",
          afterText: "",
          validatorRule: {
            require: true,
            validateType: "",
            ruleRegex: "",
            ruleStringRange: [],
            ruleDigitRange: []
          },
          status: "",
          errMsg: "",
          defaultValue: oRes.distanceRangeX
        }];
        this.formLst1_2 = [{
          name: "省：",
          key: "sheng",
          type: "dropdown",
          editVisible: true,
          placeHolder: "",
          size: "normal",
          labelBeforeW: "35px",
          labelFormW: "calc(100% - 35px)",
          labelAfterW: "",
          afterText: "",
          validatorRule: {
            require: true,
            validateType: "",
            ruleRegex: "",
            ruleStringRange: [],
            ruleDigitRange: []
          },
          dropItems: [{
            label: "是",
            active: false,
          }, {
            label: "否",
            active: true,
          }],
          status: "",
          errMsg: "",
          defaultValue: ""
        },{
          name: "市：",
          key: "shi",
          type: "dropdown",
          editVisible: true,
          placeHolder: "",
          size: "normal",
          labelBeforeW: "35px",
          labelFormW: "calc(100% - 35px)",
          labelAfterW: "",
          afterText: "",
          validatorRule: {
            require: true,
            validateType: "",
            ruleRegex: "",
            ruleStringRange: [],
            ruleDigitRange: []
          },
          dropItems: [{
            label: "是",
            active: false,
          }, {
            label: "否",
            active: true,
          }],
          status: "",
          errMsg: "",
          defaultValue: ""
        }];
        this.formLst1_3 = [{
          name: "当前体温(℃)：",
          key: "temperature",
          type: "input",
          editVisible: true,
          placeHolder: "",
          size: "normal",
          labelBeforeW: "100%",
          labelFormW: "100%",
          labelAfterW: "",
          afterText: "",
          validatorRule: {
            require: true,
            validateType: "",
            ruleRegex: "",
            ruleStringRange: [],
            ruleDigitRange: []
          },
          status: "",
          errMsg: "",
          defaultValue: oRes.distanceRangeX
        },{
          name: "是与否疑似病例有接触：",
          key: "touch",
          type: "dropdown",
          editVisible: true,
          placeHolder: "",
          size: "normal",
          labelBeforeW: "100%",
          labelFormW: "100%",
          labelAfterW: "",
          afterText: "",
          validatorRule: {
            require: true,
            validateType: "",
            ruleRegex: "",
            ruleStringRange: [],
            ruleDigitRange: []
          },
          dropItems: [{
            label: "是",
            active: false,
          }, {
            label: "否",
            active: true,
          }],
          status: "",
          errMsg: "",
          defaultValue: ""
        }];

        /*endregion*/
      },

      _getFormValue: function () {
        var oFormLst1_0 = this.$refs[this.sessionKeyName1[0]].getValue();
        var oFormLst1_2 = this.$refs[this.sessionKeyName1[2]].getValue();
        var oFormLst1_3 = this.$refs[this.sessionKeyName1[3]].getValue();

        var arrFormLstVal = [oFormLst1_0, oFormLst1_2, oFormLst1_3];

        var oValue = this._combineValue(arrFormLstVal);
        var oTargetValue = this._filterValueByDataRule(oValue);

        return oTargetValue;
      },

      _combineValue: function(arrValueLst){
        var oTargetVal = {};

        for(var i = 0; i< arrValueLst.length; i++){
          var oValueLst = arrValueLst[i];

          for(var key in oValueLst){
            oTargetVal[key] = oValueLst[key];
          }
        }

        return oTargetVal;
      },

      _filterValueByDataRule: function(oInValue){
        var oValue = JSON.parse(JSON.stringify(oInValue));
        for(var strKey in oValue){
          for(var i = 0; i<this.arrDataRuleLst.length; i++){
            var oRule = this.arrDataRuleLst[i];
            if(oRule.key == oValue[strKey]){
              oValue[strKey] = oRule.value;
            }
          }
        }
        return oValue
      },

      _onClickToConfirm: function () {
        var oValue = this._getFormValue();
        console.log(oValue);
        console.log(JSON.stringify(oValue));
        if(this.debug){
          return oValue;
        }else{
          buConfigInner.saveConfigVo4AxisJSResp(JSON.stringify(oValue));
        }
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
    overflow: hidden;
    background: url("../../../../static/images/dun.svg") no-repeat center;
    background-size: contain;
  }

  .contTitle{
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
    color: #3399ff;
  }

  .contDescribe{
    width: 80%;
    margin: 0 auto 20px auto;
    line-height: 22px;
    font-size: 14px;
    color: #666666;
  }

  .contentArea{
    width: 80%;
    overflow: visible;
    margin: 0 auto;
  }

  .labelArea{
    float: left;
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: #666;
    line-height: 32px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

</style>

<style>

  .column_flow{
    width: 45%;
  }

  .column_flow:nth-child(2){
    float: right !important;
  }

  .classCustom4LicenseBtn{
    width: 80%;
    margin: 0 auto;
    display: block !important;
    text-align: center;
    max-width: unset !important;
  }
</style>
