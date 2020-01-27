<template>
  <div class="formPageWrapper" v-bind:class="isContainerFold">
    <div class="leftArea">
      <!--accordionArea start-->
      <marvel-accordion :isFolder="false" :hasShadow="true"
                        title="使用说明" titleIcon="icon-marvelIcon-62"
                        :defaultSelectLabel="defaultSelectLabel"
                        :items="accordionItems"
                        v-on:accordionItemClick="_accordionItemClick"
                        v-on:afterShowOrHide="_afterShowOrHide"
                        v-on:accordionSubItemClick="_accordionSubItemClick"></marvel-accordion>
      <!--accordionArea end-->
    </div>
    <div class="rightArea">
      <!--        <component v-bind:is="rightModuleName"></component>-->
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import HttpUtils from "./0.common/httpUtil/httpUtils";
  import FormList from "../../../components/form/formList";
  import MarvelAccordion from '~/widget/accordion/MarvelAccordion';
  import MarvelButton from '~/widget/btn/MarvelButton';
  import CookieUtils from '~/component/cookie';
  import StrUtils from '~/component/str';
  import DateUtils from '~/component/date';
  import oMockUtils from "./0.common/mock"

  export default {
    name: 'dashboardPage',
    components: {
      FormList,
      MarvelButton,
      MarvelAccordion
    },
    props: {},
    data() {
      return {
        /*region const*/
        debug: false,
        /*endregion*/
        /*region folder*/
        isContainerFold:"",
        /*endregion*/
        /*region accordion*/
        defaultSelectLabel: "安装",
        accordionItems: [{
          label: "开发指南",
          icon: "icon-paint-format",
          expand: true,
          subItems: [{
            id: "/",
            label: "安装"
          }, {
            id: "Page4Start",
            label: "快速入门"
          }, {
            id: "Page4Develop",
            label: "Vue控件开发"
          }]
        }, {
          label: "控件(基础)",
          icon: "icon-headphones",
          expand: false,
          subItems: [{
            id: "/Page4Lan",
            label: "国际化"
          }, {
            id: "/Page4Theme",
            label: "自定义主题"
          }, {
            id: "/Page4Icons",
            label: "图标"
          }, {
            id: "/Page4MarvelAnimate",
            label: "动画"
          }, {
            id: "/Page4MarvelFrame",
            label: "布局"
          }, {
            id: "/Page4MarvelColor",
            label: "色彩"
          },]
        }, {
          label: "控件(表单)",
          icon: "icon-pacman",
          expand: false,
          subItems: [
            //#region button
            {id: "/Page4MarvelButtonC", label: "Page4MarvelButton"},
            //endregion

            //#region Radio
            {id: "/Page4MarvelRadioBox", label: "Page4MarvelRadioBox"},
            //endregion

            //#region Check
            {id: "/Page4MarvelCheckBox", label: "Page4MarvelCheckBox"},
            //endregion

            //#region Input
            {id: "/Page4MarvelInput", label: "Page4MarvelInput"},
            {id: "/Page4MarvelMultiInput", label: "Page4MarvelMultiInput"},
            //endregion

            //#region NumberSelect
            {id: "/Page4MarvelNumberSelect", label: "Page4MarvelNumberSelect"},
            //endregion

            //#region DropDown
            {id: "/Page4MarvelDropDownButton", label: "Page4MarvelDropDownButton"},
            //endregion

            //#region Switch
            {id: "/Page4MarvelSwitch", label: "Page4MarvelSwitch"},
            //endregion

            //#region Slider
            {id: "/Page4MarvelSlider", label: "Page4MarvelSlider"},
            //endregion

            //#region Date
            {id: "/Page4MarvelDate", label: "Page4MarvelDate"},
            {id: "/Page4MarvelDate2", label: "Page4MarvelDate2"},
            //endregion

            //#region Upload
            {id: "/Page4MarvelUpload", label: "Page4MarvelUpload"},
            {id: "/Page4MarvelUploadSimple", label: "Page4MarvelUploadSimple"},
            //endregion

            //#region BidirectionalSelect
            {id: "/Page4MarvelBidirectionalSelect", label: "Page4MarvelBidirectionalSelect"},
            //endregion
          ]
        },  {
          label: "data(数据)",
          icon: "icon-pacman",
          expand: false,
          subItems: [
            //#region Grid
            {id: "/Page4MarvelTable", label: "Page4MarvelTable"},
            //endregion

            //#region Progress
            {id: "/Page4MarvelProgress", label: "Page4MarvelProgress"},
            //endregion

            //#region Tree
            {id: "/Page4MarvelZTree", label: "Page4MarvelZTree"},
            //endregion

            //#region Paging
            {id: "/Page4MarvelPaging", label: "Page4MarvelPaging"},
            //endregion
          ]
        }, {
          label: "Notice",
          icon: "icon-pacman",
          expand: false,
          subItems: [
            //#region Prompt
            {id: "/Page4MarvelPromptC", label: "Page4MarvelPrompt"},
            //endregion

            //#region Loading
            {id: "/Page4MarvelLoadingC", label: "Page4MarvelLoading"},
            {id: "/Page4MarvelLoadingMini", label: "Page4MarvelLoadingMini"},
            //endregion

            //#region Confirm
            {id: "/Page4MarvelConfirmC", label: "Page4MarvelConfirm"},
            //endregion
          ]
        },{
          label: "控件(导航)",
          icon: "icon-pacman",
          expand: false,
          subItems: [
            //#region Menu
            {id: "/Page4MarvelMenu", label: "Page4MarvelMenu"},
            //endregion

            //#region Tab
            {id: "/Page4MarvelTab", label: "Page4MarvelTab"},
            //endregion

            //#region Tab
            {id: "/Page4MarvelCrumb", label: "Page4MarvelCrumb"},
            //endregion

            //#region Wizard
            {id: "/Page4MarvelWizard", label: "Page4MarvelWizard"},
            {id: "/Page4MarvelWizardAdvance", label: "Page4MarvelWizardAdvance"},
            {id: "/Page4MarvelWizardTab", label: "Page4MarvelWizardTab"},
            //endregion
          ]
        }, {
          label: "others",
          icon: "icon-pacman",
          expand: false,
          subItems: [
            //#region Dialog
            {id: "/Page4MarvelDialog", label: "Page4MarvelDialog"},
            //#endregion
            //endregion

            //#region Dashboard
            {id: "/Page4MarvelDashboardC", label: "Page4MarvelDashboardC"},
            {id: "/Page4MarvelDashboard", label: "Page4MarvelDashboard"},
            {id: "/Page4MarvelDashboardAdaptToContH", label: "Page4MarvelDashboardAdaptToContH"},
            //endregion

            //#region FoldPanel
            {id: "/Page4MarvelFoldPanel", label: "Page4MarvelFoldPanel"},
            //endregion

            //#region TimeLine
            {id: "/Page4MarvelTimeLine", label: "Page4MarvelTimeLine"},
            //endregion

            //#region extPanel
            {id: "/page4MarvelFlexiblePanel", label: "page4MarvelFlexiblePanel"},
            {id: "/page4MarvelFloatPanel", label: "page4MarvelFloatPanel"},
            //endregion
          ]
        }, {
          label: "控件(小部件)",
          icon: "icon-pacman",
          expand: false,
          subItems: [
            {id: "/Page4MarvelAceEditor", label: "Page4MarvelAceEditor"},
            {id: "/Page4MarvelLegend", label: "Page4MarvelLegend"},
            {id: "/Page4MarvelLogView", label: "Page4MarvelLogView"},
            {id: "/Page4MarvelToolbar", label: "Page4MarvelToolbar"},
            {id: "/Page4MarvelWarning", label: "Page4MarvelWarning"},
          ]
        }, {
          label: "控件(图表)",
          icon: "icon-pacman",
          expand: false,
          subItems: [{id: "/Page4MarvelChartBar", label: "Page4MarvelChartBar"},
            {id: "/Page4MarvelChartBarLine", label: "Page4MarvelChartBarLine"},
            {id: "/Page4MarvelChartBarLine2", label: "Page4MarvelChartBarLine2"},
            {id: "/Page4MarvelChartForce", label: "*Page4MarvelChartForce"},
            {id: "/Page4MarvelChartGauge", label: "*Page4MarvelChartGauge"},
            {id: "/Page4MarvelChartLine", label: "Page4MarvelChartLine"},
            {id: "/Page4MarvelChartLine2", label: "Page4MarvelChartLine2"},
            {id: "/Page4MarvelChartLineNew", label: "Page4MarvelChartLineNew"},
            {id: "/Page4MarvelChartNBar", label: "Page4MarvelChartNBar"},
            {id: "/Page4MarvelChartPie", label: "Page4MarvelChartPie"},
            {id: "/Page4MarvelChartPie2", label: "Page4MarvelChartPie2"},
            {id: "/Page4MarvelChartRadar", label: "Page4MarvelChartRadar"},
            {id: "/Page4MarvelChartScatter", label: "Page4MarvelChartScatter"},
            {id: "/Page4MarvelChartScatter2", label: "Page4MarvelChartScatter2"},
            {id: "/Page4MarvelChartStackLine", label: "Page4MarvelChartStackLine"},
            {id: "/Page4MarvelD3Tree", label: "*Page4MarvelD3Tree"},]
        }, {
          label: "控件(topo)",
          icon: "icon-pacman",
          expand: false,
          subItems: [{id: "/Page4MarvelTopo", label: "*Page4MarvelTopo"},]
        }, {
          label: "控件(gis)",
          icon: "icon-pacman",
          expand: false,
          subItems: [{id: "/Page4MarvelLeaflet", label: "Page4MarvelLeaflet"},]
        }, {
          label: "控件(devPanel)",
          icon: "icon-pacman",
          expand: false,
          subItems: [{id: "/Page4MarvelDevPanel", label: "Page4MarvelDevPanel"},
            {id: "/Page4MarvelDevPanelEx", label: "Page4MarvelDevPanelEx"},]
        }, {
          label: "典型页面",
          icon: "icon-book",
          expand: false,
          subItems: [{
            id: "/Page4MarvelLayout1",
            label: "布局1"
          }, {
            id: "/Page4MarvelLayout2",
            label: "布局2"
          }]
        },{
          label: "其他",
          icon: "icon-pacman",
          expand: false,
          subItems: [
            {id: "/Page4MarvelAccordion", label: "Page4MarvelAccordion"},
            {id: "/Page4MarvelAccordion2", label: "Page4MarvelAccordion2"},
            {id: "/Page4MarvelAccordion3", label: "Page4MarvelAccordion3"},
            {id: "/Page4MarvelAccordion4", label: "Page4MarvelAccordion4"},

            {id: "/Page4MarvelMenuContextC", label: "Page4MarvelMenuContext"},
            {id: "/Page4MarvelDropDownMenu", label: "Page4MarvelDropDownMenu"},
            {id: "/Page4MarvelDiff", label: "*Page4MarvelDiff"},

            {id: "/Page4MarvelInfo", label: "Page4MarvelInfo"},

            {id: "/Page4MarvelInputDropDownC", label: "Page4MarvelInputDropDown"},

            {id: "/Page4MarvelListInput", label: "*Page4MarvelListInput"},
            {id: "/Page4MarvelMultiDropDown", label: "Page4MarvelMultiDropDown"},

            {id: "/Page4MarvelSearchBox", label: "Page4MarvelSearchBox"},
            {id: "/Page4MarvelSearchAdvance", label: "Page4MarvelSearchAdvance"},
            {id: "/Page4MarvelSelectCard", label: "Page4MarvelSelectCard"},

            {id: "/Page4MarvelGridM", label: "Page4MarvelGridM"},
            {id: "/Page4MarvelGridPriority", label: "Page4MarvelGridPriority"},
            {id: "/Page4MarvelGridTree", label: "Page4MarvelGridTree"},
          ]
        },{
          label: "已合并控件",
          icon: "icon-pacman",
          expand: false,
          subItems: [
            //#region 合并
            {id: "/Page4MarvelButton", label: "Page4MarvelButton"},
            {id: "/Page4MarvelIconButton", label: "Page4MarvelIconButton"},
            {id: "/Page4MarvelIconTxtButton", label: "Page4MarvelIconTxtButton"},
            {id: "/Page4MarvelTabButton", label: "*Page4MarvelTabButton"},
            {id: "/Page4MarvelTxtButton", label: "Page4MarvelTxtButton"},


            {id: "/Page4MarvelConfirm", label: "Page4MarvelConfirm"},
            {id: "/Page4MarvelConfirmEx", label: "Page4MarvelConfirmEx"},


            {id: "/Page4MarvelMenuContext", label: "Page4MarvelMenuContext"},
            {id: "/Page4MarvelMenuContext2", label: "Page4MarvelMenuContext2"},


            {id: "/Page4MarvelMenuDropDown", label: "Page4MarvelMenuDropDown"},
            {id: "/Page4MarvelMenuHelp", label: "Page4MarvelMenuHelp"},


            {id: "/Page4MarvelBottomExtPanel", label: "Page4MarvelBottomExtPanel"},
            {id: "/Page4MarvelLeftExtPanel", label: "Page4MarvelLeftExtPanel"},
            {id: "/Page4MarvelRightExtPanel", label: "Page4MarvelRightExtPanel"},


            {id: "/Page4MarvelList1", label: "*Page4MarvelList1"},
            {id: "/Page4MarvelList2", label: "Page4MarvelList2"},
            {id: "/Page4MarvelList2Analysis", label: "Page4MarvelList2Analysis"},
            {id: "/Page4MarvelList3", label: "*Page4MarvelList3"},
            {id: "/Page4MarvelList4", label: "Page4MarvelList4"},
            {id: "/Page4MarvelList5", label: "Page4MarvelList5"},
            {id: "/Page4MarvelDragHelp", label: "Page4MarvelDragHelp"},


            {id: "/Page4MarvelInputDropDown", label: "Page4MarvelInputDropDown"},
            {id: "/Page4MarvelInputDropDownWithTip", label: "Page4MarvelInputDropDownWithTip"},


            {id: "/Page4MarvelLoading", label: "Page4MarvelLoading"},
            {id: "/Page4MarvelLoadingIconPublic", label: "Page4MarvelLoadingIconPublic"},
            {id: "/Page4MarvelLoadingPublic", label: "Page4MarvelLoadingPublic"},
            {id: "/Page4MarvelLoadingPublicEx", label: "Page4MarvelLoadingPublicEx"},


            {id: "/Page4MarvelPrompt", label: "Page4MarvelPrompt"},
            {id: "/Page4MarvelPromptGLobal", label: "Page4MarvelPromptGLobal"},

            {id: "/Page4MarvelSearch", label: "Page4MarvelSearch"},
            {id: "/Page4MarvelSearchWithDropDown", label: "Page4MarvelSearchWithDropDown"},

            {id: "/Page4MarvelGrid", label: "Page4MarvelGrid"},
            {id: "/Page4MarvelGridEx", label: "Page4MarvelGridEx"},
            {id: "/Page4MarvelGridExFilter", label: "Page4MarvelGridExFilter"},
            {id: "/Page4MarvelGridExWithFreezeColumn", label: "Page4MarvelGridExWithFreezeColumn"},
            //#endregion

            //#region 移至业务侧
            {id: "/Page4MarvelMenuNew", label: "Page4MarvelMenuNew"},
            //#endregion

            //#region to delete
            // {id: "/Page4MarvelLazyLoadTree", label: "*Page4MarvelLazyLoadTree"},
            // {id: "/Page4MarvelLink", label: "*Page4MarvelLink"},
            //#endregion

          ]
        },]
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
      },

      _destroyed: function () {
      },

      //#endregion

      _accordionItemClick: function (oItem) {
        // MarvelRouter.toEx(this.$router, oItem.id);
      },
      _afterShowOrHide: function (bIsFolder) {
        if (bIsFolder) {
          this.isContainerFold = "fold";
        } else {
          this.isContainerFold = "";
        }
      },
      _accordionSubItemClick: function (oSubItem) {
        // MarvelRouter.toEx(this.$router, oSubItem.id);
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
  }

  .formPageWrapper .leftArea {
    float: left;
    height: 100%;
    width: 320px;
  }

  .formPageWrapper .rightArea {
    width: calc(100% - 320px);
    float: left;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .fold .leftArea{
    width: 84px;
  }

  .fold .rightArea{
    width: calc(100% - 84px);
  }

</style>
