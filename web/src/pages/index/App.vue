<template>
  <div id="app">
    <router-view></router-view>
    <marvel-loading ref="loading" :isGlobal="true" :onlyIcon="true" :hasCancelBtn="false"></marvel-loading>
    <marvel-confirm :showConfirm="showConfirmEx"
                    :showOkBtn="showOkBtn4ConfirmEx"
                    :showCancelBtn="showCancelBtn4ConfirmEx"
                    :confirmTitle="confirmTitle4ConfirmEx"
                    :confirmIcon="confirmIcon4ConfirmEx"
                    :confirmIconColor="confirmIconColor4ConfirmEx"
                    :confirmSubTitle="confirmSubTitle4ConfirmEx"
                    :confirmContLst="confirmExContent4ConfirmEx"
                    :draggable="true"
                    :width=520
                    :maxContH=520
                    tipType="custom"
                    v-on:onClickOK="_onConfirmExOk"
                    v-on:onClickCancel="_onConfirmExCancel"></marvel-confirm>
    <marvel-prompt :oPrompts="globalPrompt" :disposeTimeOut="disposeTimeOut"></marvel-prompt>
    <marvel-prompt4-phone :oPrompts="globalPrompt4Phone" :disposeTimeOut="disposeTimeOut4Phone"></marvel-prompt4-phone>
    <div v-show="showCoverPage" class="coverPage" :class="coverPageStatus">
      <div class="icon" :class="coverPageIcon"></div>
      <div class="text" v-html="coverPageText"></div>
    </div>
  </div>
</template>

<script>
  import Bus from "~/core/bus";
  import MarvelLoading from "~/widget/load/MarvelLoading";
  import MarvelConfirm from "~/widget/confirm/MarvelConfirm";
  import MarvelPrompt from "~/widget/prompting/MarvelPrompt";
  import MarvelPrompt4Phone from "../../components/newWidget/MarvelPrompt4Phone";

  export default {
    components: {
      MarvelPrompt4Phone,
      MarvelLoading,
      MarvelConfirm,
      MarvelPrompt,
    },
    name: 'app',
    data: function () {
      return {
        //#region confirmEx
        showConfirmEx: false,
        showOkBtn4ConfirmEx: true,
        showCancelBtn4ConfirmEx: true,
        confirmTitle4ConfirmEx: "",
        confirmIcon4ConfirmEx: "icon-cancel-circle",
        confirmIconColor4ConfirmEx: "#ff4040",
        confirmSubTitle4ConfirmEx: "Operation Failed",
        confirmExContent4ConfirmEx: [],
        funOnConfirmExOk: undefined,
        funOnConfirmExCancel: undefined,
        //#endregion
        //#region prompt
        globalPrompt: [],
        disposeTimeOut: 2000,
        //#endregion
        //#region prompt4Phone
        globalPrompt4Phone: [],
        disposeTimeOut4Phone: 2000,
        //#endregion
        /*region coverPage*/
        coverPageStatus:"",
        showCoverPage:false,
        coverPageIcon:"",
        coverPageText:""
        /*endregion*/
      }
    },
    mounted: function () {
      //#region custom
      this._initEx();
      //#endregion
    },
    beforeDestroy: function () {
      //#region custom
      this._destroyed();
      //#endregion
    },
    methods: {
      //#region inner

      //#region lifeCycle

      _initEx: function () {
        //事件监听
        Bus.$on('msg', (e, params) => {
          if (e == "show-loading") {
            var key = params;
            this.$refs.loading.imsgMarvelLoadingShow(key);
          } else if (e == "hide-loading") {
            var key = params;
            this.$refs.loading.imsgMarvelLoadingHide(key);
          } else if (e == "show-confirmEx") {
            this._showConfirmEx(params)
          } else if (e == "add-prompt") {
            this._addPrompt(params)
          } else if (e == "add-prompt4Phone") {
            this._addPrompt4Phone(params)
          }else if (e == "show-cover-page") {
            this._showCoverPage(params)
          }
        })
      },

      _destroyed: function () {
        Bus.$off("msg");
      },

      //#endregion

      //#region confirmEx

      _showConfirmEx: function (oParams) {
        this.showConfirmEx = true;
        this.showOkBtn4ConfirmEx = oParams.showOkButton;
        this.showCancelBtn4ConfirmEx = oParams.showCancelBtn;
        this.confirmTitle4ConfirmEx = oParams.confirmTitle;
        this.confirmIcon4ConfirmEx = oParams.confirmIcon;
        this.confirmIconColor4ConfirmEx = oParams.confirmIconColor;
        this.confirmSubTitle4ConfirmEx = oParams.confirmSubTitle;
        this.confirmExContent4ConfirmEx = oParams.confirmCont;
        this.funOnConfirmExOk = oParams.oAfterOk;
        this.funOnConfirmExCancel = oParams.oAfterCancel;
      },

      _onConfirmExOk: function () {
        this.showConfirmEx = false;
        this.funOnConfirmExOk();
      },

      _onConfirmExCancel: function () {
        this.showConfirmEx = false;
        this.funOnConfirmExCancel();
      },

      //#endregion

      //#region prompt

      _addPrompt: function (oParams) {
        this.globalPrompt.push(oParams);
      },

      _addPrompt4Phone: function (oParams) {
        this.globalPrompt4Phone.push(oParams);
      },

      _showCoverPage: function (oParams) {
        if (oParams.status == '0') {
          this.coverPageStatus = 'promptInfo';
          this.coverPageIcon = "icon-smile";
        }else if (oParams.status == '1') {
          this.coverPageStatus = 'promptTip';
          this.coverPageIcon = "icon-shocked";
        } else {
          this.coverPageStatus = 'promptError';
          this.coverPageIcon = "icon-sad";
        }

        this.coverPageText = oParams.content;

        this.showCoverPage = true;
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

<style>
  /*region basic*/

  * {
    font-family: "Microsoft YaHei", 'arial', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #808080;
  }

  /*endregion*/

  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body {
    position: fixed;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: Tahoma, Arial, Roboto, ”Droid Sans”, ”Helvetica Neue”, ”Droid Sans Fallback”, ”Heiti SC”, sans-self;
  }

  #app {
    height: 100%;
    position: absolute;
    width: 100%;
  }

  .content {
    height: 100%;
    position: relative;
  }

  .coverPage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 30% 0;
    box-sizing: border-box;

    /*background: url("../../../static/images/dun.svg") no-repeat center;*/
    background-color: #ffffff;
    /*background-size: contain;*/

    animation:move 0.3s;
    -moz-animation:move 0.3s; /* Firefox */
    -webkit-animation:move 0.3s; /* Safari and Chrome */
    -o-animation:move 0.3s; /* Opera */
  }

  @keyframes move
  {
    from {top: 100%;}
    to {top: 0;}
  }

  @-moz-keyframes move /* Firefox */
  {
    from {top: 100%;}
    to {top: 0;}
  }

  @-webkit-keyframes move /* Safari and Chrome */
  {
    from {top: 100%;}
    to {top: 0;}
  }

  @-o-keyframes move /* Opera */
  {
    from {top: 100%;}
    to {top: 0;}
  }

  .coverPage .icon {
    width: 100%;
    height: 200px;
    line-height: 200px;
    font-size: 120px;
    text-align: center;
  }

  .promptInfo .icon {
    color: #3dcca6;
  }

  .promptTip .icon {
    color: #3399ff;
  }

  .promptError .icon {
    color: #ff4c4c;
  }

  .coverPage .text {
    box-sizing: border-box;
    font-size: 24px;
    text-align: center;
    color: #999;
  }
</style>
