import Bus from "~/core/bus";

export default {
  _showLoading: function (key, strLoadingMsg) {
    Bus.$emit('msg', 'show-loading', key, strLoadingMsg);
  },

  _hideLoading: function (key, strLoadingMsg) {
    Bus.$emit('msg', 'hide-loading', key);
  },
}
