import Vue from 'vue'
import App from './App.vue'
import Test from './Test.vue'

/**
 * 注册组件
 */
new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#test',
  render: h => h(Test)
})
