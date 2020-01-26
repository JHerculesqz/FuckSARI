// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store'
import http from '~/component/http'
import dom from '~/component/dom'
import VueI18n from 'vue-i18n'
import 'natasha-icon/style.css'
import "babel-polyfill"

Vue.config.productionTip = false;
Vue.use(VueI18n);

//设置默认语言环境
const i18n = new VueI18n({
  locale: "zh",    // 语言标识
  messages: {
    'zh': require('./i18n/zh'),
    'en': require('./i18n/en')
  }
});

Vue.http.interceptors.push((request, next) => {
  request.headers.set(window.csrfHeader, window.csrfToken);
  next(function (response) {
    return response;
  });
});

new Vue({
  el: '#app',
  router,
  http,
  store,
  dom,
  i18n,
  template: '<App/>',
  components: {App}
});
