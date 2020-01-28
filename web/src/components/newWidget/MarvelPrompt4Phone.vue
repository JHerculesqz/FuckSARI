<template>
  <div class="promptGlobalContainer" v-dom-portal>
    <!--<div class="promptBoxes" >-->
    <marvel-prompt-item4-phone v-for="(prompt, index) in oPrompts"
                        :key="prompt.id ? prompt.id : index"
                        :status="prompt.status"
                        :content="prompt.content"
                        :prompt="prompt"
                        @destroy="promptDestroy"
                        :disposeTimeOut="disposeTimeOut"></marvel-prompt-item4-phone>
    <!--</div>-->
  </div>
</template>

<script>
  import MarvelPromptItem4Phone from './MarvelPromptItem4Phone.vue';

  /**
   *  MarvelPromptC widget description
   *  @vuedoc
   *  @exports MarvelPromptC
   */
  export default {
    components: {
      MarvelPromptItem4Phone
    },
    name: "MarvelPrompt4Phone",
    props: {
      oPrompts: {
        type: Array,
        default: undefined,
        required: true,
      },
      disposeTimeOut: {
        type: Number,
        default: 10000,
        required: false,
      }
    },
    data: function () {
      return {};
    },
    methods: {
      //#region inner
      //#endregion
      //#region callback

      promptDestroy(prompt) {
        this.$emit("promptDestroy", prompt);
      }

      //#endregion
      //#region 3rd
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

  .promptGlobalContainer {
    position: fixed;
    z-index: 3003;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
</style>
