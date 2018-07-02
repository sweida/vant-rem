// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
Vue.use(Vant)

// import Mint from 'mint-ui';
// Vue.use(Mint);

import 'lib-flexible/flexible.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// window.onresize = setHtmlFontSize;
// function setHtmlFontSize(){
//     const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//     const htmlDom = document.getElementsByTagName('html')[0];
//     htmlDom.style.fontSize = htmlWidth / 10 + 'px';
// };
// setHtmlFontSize();
