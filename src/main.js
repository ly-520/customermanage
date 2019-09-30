// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(router)

//设置路由
/*const router2 = new router({
  mode:"history",
  base:__dirname,
  routes:[
    {path:"/",components: Customer},
    {path:"/about",components: About}
  ]
})*/

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
