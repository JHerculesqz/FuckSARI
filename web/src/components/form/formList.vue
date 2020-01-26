<template>
  <div class="formListWrapper">
    <div class="sessionArea" v-for="item in formLst" :class="[column,item.size]">
      <div v-if="item.type == 'text'" class="sessionCont sessionCont4Text">
        <div class="labelArea" :title="item.name" :style="{width:item.labelBeforeW}" v-html="item.name"></div>
        <div class="formItemArea" :style="{width:item.labelFormW}">
<!--          <marvel-input :ref="item.key" :inputType="item.inputType"></marvel-input>-->
        </div>
        <div class="labelArea" :title="item.afterText" :style="{width:item.labelAfterW}" v-html="item.afterText"></div>
      </div>
      <div v-else-if="item.type == 'textWithBtn'" class="sessionCont sessionCont4Text">
        <div class="labelArea" :title="item.name" :style="{width:item.labelBeforeW}" v-html="item.name"></div>
        <div class="formItemArea centerArea"  :style="{width:item.labelFormW}">
          <marvel-input :ref="item.key" :inputType="item.inputType"></marvel-input>
        </div>
        <div class="rightBtnArea">
          <marvel-button size="mini" :ref="item.btnKey" :label="item.btnName"
                         classCustom="classCustom4BtnInForm"
                         v-on:onClick="_callBack4OnBtnClick(item.btnKey)"></marvel-button>
        </div>
      </div>
      <div v-else-if="item.type == 'input'" class="sessionCont">
        <div class="required" v-if="item.validatorRule.require">*</div>
        <div class="labelArea" :title="item.name" :style="{width:item.labelBeforeW}" v-html="item.name"></div>
        <div class="formItemArea" :style="{width:item.labelFormW}">
          <marvel-input :ref="item.key"
                        :placeHolder="item.placeHolder"
                        :status="item.status"
                        :inputType="item.inputType"
                        :errMsg="item.errMsg"
                        :size="item.size"
                        @onBlur="_onBlur4Input(arguments, item)"></marvel-input>
        </div>
        <div class="labelArea" :title="item.afterText" :style="{width:item.labelAfterW}" v-html="item.afterText"></div>
      </div>
      <div v-else-if="item.type == 'inputWithBtn'" class="sessionCont">
        <div class="required" v-if="item.validatorRule.require">*</div>
        <div class="labelArea" :title="item.name" :style="{width:item.labelBeforeW}" v-html="item.name"></div>
        <div class="formItemArea centerArea" :style="{width:item.labelFormW}">
          <marvel-input :ref="item.key"
                        :placeHolder="item.placeHolder"
                        :status="item.status"
                        :inputType="item.inputType"
                        :errMsg="item.errMsg"
                        :size="item.size"
                        @onBlur="_onBlur4Input(arguments, item)"></marvel-input>
        </div>
        <div class="rightBtnArea">
          <marvel-button size="mini" :ref="item.btnKey" :label="item.btnName"
                         classCustom="classCustom4BtnInForm"
                         v-on:onClick="_callBack4OnBtnClick(item.btnKey)"></marvel-button>
        </div>
        <div class="labelArea" :title="item.afterText" :style="{width:item.labelAfterW}" v-html="item.afterText"></div>
      </div>
      <div v-else-if="item.type == 'dropdown'" class="sessionCont">
        <div class="required" v-if="item.validatorRule.require">*</div>
        <div class="labelArea" :title="item.name" :style="{width:item.labelBeforeW}" v-html="item.name"></div>
        <div class="formItemArea" :style="{width:item.labelFormW}">
          <marvel-drop-down-button :ref="item.key"
                                   :disable="item.status == 'disable'"
                                   :dropDownItems="item.dropItems"
                                   :size="item.size"
                                   width="100%"
                                   maxHeight="120px"
                                   @onOptionSelect="_onOptionSelect4DropDown(item)"></marvel-drop-down-button>
        </div>
        <div class="labelArea" :title="item.afterText" :style="{width:item.labelAfterW}" v-html="item.afterText"></div>
      </div>
      <div v-else-if="item.type == 'dropdownWithBtn'" class="sessionCont">
        <div class="required" v-if="item.validatorRule.require">*</div>
        <div class="labelArea" :title="item.name" :style="{width:item.labelBeforeW}" v-html="item.name"></div>
        <div class="formItemArea centerArea" :style="{width:item.labelFormW}">
          <marvel-drop-down-button :ref="item.key"
                                   :disable="item.status == 'disable'"
                                   :dropDownItems="item.dropItems"
                                   :size="item.size"
                                   width="100%"
                                   maxHeight="120px"
                                   @onOptionSelect="_onOptionSelect4DropDown(item)"></marvel-drop-down-button>
        </div>
        <div class="rightBtnArea">
          <marvel-button size="mini" :ref="item.btnKey" :label="item.btnName"
                         classCustom="classCustom4BtnInForm"
                         v-on:onClick="_callBack4OnBtnClick(item.btnKey)"></marvel-button>
        </div>
        <div class="labelArea" :title="item.afterText" :style="{width:item.labelAfterW}" v-html="item.afterText"></div>
      </div>
      <div v-else-if="item.type == 'checkBox'" class="sessionCont" :style="{width:item.checkItemW}">
        <marvel-check-box :ref="item.key" :id="item.key" :buObj="item"
                          :label="item.name" :showLabel=true
                          @onChange="_onCheckBoxChange"></marvel-check-box>
        <div v-if="item.hasTip" class="tipIconSessionCont icon-info" v-on:click="_onClickInfoIcon(item)"></div>
        <div class="labelArea" :title="item.afterText" :style="{width:item.labelAfterW}" v-html="item.afterText"></div>
      </div>
      <div v-else-if="item.type == 'radioBoxes'" class="sessionCont">
        <div class="labelArea" :title="item.name" :style="{width:item.labelBeforeW}" v-html="item.name"></div>
        <div class="formItemArea formItemArea4Radios" :style="{width:item.labelFormW}">
          <div class="formItem4Radio wfWidget" v-for="oRadio in item.radioLst" :key="oRadio.key">
            <marvel-radio-box :ref="oRadio.key" :id="oRadio.key" :group="item.group"
                              @onChange="_onRadioBoxesChange(item)"
                              :label="oRadio.name" :showLabel="true"></marvel-radio-box>
          </div>
          <div v-if="item.hasTip" class="tipIconSessionCont icon-info" v-on:click="_onClickInfoIcon(item)"></div>
        </div>
        <div class="labelArea" :title="item.afterText" :style="{width:item.labelAfterW}" v-html="item.afterText"></div>
        <div class="warnTipRadioBoxes icon-notification" v-show="item.isWarn">{{item.warnTip}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import MarvelButton from '~/widget/btn/MarvelButton';
  import MarvelDropDownButton from '~/widget/button/MarvelDropDownButton';
  import MarvelInput from '~/widget/input/MarvelInput';
  import MarvelCheckBox from '~/widget/select/MarvelCheckBox';
  import MarvelRadioBox from '~/widget/select/MarvelRadioBox';
  import ValidateUtils from './validateUtils';

  /**
   *  formList widget description
   *  @vuedoc
   *  @exports formList
   */
  export default {
    name: "formList",
    components: {
      MarvelButton,
      MarvelDropDownButton,
      MarvelInput,
      MarvelCheckBox,
      MarvelRadioBox
    },
    props: {
      columnNum: {
        type: Number,
        default: 1,
        required: false
      },
      formLst: {
        type: Array,
        default: undefined,
        required: true
      },
      alwaysWatchDefaultValueChange: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    data: function () {
      return {
        radioGroup0: "",
        radioGroup1: "",
        radioGroup2: "",
        radioGroup3: "",
        radioGroup4: "",
        defaultDataHasBeenSetOnce: false,
      }
    },
    computed: {
      column: function () {
        if (this.columnNum == 1) {
          return "column1"
        } else if (this.columnNum == 2) {
          return "column2"
        } else if (this.columnNum == 3) {
          return "column3"
        } else if (this.columnNum == 4) {
          return "column4"
        }else if (this.columnNum == 5) {
          return "column5"
        }else {
          return "column_flow"
        }
      }
    },
    mounted() {
      //#region init

      this.defaultDataHasBeenSetOnce = false;
      this._initEx();

      //#endregion
    },
    methods: {
      //#region inner

      //#region lifeCycle

      _initEx: function () {
        this.$nextTick(function () {
          if (!this.defaultDataHasBeenSetOnce && this.formLst.length > 0) {
            if (this.alwaysWatchDefaultValueChange) {
              //每当传入的默认值更改时，全量刷新
              this._setFormLstDefaultValueAndStatus();
            } else {
              //第一次初始化的时候，设置默认值
              this._setFormLstDefaultValueAndStatus();
              this.defaultDataHasBeenSetOnce = true;
            }
          }else if(this.defaultDataHasBeenSetOnce && this.formLst.length > 0){
            //更新状态
            this._setFormLstStatus();
          }
        });
      },

      //#endregion

      _setFormLstDefaultValueAndStatus: function () {
        for (var i = 0; i < this.formLst.length; i++) {
          var oForm = this.formLst[i];
          this._setFormItemDefaultValueAndStatus(oForm);
        }
      },
      _setFormItemDefaultValueAndStatus: function (oForm) {
        if (oForm.type == "input") {
          this._setInputValue(oForm);
        } else if (oForm.type == "inputWithBtn") {
          this._setInputValue(oForm);
          this._setBtnStatus(oForm);
        } else if (oForm.type == "dropdown") {
          this._setDropDownValue(oForm);
        } else if (oForm.type == "dropdownWithBtn") {
          this._setDropDownValue(oForm);
          this._setBtnStatus(oForm);
        } else if (oForm.type == "checkBox") {
          this._setCheckBoxValueAndStatus(oForm);
        } else if (oForm.type == "radioBoxes") {
          this._setRadioBoxesValueAndStatus(oForm);
        } else if (oForm.type == "text") {
          this._setInputValue(oForm);
        } else if (oForm.type == "textWithBtn") {
          this._setInputValue(oForm);
          this._setBtnStatus(oForm);
        }
      },

      _setFormLstStatus: function () {
        for (var i = 0; i < this.formLst.length; i++) {
          var oForm = this.formLst[i];
          this._setFormItemStatus(oForm);
        }
      },
      _setFormItemStatus: function (oForm) {
        if (oForm.type == "input") {

        } else if (oForm.type == "inputWithBtn") {

          this._setBtnStatus(oForm);
        } else if (oForm.type == "dropdown") {

        } else if (oForm.type == "dropdownWithBtn") {

          this._setBtnStatus(oForm);
        } else if (oForm.type == "checkBox") {
          this._setCheckBoxStatus(oForm);
        } else if (oForm.type == "radioBoxes") {
          this._setRadioBoxesStatus(oForm);
        } else if (oForm.type == "text") {

        } else if (oForm.type == "textWithBtn") {

          this._setBtnStatus(oForm);
        }
      },

      _setInputValue: function (oForm) {
        this.$refs[oForm.key][0].setInputMsg(oForm.defaultValue);
      },
      _setDropDownValue: function (oForm) {
        this.$refs[oForm.key][0].setSelectItem(oForm.defaultValue);
      },
      _setCheckBoxValueAndStatus: function (oForm) {
        this.$refs[oForm.key][0].setStatus(oForm.defaultValue, oForm.status == 'disable');
      },
      _setCheckBoxStatus: function (oForm) {
        this.$refs[oForm.key][0].setDisableStatus(oForm.status == 'disable');
      },
      _setRadioBoxesValueAndStatus: function (oForm) {
        for (var i = 0; i < oForm.radioLst.length; i++) {
          var oRadio = oForm.radioLst[i];
          if (oRadio.defaultValue) {
            this.$refs[oRadio.key][0].setStatus(oRadio.defaultValue, oForm.status == 'disable');
          } else {
            this.$refs[oRadio.key][0].setDisableStatus(oForm.status == 'disable');
          }
        }
      },
      _setRadioBoxesStatus: function (oForm) {
        for (var i = 0; i < oForm.radioLst.length; i++) {
          var oRadio = oForm.radioLst[i];
          this.$refs[oRadio.key][0].setDisableStatus(oForm.status == 'disable');
        }
      },
      _setBtnStatus: function (oForm) {
        this.$refs[oForm.btnKey][0].setBtnDisable(oForm.status == 'disable');
      },

      _onOptionSelect4DropDown: function (oItem) {
        var value = this.$refs[oItem.key][0].getSelectItem();
        this._callBack4OnOptionSelect4DropDown(oItem.key, value);
      },
      _onBlur4Input: function (oData, oItem) {
        var value = this.$refs[oItem.key][0].getInputMsg();
        this._toValidate(value, "INPUT", oItem.validatorRule, !oItem.validatorRule.require, oItem);
        this._callBack4OnBlur4Input(oItem.key, value, oItem, oData[1]);
      },
      _onCheckBoxChange: function (bOldValue, bNewValue, oCheck) {
        this._callBack4OnCheckBoxChange(oCheck.key, bNewValue);
      },
      _onRadioBoxesChange: function (oRadioBoxes) {
        var strKey = oRadioBoxes.key;
        var strValue = this.$refs[oRadioBoxes.radioLst[0].key][0].getCheckItem();
        console.log(strValue);
        this._callBack4OnRadioBoxesChange(strKey, strValue);
      },

      _toValidate: function (currentValue, dataType, validatorInMo, canBeEmpty, oItem) {
        var oRes = ValidateUtils.validateData(currentValue, dataType, validatorInMo, canBeEmpty, oItem);
        this._setErrorStatus(oItem, oRes);
        if (oRes.bIsValidate) {
          return true;
        } else {
          return false;
        }
      },
      _setErrorStatus: function (oItem, oValidateRes) {
        for (var i = 0; i < this.formLst.length; i++) {
          var oForm = this.formLst[i];
          if (oItem.key == oForm.key) {
            if (oValidateRes.bIsValidate) {
              oForm.status = '';
              oForm.errMsg = '';
            } else {
              oForm.status = 'error';
              oForm.errMsg = oValidateRes.strErrorTip;
            }
          }
        }
      },
      _onClickInfoIcon: function (oItem) {
        this._callBack4OnClickInfoIcon(oItem);
      },

      //#endregion
      //#region callback

      _callBack4OnOptionSelect4DropDown: function (key, value) {
        this.$emit("onOptionSelect4DropDown", key, value);
      },
      _callBack4OnBlur4Input: function (key, value, oItem, strLastValue) {
        this.$emit("onBlur4Input", key, value, oItem, strLastValue);
      },
      _callBack4OnCheckBoxChange: function (key, value) {
        this.$emit("onCheckBoxChange", key, value);
      },
      _callBack4OnRadioBoxesChange: function (key, value) {
        this.$emit("onRadioBoxesChange", key, value);
      },
      _callBack4OnBtnClick: function (strBtnKey) {
        this.$emit("onBtnClick", strBtnKey);
      },
      _callBack4OnClickInfoIcon: function (oItem) {
        this.$emit("onClickInfoIcon", oItem);
      },

      //#endregion
      //#region 3rd
      
      getValue: function () {
        var oValues = {};
        for(var i = 0; i<this.formLst.length; i++){
          var oItem = this.formLst[i];
          if(oItem.type == "input" || oItem.type == 'inputWithBtn'){
            oValues[oItem.key]=this.$refs[oItem.key][0].getInputMsg();
          }else if(oItem.type == "dropdown" || oItem.type == 'dropdownWithBtn'){
            oValues[oItem.key]=this.$refs[oItem.key][0].getSelectItem();
          }else if(oItem.type == "checkBox"){
            oValues[oItem.key]=this.$refs[oItem.key][0].getCheckItem();
          }else if(oItem.type == "radioBoxes"){
            oValues[oItem.key]=this.$refs[oItem.radioLst[0].key][0].getCheckItem();
          }else if(oItem.type == "text" || oItem.type == 'textWithBtn'){
            oValues[oItem.key]=this.$refs[oItem.key][0].getInputMsg();
          }
        }
        return oValues;
      },
      validateAll: function () {
        var bIsValidate = true;
        for(var i = 0; i<this.formLst.length; i++){
          var oItem = this.formLst[i];
          if(oItem.type=='input' || oItem.type == "inputWithBtn"){
            var value = this.$refs[oItem.key][0].getInputMsg();
            var validateRes = this._toValidate(value, "INPUT", oItem.validatorRule, !oItem.validatorRule.require, oItem);
            if(!validateRes){
              bIsValidate = false;
            }
          }
        }
        return bIsValidate;
      },
      updateFormItemValue: function (strKey, strValue) {
        for(var i = 0; i<this.formLst.length; i++){
          var oForm = this.formLst[i];
          if(oForm.key == strKey){

          }
        }
      }

      //#endregion
    },
    watch: {
      formLst: {
        handler: function () {
          this._initEx();
        },
        deep: true
      }
    },
  }
</script>

<style scoped>

  .formListWrapper {
    width: 100%;
  }

  .sessionArea {
    min-height: 20px;
    float: left;
  }

  .column1 {
    width: 100%;
    margin-bottom: 20px;
  }

  .column2 {
    width: calc(50% - 20px);
  }

  .column2:nth-child(odd) {
    margin-right: 40px;
  }

  .column3 {
    width: calc(33.3% - 40px);
    margin-right: 40px;
  }

  .column4 {
    width: calc(25% - 12px);
    margin-right: 40px;
  }

  .column5 {
    width: calc(20% - 40px);
    margin-right: 40px;
  }

  .column_flow{
    margin-bottom: 20px;
  }

  .column_flow:last-child{
    margin-right: 0;
  }

  .sessionCont {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .required {
    position: absolute;
    color: #ff4040;
    top: -0px;
    left: -10px;
  }

  .labelArea {
    float: left;
    height: 100%;
    font-size: 16px;
    color: #666;
    line-height: 32px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .formItemArea {
    float: left;
  }

  .formItemArea4Radios {
  }

  .formItemArea4Radios .formItem4Radio {
    float: left;
    margin-right: 16px;
    height: 20px;
  }

  .formItemArea4Radios .formItem4Radio:last-child {
    margin-right: 0;
  }

  .centerArea {
    width: calc(100% - 278px);
  }

  .rightBtnArea {
    float: left;
    margin-left: 16px;
  }

  .warnTipRadioBoxes {
    font-size: 12px;
    color: #ff4040;
    position: absolute;
    top: 24px;
    left: 0;
  }

  .warnTipRadioBoxes:before {
    margin-right: 6px;
  }

  .classCustom4BtnInForm {
    width: 100%;
    text-align: center;
  }

  .componentWrapperBottom {
    height: 50px;
    border-top: 1px solid #ddd;
  }

  .componentWrapperBottomBtnWrapper {
    float: right;
    padding-top: 9px;
  }

  .tipIconSessionCont {
    display: inline-block;
    margin-left: 10px;
    color: #3399ff;
    cursor: pointer;
  }

  .tipIconSessionCont:hover {
    color: #60b0ff;
  }

  /*mini*/

  .mini .labelArea{
    line-height: 22px;
  }


  /*darkGray*/

  .darkGray .labelArea {
    color: #ccc;
  }
</style>

<style>
  /*region basic*/

  *{
    font-family: "Microsoft YaHei", "arial",sans-serif;
  }
  ::-webkit-scrollbar{
    width:8px;
    height:8px;
    background-color: rgba(0,0,0,0);
  }
  ::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: rgba(0,0,0,0);
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #aaa;
  }

  /*endregion*/
  * {
    box-sizing: border-box
  }

  .radioWrapper {
    display: inline-block;
  }

  .dpn {
    display: none;
  }

  .wfWidget .radioWrapper .radio {
    width: 12px !important;
    height: 12px !important;;
    position: relative;
    top: 4px;
    float: left;
  }

  .wfWidget .radioWrapper .radio input[type=radio] {
    /*pos*/
    margin: 0;
    padding: 0;
    /*style*/
    visibility: hidden;
  }

  .wfWidget .radioWrapper .radio input[type=radio]:checked + label:after {
    /*pos*/
    /*style*/
    opacity: 1;
    border-top: none;
    border-right: none;
  }

  .wfWidget .radioWrapper .radio input[type=radio]:checked + label {
    /*pos*/
    /*style*/
    background-color: #3399ff;
  }

  .wfWidget .radioWrapper .radio input[type=radio]:disabled + label:after {
    /*pos*/
    /*style*/
    background-color: #aaa;
  }

  .wfWidget .radioWrapper .radio input[type=radio]:disabled + label {
    /*pos*/
    /*style*/
    border: 1px solid #999999;
    background-color: #f0f0f0;
    pointer-events: none;
  }

  .wfWidget .radioWrapper .radio label {
    /*pos*/
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    /*style*/
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 100%;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -ms-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
  }

  .wfWidget .radioWrapper .radio label:hover {
    border: 1px solid #60b0ff;
  }

  .wfWidget .radioWrapper .radio label:after {
    /*pos*/
    position: absolute;
    width: 4px !important;
    height: 4px !important;
    border-radius: 100%;
    top: 3px !important;
    left: 3px !important;
    /*style*/
    opacity: 0;
    content: '';
    background-color: #fff;
  }

  .wfWidget .radioWrapper .radioLabel {
    margin: 0 0 0 5px;
    width: calc(100% - 18px);
    white-space: nowrap;
    overflow: visible !important;
    text-overflow: unset !important;;
    padding: 0;
    float: left;
    font-size: 12px !important;
    line-height: 20px !important;
    color: #666666;
  }

  /*region dark theme*/

  .darkGray .wfWidget .radioWrapper .radioLabel {
    color: #ccc;
  }

  /*endregion*/
</style>
