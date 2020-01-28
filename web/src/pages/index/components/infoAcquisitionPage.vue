<template>
  <div class="formPageWrapper">
    <div class="contTitle">
      {{year}}年{{month}}月{{day}}日健康打卡
    </div>
    <p class="contDescribe">
      群防群控，硬核抗疫，请大家做好防护，保护好自己和家人。坚信这一切终将过去，我们会摘下口罩，一如既往，去想去的地方，见想见的人，吃想吃的美食，让我们一起加油！
    </p>
    <div class="contentArea">
      <form-list :ref="sessionKeyName1[0]" :columnNum=1 :formLst="formLst1_0"></form-list>
      <div class="labelArea">当前所在地：</div>
      <form-list :ref="sessionKeyName1[1]" :columnNum=10 :formLst="formLst1_1"></form-list>
      <form-list :ref="sessionKeyName1[2]" :columnNum=1 :formLst="formLst1_2"></form-list>
      <div class="labelArea">身体是否有异常情况：</div>
      <form-list :ref="sessionKeyName1[3]" :columnNum=2 :formLst="formLst1_3"></form-list>
    </div>
    <marvel-button ref="confirm" label="提交" classCustom="classCustom4LicenseBtn" size="large"
                   v-on:onClick="_onClickToConfirm"></marvel-button>
  </div>
</template>

<script>
  import Bus from "~/core/bus";
  import HttpUtils from "./0.common/httpUtil/httpUtils";
  import FormList from "../../../components/form/formList";
  import MarvelButton from '~/widget/btn/MarvelButton';
  import CookieUtils from '~/component/cookie';
  import StrUtils from '~/component/str';
  import DateUtils from '~/component/date';
  import oMockUtils from "./0.common/mock"

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
        debug: false,
        /*endregion*/
        /*region date*/
        year:"",
        month:"",
        day:"",
        /*endregion*/
        /*region form*/
        sessionKeyName1:["form_0", "form_1", "form_2", "form_3"],

        formLst1_0:[],
        formLst1_1:[],
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
        var oDate = DateUtils.nowByObj();
        this.year = oDate.year;
        this.month = oDate.month;
        this.day = oDate.day;
        this._loadConfigVo(function (oRes) {
          self._setConfigVo(oRes);
        });
      },

      _destroyed: function () {
      },

      //#endregion

      _loadConfigVo: function(oAfterCallback){
        var self = this;
        var oRes = {};
        var reqBody = {
          reqBuVoStr: JSON.stringify({
            userId: CookieUtils.getCookie("userId") == null ?"":CookieUtils.getCookie("userId"),
          })
        };
        if(this.debug){
          console.log(reqBody);
          oRes = oMockUtils.mock4LoadConfigVo().resultObj;
          oAfterCallback(oRes);
        }else{
          HttpUtils.post("getAutoUserInfoByUserID", reqBody).then(res => {
            oRes = res.data.resultObj;
            oAfterCallback(oRes);
          });
        }
      },

      _setConfigVo: function(oRes){
        /*region formLst1*/

        CookieUtils.setCookie("userId", oRes.userId);

        var strSheng ="";
        var strShi = "";
        if(oRes.location != "" && oRes.location != undefined){
          var arrStr = StrUtils.split(oRes.location, "-");
          strSheng = arrStr[0];
          strShi = arrStr[1];
        }

        var bFever = false;
        var bCough = false;
        var bCold = false;
        var bWeak = false;
        if(oRes.healthInfo != "" && oRes.healthInfo != undefined){
          var arrStr = StrUtils.split(oRes.healthInfo, ",");
          for(var i = 0; i<arrStr.length; i++){
            if(arrStr[i] == "发热"){
              bFever = true;
            }else if(arrStr[i] == "咳嗽"){
              bCough = true;
            }else if(arrStr[i] == "感冒"){
              bCold = true;
            }else if(arrStr[i] == "四肢无力"){
              bWeak = true;
            }
          }
        }

        this.formLst1_0 = [{
          name: "姓名：",
          key: "userId",
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
          defaultValue: oRes.userId
        }];
        this.formLst1_1 = [{
          name: "省：",
          key: "sheng",
          type: "input",
          editVisible: true,
          placeHolder: "",
          size: "normal",
          labelBeforeW: "42px",
          labelFormW: "calc(100% - 42px)",
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
          defaultValue: strSheng
        },{
          name: "市：",
          key: "shi",
          type: "input",
          editVisible: true,
          placeHolder: "",
          size: "normal",
          labelBeforeW: "42px",
          labelFormW: "calc(100% - 42px)",
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
          defaultValue: strShi
        }];
        this.formLst1_2 = [{
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
            ruleDigitRange: [{
              min:0,
              max:100
            }]
          },
          status: "",
          errMsg: "",
          defaultValue: oRes.temperature
        }];
        this.formLst1_3 = [{
          name: "发热",
          key: "fever",
          type: "checkBox",
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
          hasTip: false,
          status: "",
          errMsg: "",
          defaultValue: bFever
        },{
          name: "咳嗽",
          key: "cough",
          type: "checkBox",
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
          hasTip: false,
          status: "",
          errMsg: "",
          defaultValue: bCough
        },{
          name: "感冒",
          key: "cold",
          type: "checkBox",
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
          hasTip: false,
          status: "",
          errMsg: "",
          defaultValue: bCold
        },{
          name: "四肢无力",
          key: "weak",
          type: "checkBox",
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
          hasTip: false,
          status: "",
          errMsg: "",
          defaultValue: bWeak
        }];

        /*endregion*/
      },

      _getFormValue: function () {
        var oFormLst1_0_validate = this.$refs[this.sessionKeyName1[0]].validateAll();
        var oFormLst1_1_validate = this.$refs[this.sessionKeyName1[1]].validateAll();
        var oFormLst1_2_validate = this.$refs[this.sessionKeyName1[2]].validateAll();
        var oFormLst1_3_validate = this.$refs[this.sessionKeyName1[3]].validateAll();

        if(!oFormLst1_0_validate || !oFormLst1_1_validate || !oFormLst1_2_validate || !oFormLst1_3_validate){
          return undefined;
        }

        var oFormLst1_0 = this.$refs[this.sessionKeyName1[0]].getValue();
        var oFormLst1_1 = this.$refs[this.sessionKeyName1[1]].getValue();
        var oFormLst1_2 = this.$refs[this.sessionKeyName1[2]].getValue();
        var oFormLst1_3 = this.$refs[this.sessionKeyName1[3]].getValue();

        var arrFormLstVal = [oFormLst1_0, oFormLst1_1, oFormLst1_2, oFormLst1_3];

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

        if(oValue == undefined){
          return
        }

        var arrHealth = [];
        var strHealth = "";
        if(oValue.fever){
          arrHealth.push("发热")
        }
        if(oValue.cough){
          arrHealth.push("咳嗽")
        }
        if(oValue.cold){
          arrHealth.push("感冒")
        }
        if(oValue.weak){
          arrHealth.push("四肢无力")
        }

        for(var i = 0; i<arrHealth.length; i++){
          if(i == 0){
            strHealth = arrHealth[i];
          }else{
            strHealth = strHealth + ',' + arrHealth[i];
          }
        }

        var reqBody = {
          reqBuVoStr: JSON.stringify({
            userId: oValue.userId,
            userGroup: "",
            location: oValue.sheng + "-" + oValue.shi,
            temperature: parseFloat(oValue.temperature),
            healthInfo: strHealth,
          })
        };
        if(this.debug){
          console.log(reqBody);
          // var oOptions = {
          //   status: "2",
          //   content: "提交失败!"
          // };
          // Bus.$emit('msg', 'add-prompt4Phone', oOptions);
          var oOptions = {
            status: "0",
            content: "提交成功!"
          };
          Bus.$emit('msg', 'add-prompt4Phone', oOptions);
          return oValue;
        }else{
          HttpUtils.post("upsertUserInfo", reqBody).then(res => {
            if(res && res.body && res.body.ok == true){
              var oOptions = {
                status: "0",
                content: "提交成功!"
              };
              Bus.$emit('msg', 'add-prompt4Phone', oOptions);
            }else{
              var oOptions = {
                status: "2",
                content: "提交失败!"
              };
              Bus.$emit('msg', 'add-prompt4Phone', oOptions);
            }
          });
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
    overflow: auto;
    background: url("../../../../static/images/dun.svg") no-repeat center;
    background-size: contain;
  }

  .contTitle{
    width: 100%;
    height: 70px;
    line-height: 70px;
    text-align: center;
    font-size: 24px;
    color: #3399ff;
    font-weight: bold;
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
    overflow: hidden;
    margin: 0 auto 20px auto;
  }

  .labelArea{
    float: left;
    width: 100%;
    height: 100%;
    font-size: 16px;
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
