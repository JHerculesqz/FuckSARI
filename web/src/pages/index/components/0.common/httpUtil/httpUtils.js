import Vue from 'vue'
import VueResource from 'vue-resource';
import Loading from './loadingUtils';
import OFB from './operationalFeedback';
import {pathToFileURL} from 'url';
Vue.use(VueResource);

/*
* 字段说明：
* method：请求类型（post/get）
* url:请求地址
* loading:可配置项（true/false），不配置等同于false。作用是控制在请求过程中进行界面loading
* desc:接口行为描述。当需要进行简单的操作反馈时，描述信息会以'Success to '+ desc 或 'Failed to ' + desc的方式进行界面反馈
* checkRes:可配置项（true/false），不配置等同于false。用于检查返回体数据，返回体ok为false的情况下，不会继续执行后续操作，并弹出告警框进行界面提示
* checkResAndDoFailed:可配置项（true/false），不配置等同于false。用于检查返回体数据，返回体ok为false的情况下，会弹出告警框进行界面提示。用户点击对话框后，获取用户在对话框的操作并继续执行后续操作
* checkResAndShowSimpleTipBoth:可配置项（true/false），不配置等同于false。用于检查返回体数据，返回体ok为true的情况下，会以prompt 3秒的形式进行成功提示，返回体ok为false的情况下，会以prompt 3秒的形式进行失败提示，后续操作会继续执行
* checkResAndShowSimpleTipWhenFailed:可配置项（true/false），不配置等同于false。用于检查返回体数据，仅在返回体ok为false的情况下，会以prompt 3秒的形式进行失败提示，后续操作会继续执行
* checkResAndShowSimpleTipWhenSuccess:可配置项（true/false），不配置等同于false。用于检查返回体数据，仅在返回体ok为true的情况下，会以prompt 3秒的形式进行成功提示，后续操作会继续执行
* */

var errorAdvice = "Please contact technical support.";
var C = "create";
var R = "get data";
var U = "update";
var D = "delete data";
var T = "trigger";

var API = {
  getAutoUserInfoByUserID:{
    url: "/getAutoUserInfoByUserID",
    loading:false,
    checkRes:true,
    desc:R,
    errorAdvice:errorAdvice
  },
  upsertUserInfo:{
    url: "/upsertUserInfo",
    loading:false,
    checkRes:false,
    desc:R,
    errorAdvice:errorAdvice
  }
};

export default {
  post: function (strOperationName, reqBody) {
    var oURL = API[strOperationName];
    return new Promise(function (resolve, reject) {
      //显示loading
      oURL.loading && Loading._showLoading(strOperationName);

      var reqBuVoStr = (reqBody.reqBuVoStr && JSON.parse(reqBody.reqBuVoStr)) || {};
      Vue.http.post(oURL.url, {reqBuVoStr:JSON.stringify(reqBuVoStr)}).then(res => {
        //关闭loading
        oURL.loading && Loading._hideLoading(strOperationName);

        //返回体处理

        //检查返回体数据的正确性，错误则弹框提示不进行后续操作
        if(oURL.checkRes){
          var bIsDoFailed = false;
          OFB.isOperationSuccess(res, oURL.desc, bIsDoFailed, oURL.errorAdvice).then(()=>{
            resolve(res);
          });
        }
        //检查返回体数据的正确性，错误则弹框提示,返回弹框操作结果，继续后续操作执行
        else if(oURL.checkResAndDoFailed){
          var bIsDoFailed = true;
          OFB.isOperationSuccess(res, oURL.desc, bIsDoFailed, oURL.errorAdvice).then((confirmRes)=>{
            res.confirmRes = confirmRes;
            resolve(res);
          });
        }
        //检查返回体数据，成功、失败均弹出简易提示信息
        else if(oURL.checkResAndShowSimpleTipBoth){
          OFB.showSimpleTip(res, oURL).then(()=>{
            resolve(res);
          });
        }
        //检查返回体数据，成功、失败均弹出简易提示信息
        else if(oURL.checkResAndShowSimpleTipWhenSuccess){
          OFB.showSimpleSuccessTip(res, oURL).then(()=>{
            resolve(res);
          });
        }
        //检查返回体数据，成功、失败均弹出简易提示信息
        else if(oURL.checkResAndShowSimpleTipWhenFailed){
          OFB.showSimpleFailedTip(res, oURL).then(()=>{
            resolve(res);
          });
        }else{
          resolve(res)
        }
      }).catch(err => {
        reject(err);
        OFB.showHttpErrorCodeTip(err);
        oURL.loading && Loading._hideLoading(strOperationName);
      });
    })
  },
  upload: function (strOperationName, formData) {
    var oURL = API[strOperationName];
    return new Promise(function (resolve, reject) {
      //显示loading
      oURL.loading && Loading._showLoading(strOperationName);

      Vue.http.post(oURL.url, formData, {
        headers: {
          'Content-Type' :'multipart/form-data'
        }
      }).then(res => {
        //关闭loading
        oURL.loading && Loading._hideLoading(strOperationName);

        //返回体处理

        //检查返回体数据的正确性，错误则弹框提示不进行后续操作
        if(oURL.checkRes){
          var bIsDoFailed = false;
          OFB.isOperationSuccess(res, oURL.desc, bIsDoFailed, oURL.errorAdvice).then(()=>{
            resolve(res);
          });
        }
        //检查返回体数据的正确性，错误则弹框提示,返回弹框操作结果，继续后续操作执行
        else if(oURL.checkResAndDoFailed){
          var bIsDoFailed = true;
          OFB.isOperationSuccess(res, oURL.desc, bIsDoFailed, oURL.errorAdvice).then((confirmRes)=>{
            res.confirmRes = confirmRes;
            resolve(res);
          });
        }
        //检查返回体数据，成功、失败均弹出简易提示信息
        else if(oURL.checkResAndShowSimpleTipBoth){
          OFB.showSimpleTip(res, oURL).then(()=>{
            resolve(res);
          });
        }
        //检查返回体数据，成功、失败均弹出简易提示信息
        else if(oURL.checkResAndShowSimpleTipWhenSuccess){
          OFB.showSimpleSuccessTip(res, oURL).then(()=>{
            resolve(res);
          });
        }
        //检查返回体数据，成功、失败均弹出简易提示信息
        else if(oURL.checkResAndShowSimpleTipWhenFailed){
          OFB.showSimpleFailedTip(res, oURL).then(()=>{
            resolve(res);
          });
        }else{
          resolve(res)
        }
      }).catch(err => {
        reject(err);
        OFB.showHttpErrorCodeTip(err);
        oURL.loading && Loading._hideLoading(strOperationName);
      });
    })
  },
  download: function (strOperationName, strFileName) {
    var oURL = API[strOperationName];
    window.open(oURL.url + strFileName);
  },
  get: function (strOperationName, strParams) {

  }
}
