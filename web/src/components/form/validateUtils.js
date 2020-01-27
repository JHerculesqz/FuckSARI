import StringUtils from '~/component/str'

export default {
  validateData: function (currentValue, dataType, validatorInMo, canBeEmpty, oItem, strUserName) {
    var oValidateRes = {
      bIsValidate:true,
      strErrorTip:""
    };

    //为空校验
    if(!canBeEmpty){
      if (currentValue === "" || currentValue === undefined || currentValue === null){
        oValidateRes = {
          bIsValidate:false,
          strErrorTip:"输入不可为空！"
        };
        return oValidateRes;
      }
    }else{
      if(currentValue === ""){
        return oValidateRes;
      }
    }

    //字符串长度校验
    if(validatorInMo.ruleStringRange.length>0){
      oValidateRes = this._validate4RulesStringRange(currentValue, validatorInMo);

      if(!oValidateRes.bIsValidate){
        return oValidateRes;
      }
    }

    //数字范围校验
    if(validatorInMo.ruleDigitRange.length>0){
      oValidateRes = this._validate4RulesDigitRange(currentValue, validatorInMo);

      if(!oValidateRes.bIsValidate){
        return oValidateRes;
      }
    }

    if(validatorInMo.validateType =="IP"){
      return this._validateIp(currentValue);
    }else if (validatorInMo.validateType == "EMAIL"){
      return this._validateEmail(currentValue);
    }else if (validatorInMo.validateType == "PHONE"){
      return this._validatePhone(currentValue);
    }else if (validatorInMo.validateType == "NAME1"){
      return this._validateName1(currentValue);
    }else if (validatorInMo.validateType == "NAME2"){
      return this._validateName2(currentValue);
    }else if (validatorInMo.validateType == "PASSWORD"){
      return this._validatePassword(currentValue, strUserName);
    }else{
      return oValidateRes;
    }
  },

  _validateIp: function (strInput) {
    var oValidateRes = {
      bIsValidate:true,
      strErrorTip:""
    };
    var errorTip4ValidateFailed = "支持格式[0,255].[0,255].[0,255].[0,255]";
    var re = '^(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)$';

    if(re.test(strInput)){
      var tmp = strInput.split(".");
      for(var i = 0; i<tmp.length; i++){
        var num = parseFloat(tmp[i]);
        if(num>255 || num <0){
          oValidateRes = {
            bIsValidate:false,
            strErrorTip:errorTip4ValidateFailed
          };
        }
      }
    }else{
      oValidateRes = {
        bIsValidate:false,
        strErrorTip:errorTip4ValidateFailed
      };
    }
    return oValidateRes;
  },
  _validateEmail: function (strInput) {
    var oValidateRes = {
      bIsValidate:true,
      strErrorTip:""
    };
    var errorTip4ValidateFailed = "邮箱格式不正确";
    var re = "^([a-zA-Z]|[0-9])(\\w|\\-)+@[a-zA-Z0-9]+\\.([a-zA-Z]{2,4})$";

    if(!re.test(strInput)){
      oValidateRes = {
        bIsValidate:false,
        strErrorTip:errorTip4ValidateFailed
      };
    }

    return oValidateRes;
  },
  _validatePhone: function (strInput) {
    var oValidateRes = {
      bIsValidate:true,
      strErrorTip:""
    };
    var errorTip4ValidateFailed = "号码格式不正确";
    var re = "^[1][3,4,5,7,8][0-9]{9}$";

    if(!re.test(strInput)){
      oValidateRes = {
        bIsValidate:false,
        strErrorTip:errorTip4ValidateFailed
      };
    }

    return oValidateRes;
  },
  _validateName1: function (strInput) {
    var oValidateRes = {
      bIsValidate:true,
      strErrorTip:""
    };
    var errorTip4ValidateFailed = "支持中文、英文、数字以及ASCII字符";
    var re = "^[A-Aa-a0-9\\u4E00-\\u9FA5\\x00-\\xff（）]*$";

    if(!re.test(strInput)){
      oValidateRes = {
        bIsValidate:false,
        strErrorTip:errorTip4ValidateFailed
      };
    }

    return oValidateRes;
  },
  _validateName2: function (strInput) {
    var oValidateRes = {
      bIsValidate:true,
      strErrorTip:""
    };
    var errorTip4ValidateFailed = "支持中文、英文、日文、韩文、数字、空格以及：._-:/()";
    var re = "^[A-Aa-a0-9\\u2E80-\\u2FDF\\u3040-\\u318F\\u31A0-\\u31BF\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FFF\\uA960-\\uA97F\\uAC00-\\uD7FF./ \\-()\\[\\].:_-]*$";

    if(!re.test(strInput)){
      oValidateRes = {
        bIsValidate:false,
        strErrorTip:errorTip4ValidateFailed
      };
    }

    return oValidateRes;
  },
  _validatePassword: function (strPassWord, strUserName) {
    //正则校验
    /*
    * 长度至少8个字符（特权用户至少10个字符）
    * 最多128个字符
    * 可输入数字、大小写字母、特殊字符（!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~和空格）
    * 至少包含数字、大写字母、小写字母
    *   至少一个小写字符（a-z）
    *   至少一个大写字符（A-Z）
    *   至少一个数字（0-9）
    *口令不能和账号或者账号的倒写一样
    *口令不能超过两个连续的相同字符
    * */
    var oValidateRes = {
      bIsValidate:true,
      strErrorTip:""
    };
    var strInputNameVal = strUserName ? strUserName: "";
    var arrInputNameVal = strInputNameVal.split('');
    var strInputPasswordVal = strPassWord;
    var arrInputPasswordVal = strInputPasswordVal.split('');
    if(StringUtils.getLength(strInputNameVal) == StringUtils.getLength(strInputPasswordVal)){
      //判断正序是否一致
      if(strInputPasswordVal == strInputNameVal){
        oValidateRes = {
          bIsValidate:false,
          strErrorTip:"密码不可与账号一致"
        };
        return oValidateRes
      }else{
        var bReverseEqual = true;

        for(var i = 0; i< arrInputPasswordVal.length; i++){
          var j = arrInputPasswordVal.length - i - 1;
          if(arrInputNameVal[j]!=arrInputPasswordVal[i]){
            bReverseEqual = false;
            break;
          }
        }

        if(bReverseEqual){
          oValidateRes = {
            bIsValidate:false,
            strErrorTip:"密码不可与账号的倒写一样"
          };
          return oValidateRes
        }
      }
    }

    var bHasLowercase = false;/*小写*/
    var re4Lowercase = new RegExp("^[a-z]*$");

    var bHasCapital = false;/*大写*/
    var re4Capital = new RegExp("^[A-Z]*$");

    var bHasNum = false;/*数字*/
    var re4Num = new RegExp("^[0-9]*$");

    var bHasSpecial = false;/*特殊字符*/
    var str4Special = new RegExp('^[!"#$%&\'( )*+,-.:;<=>?@[\\]^_`{|}~]*$');

    var bHasIllegalLetter = false;
    var bHasContinuousCharacter = false;/*连续字符*/

    for(var i = 0; i< arrInputPasswordVal.length; i++){
      //小写
      var bIsLowercase = true;
      if(re4Lowercase.test(arrInputPasswordVal[i])){
        bHasLowercase = true
      }else{
        bIsLowercase = false;
      }

      //大写
      var bIsCapital = true;
      if(re4Capital.test(arrInputPasswordVal[i])){
        bHasCapital = true
      }else{
        bIsCapital = false;
      }

      //数字
      var bIsNum = true;
      if(re4Num.test(arrInputPasswordVal[i])){
        bHasNum = true
      }else{
        bIsNum = false;
      }

      //特殊字符
      var bIsSpecial = true;
      if(str4Special.test(arrInputPasswordVal[i]) || arrInputPasswordVal[i] == '\\'){
        bHasSpecial = true
      }else{
        bIsSpecial = false;
      }

      if(!bIsLowercase && !bIsCapital && !bIsNum && !bIsSpecial){
        //存在非法字符
        bHasIllegalLetter = true;
        break;
      }


      //连续字符
      if(i + 2 <= arrInputPasswordVal.length){
        if(arrInputPasswordVal[i] == arrInputPasswordVal[i+1] && arrInputPasswordVal[i] == arrInputPasswordVal[i+2]){
          bHasContinuousCharacter = true
        }
      }
    }

    if(bHasIllegalLetter){
      oValidateRes = {
        bIsValidate:false,
        strErrorTip:"支持数组、英文、!\"#$%&\'()*+,-.:;<=>?@[\\]^_`{|}~"
      };
      return oValidateRes
    }

    if(bHasContinuousCharacter){
      oValidateRes = {
        bIsValidate:false,
        strErrorTip:"不能超过两个连续的相同字符"
      };
      return oValidateRes
    }

    if(!bHasLowercase || !bHasCapital || !bHasNum){
      oValidateRes = {
        bIsValidate:false,
        strErrorTip:"至少一个小写字符、一个大写字符、一个数字"
      };
    }

    return oValidateRes
  },

  _validate4RulesStringRange: function (strValue, validatorInMo) {
    var oValidateRes = {
      bIsValidate:false,
      strErrorTip:""
    };
    if(validatorInMo.ruleStringRange && validatorInMo.ruleStringRange.length > 0){
      var arrRanges = validatorInMo.ruleStringRange;

      if(strValue!=null){
        //获取字符串长度
        var iLength = StringUtils.getLength(strValue);
        if(parseInt(arrRanges[0])<=parseInt(iLength) && parseInt(iLength)<=parseInt(arrRanges[1])){
          oValidateRes.bIsValidate = true;
        }
      }

      if(oValidateRes.bIsValidate == false){
        oValidateRes.strErrorTip = "输入长度应为" + arrRanges[0] + '~' + arrRanges[1];
      }
    }else{
      oValidateRes.bIsValidate = true;
    }

    return oValidateRes;
  },

  _validate4RulesDigitRange: function (strValue, validatorInMo) {
    var oValidateRes = {
      bIsValidate:false,
      strErrorTip:""
    };

    if(validatorInMo.ruleDigitRange && validatorInMo.ruleDigitRange.length > 0){
      var arrRanges = validatorInMo.ruleDigitRange;

      var regPos = /^\d+(\.\d+)?$/;//非负浮点数
      var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;//浮点数

      //判断输入值是否为数字
      if(regPos.test(strValue) || regNeg.test(strValue)){
        for(var range of arrRanges){
          //是否在限定范围内
          if(parseInt(range.min)<=parseInt(strValue) && parseInt(strValue)<=parseInt(range.max)){
            oValidateRes.bIsValidate = true;
            break;
          }
        }
      }else{
        oValidateRes.bIsValidate = false;
      }

      if(oValidateRes.bIsValidate == false){
        oValidateRes.strErrorTip = "输入数字范围[" + range.min + " ," + range.max + "]"
      }
    }else{
      oValidateRes.bIsValidate = true;
    }

    return oValidateRes;
  }
}
