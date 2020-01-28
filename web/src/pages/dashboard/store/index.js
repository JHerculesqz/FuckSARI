import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    taskId: undefined,
    taskName: undefined,
    comeFrom: "NeLst"
  },
  mutations: {
    updateTaskId: function (state, newTaskId) {
      state.taskId = newTaskId;
    },
    updateTaskName: function (state, taskName) {
      state.taskName = taskName;
    },
    updateComeFrom: function (state, comeFrom) {
      state.comeFrom = comeFrom;
    }
  }
});
