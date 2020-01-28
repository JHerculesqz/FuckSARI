import Bus from "~/core/bus";
import I18nUtilsEx from '~/component/i18n'

const i18n = I18nUtilsEx.initI18n({
  'zh': require('../../../i18n/zh'),
  'en': require('../../../i18n/en')
});

var errorAdvice = "Please contact technical support.";
var httpErrorTip = {
  errCode_400: {
    desc: "400 error",
    reason: "Bad Request",
    detail: "Bad Request",
    advice: errorAdvice,
  },
  errCode_401: {
    desc: "401 error",
    reason: "Unauthorized",
    detail: "Unauthorized",
    advice: errorAdvice,
  },
  // errCode_402: {
  //   desc: "402 error",
  //   reason: "Payment Required",
  //   detail: "Payment Required",
  //   advice: errorAdvice,
  // },
  errCode_403: {
    desc: "403 error",
    reason: "Forbidden",
    detail: "Forbidden",
    advice: errorAdvice,
  },
  errCode_404: {
    desc: "404 error",
    reason: "Not Found",
    detail: "Not Found",
    advice: errorAdvice,
  },
  errCode_405: {
    desc: "405 error",
    reason: "Method Not Allowed",
    detail: "Method Not Allowed",
    advice: errorAdvice,
  },
  errCode_406: {
    desc: "406 error",
    reason: "Not Acceptable",
    detail: "Not Acceptable",
    advice: errorAdvice,
  },
  errCode_407: {
    desc: "407 error",
    reason: "Proxy Authentication Required",
    detail: "Proxy Authentication Required",
    advice: errorAdvice,
  },
  errCode_408: {
    desc: "408 error",
    reason: "Request Timeout",
    detail: "Request Timeout",
    advice: errorAdvice,
  },
  errCode_409: {
    desc: "409 error",
    reason: "Conflict",
    detail: "Conflict",
    advice: errorAdvice,
  },
  errCode_410: {
    desc: "410 error",
    reason: "Gone",
    detail: "Gone",
    advice: errorAdvice,
  },
  errCode_411: {
    desc: "411 error",
    reason: "Length Required",
    detail: "Length Required",
    advice: errorAdvice,
  },
  errCode_412: {
    desc: "412 error",
    reason: "Precondition Failed",
    detail: "Precondition Failed",
    advice: errorAdvice,
  },
  errCode_413: {
    desc: "413 error",
    reason: "Request Entity Too Large",
    detail: "Request Entity Too Large",
    advice: errorAdvice,
  },
  errCode_414: {
    desc: "414 error",
    reason: "Request-url Too Long",
    detail: "Request-url Too Long",
    advice: errorAdvice,
  },
  errCode_415: {
    desc: "415 error",
    reason: "Unsupported Media Type",
    detail: "Unsupported Media Type",
    advice: errorAdvice,
  },
  errCode_416: {
    desc: "416 error",
    reason: "Requested Range Not Satisfiable",
    detail: "Requested Range Not Satisfiable",
    advice: errorAdvice,
  },
  errCode_417: {
    desc: "417 error",
    reason: "Expectation Failed",
    detail: "Expectation Failed",
    advice: errorAdvice,
  },
  errCode_500: {
    desc: "500 error",
    reason: "Internal Server Error",
    detail: "Internal Server Error",
    advice: errorAdvice,
  },
  errCode_501: {
    desc: "501 error",
    reason: "Not Implemented",
    detail: "Not Implemented",
    advice: errorAdvice,
  },
  errCode_502: {
    desc: "502 error",
    reason: "Bad Gateway",
    detail: "Bad Gateway",
    advice: errorAdvice,
  },
  errCode_503: {
    desc: "503 error",
    reason: "Service Unavailable",
    detail: "Service Unavailable",
    advice: errorAdvice,
  },
  errCode_504: {
    desc: "504 error",
    reason: "Gateway Timeout",
    detail: "Gateway Timeout",
    advice: errorAdvice,
  },
  errCode_505: {
    desc: "505 error",
    reason: "HTTP Version Not Supported",
    detail: "HTTP Version Not Supported",
    advice: errorAdvice,
  },

};

function _genConfirmExOption(oConfig, oAfterOk, oAfterCancel) {
  var oOptions = {
    oAfterOk:oAfterOk,
    oAfterCancel: oAfterCancel,
    confirmTitle: oConfig.type,
    confirmIcon: "icon-question",
    confirmIconColor: "#3dcca6",
    confirmSubTitle: oConfig.type,
    confirmCont:[],
    showOkButton: true,
    showCancelBtn: oConfig.type != "error",
  };

  //generate icon and color
  if(oConfig.type == "error"){
    //error
    oOptions.confirmIcon = "icon-cancel-circle";
    oOptions.confirmIconColor = "#ff4040";
    oOptions.confirmSubTitle = "Operation Failed";
  }
  else if(oConfig.type == "warning"){
    //warning
    oOptions.confirmIcon = "icon-notification";
    oOptions.confirmIconColor = "#ff8833";
    oOptions.confirmSubTitle = "Operation Warning";
  }
  else if(oConfig.type == "tip"){
    //tip
    oOptions.confirmIcon = "icon-question";
    oOptions.confirmIconColor = "#3dcca6";
    oOptions.confirmSubTitle = "Operation Tip";
  }

  //generate confirm content
  oOptions.confirmCont.push({
    key:"Description",
    value:oConfig.desc,
  });
  oOptions.confirmCont.push({
    key:"Reason",
    value:oConfig.reason,
  });
  oOptions.confirmCont.push({
    key:"Detail",
    value:oConfig.detail,
  });
  oOptions.confirmCont.push({
    key:"Repair advice",
    value:oConfig.advice,
  });

  return oOptions;
}

export default {
  isOperationSuccess: function (oRes, defaultDesc, bIsDoFailed, errorAdvice) {
    var strDefaultFaileType = "error";
    var strDefaultFaileTip = "Failed to " + defaultDesc;
    var strDefaultFaileReason = "Failed to " + defaultDesc;
    var strDefaultFaileDetail = "Failed to " + defaultDesc;
    var strDefaultFaileAdvice = errorAdvice;

    return new Promise(function (resolve) {
      if(oRes && oRes.body && oRes.body.ok == true){
        resolve();
      }else{
        var operationErrorOption = {
          type:oRes.body.errorObj && oRes.body.errorObj.items[0]&& oRes.body.errorObj.items[0].type?oRes.body.errorObj.items[0].type:strDefaultFaileType,
          desc:oRes.body.errorObj && oRes.body.errorObj.items[0]&& oRes.body.errorObj.items[0].desc?oRes.body.errorObj.items[0].desc:strDefaultFaileTip,
          reason:oRes.body.errorObj && oRes.body.errorObj.items[0]&& oRes.body.errorObj.items[0].reason?oRes.body.errorObj.items[0].reason:strDefaultFaileReason,
          detail:oRes.body.errorObj && oRes.body.errorObj.items[0]&& oRes.body.errorObj.items[0].code?oRes.body.errorObj.items[0].code:strDefaultFaileDetail,
          advice:oRes.body.errorObj && oRes.body.errorObj.items[0]&& oRes.body.errorObj.items[0].advice?oRes.body.errorObj.items[0].advice:strDefaultFaileAdvice
        };
        var oOption = _genConfirmExOption(operationErrorOption, function () {
          if(bIsDoFailed && operationErrorOption.type == "warning"){
            resolve("OK")
          }
        }, function () {
          if(bIsDoFailed){
            resolve("CANCEL");
          }
        });

        Bus.$emit('msg', 'show-confirmEx', oOption);
      }
    })
  },
  showSimpleTip: function (oRes, oURL) {
    return new Promise(function (resolve){
      if(oRes && oRes.body && oRes.body.ok == true){
        var oOptions = {
          status: "0",
          content: "Success to" + oURL.desc
        };
        if(oURL.customSuccessTip){
          oOptions.content = oURL.customSuccessTip;
        }
        Bus.$emit('msg', 'add-prompt', oOptions);
        resolve();
      }else{
        var oOptions = {
          status: "2",
          content: "Failed to" + oURL.desc
        };
        if(oURL.customFailedTip){
          oOptions.content = oURL.customFailedTip;
        }
        Bus.$emit('msg', 'add-prompt', oOptions);
      }
    });

  },
  showSimpleSuccessTip: function (oRes, oURL) {
    var self = this;
    return new Promise(function (resolve){
      if(oRes && oRes.body && oRes.body.ok == true){
        var oOptions = {
          status: "0",
          content: "Success to" + oURL.desc
        };
        if(oURL.customSuccessTip){
          oOptions.content = oURL.customSuccessTip;
        }
        Bus.$emit('msg', 'add-prompt', oOptions);
        resolve();
      }else{
        self.isOperationSuccess(oRes, oURL.desc, false, oURL.errorAdvice)
      }
    });
  },
  showSimpleFailedTip: function (oRes, oURL) {
    return new Promise(function (resolve){
      if(oRes && oRes.body && oRes.body.ok != true){
        var oOptions = {
          status: "2",
          content: "Failed to" + oURL.desc
        };
        if(oURL.customFailedTip){
          oOptions.content = oURL.customFailedTip;
        }
        Bus.$emit('msg', 'add-prompt', oOptions);
      }else{
        resolve();
      }
    });

  },
  showHttpErrorCodeTip: function(err){
    var errorCode = "errCode_" + JSON.stringify(err.status);
    if(httpErrorTip[errorCode] != undefined){
      var oError = httpErrorTip[errorCode];
      var oOptions = {
        status: "2",
        content: "There has " + oError.desc + ' (' + oError.reason + '), ' + oError.advice + "."
      };

      Bus.$emit('msg', 'add-prompt', oOptions);
    }
  },
  getMessageByI18n: function (strKey) {
    return i18n.message[i18n.local].L[strKey]
  }
}
