import * as $ from 'jquery'

import Vue from 'vue'
import App from './App.vue'

$(document).ready(() => {
  new Vue({
    el: '#app-container',
    components: { App },
    render: function(createElement) {
      return createElement(App)
    }
  })
})