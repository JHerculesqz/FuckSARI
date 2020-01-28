<template>
  <div class="promptContainer" :class="classObj">
    <div class="left" :class="leftIconClass"></div>
    <div class="center" v-html="content">
    </div>
  </div>
</template>

<script>
  import brower from '~/component/browser';

  export default {
    name: "MarvelPromptItem4Phone",
    data: function () {
      return {
        timeId: undefined,
      };
    },
    props: {
      status: {//status: '0'表示info,'1'代表提示,'2'表示警告
        type: String,
        default: "2",
        required: false,
        validator: function (str) {
          if (str == "0" || str == "1" || str == "2") {
            return true;
          } else {
            return false;
          }
        }
      },
      content: {
        type: String,
        default: "",
        required: false,
      },
      prompt: {
        type: [String, Object, Array],
        default: undefined,
        required: false,
      },
      disposeTimeOut: {
        type: Number,
        default: 10000,
        required: false,
      }
    },
    mounted: function () {
      //#region init

      this._initEx();

      //#endregion
    },
    beforeDestroy() {
      //#region destroy

      this._destroy();

      //#endregion
    },
    computed: {
      classObj: function () {
        if (this.status == '0') {
          return 'promptInfo';
        }
        if (this.status == '1') {
          return 'promptTip';
        } else {
          return 'promptError';
        }
      },
      leftIconClass: function () {
        if (this.status == '0') {
          return ["icon-smile", "leftInfo"];
        } else if (this.status == '1') {
          return ["icon-shocked", "leftTip"];
        } else {
          return ["icon-sad", "leftError"];
        }
      }
    },
    methods: {
      //#region inner

      //#region lifeCycle

      _initEx: function () {
        this.timeId = setTimeout(function () {
          this.clickDel();
        }.bind(this), this.disposeTimeOut);
      },
      _destroy: function () {
        if (this.timeId) {
          clearTimeout(this.timeId);
        }
        this.callback4Destroy(this.prompt);
      },

      //#endregion

      //#endregion
      //#region callback

      callback4Destroy: function (oPrompt) {
        this.$emit("destroy", oPrompt);
      },

      //#endregion
      //#region 3rd

      clickDel: function () {
        var oBrowser = brower.getBrowserInfo();
        if (oBrowser.name == 'msie') {
          //iE 浏览器下
          this.$el.removeNode(true);
        } else {
          //非IE
          this.$el.remove();
        }
        this.$destroy();
      }

      //#endregion
    },
  }

</script>

<style scoped>
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
  .promptContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 220px;
    height: 160px;
    margin-top: -80px;
    margin-left: -110px;
    box-sizing: border-box;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 6px;
    box-shadow: 0 0 6px rgba(0,0,0,0.3);
    overflow: hidden;
    text-shadow: 1px 1px 1px rgba(255,255,255,0.6);
    background-color: #ffffff;
    pointer-events: auto;

    animation:move 0.3s;
    -moz-animation:move 0.3s; /* Firefox */
    -webkit-animation:move 0.3s; /* Safari and Chrome */
    -o-animation:move 0.3s; /* Opera */
  }

  @keyframes move
  {
    from {top: calc(100% + 100px);}
    to {top: 50%;}
  }

  @-moz-keyframes move /* Firefox */
  {
    from {top: calc(100% + 100px);}
    to {top: 50%;}
  }

  @-webkit-keyframes move /* Safari and Chrome */
  {
    from {top: calc(100% + 100px);}
    to {top: 50%;}
  }

  @-o-keyframes move /* Opera */
  {
    from {top: calc(100% + 100px);}
    to {top: 50%;}
  }

  /*.promptInfo {*/
  /*  color: #3dcca6;*/
  /*}*/

  /*.promptTip {*/
  /*  color: #3399ff;*/
  /*}*/

  /*.promptError {*/
  /*  color: #ff4c4c;*/
  /*}*/

  .promptContainer .left {
    width: 70px;
    height: 120px;
    line-height: 120px;
    font-size: 70px;
    margin: 0 auto;
  }

  .leftInfo {
    color: #3dcca6;
  }

  .leftTip {
    color: #3399ff;
  }

  .leftError {
    color: #ff4c4c;
  }

  .promptContainer .center {
    box-sizing: border-box;
    font-size: 18px;
    text-align: center;
    color: #999;
  }

  .dark .promptContainer{
    text-shadow: 1px 1px 1px rgba(0,0,0,0.6);
  }

  .dark .promptInfo {
    background-color: #256362;
  }

  .dark .promptTip {
    background-color: #214e86;
  }

  .dark .promptError {
    background-color: #732f3e;
  }
</style>
