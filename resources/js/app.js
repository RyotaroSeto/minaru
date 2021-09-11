import Vue from 'vue'
import App from './App.vue'
import router from "./router"

require('./bootstrap');

window.Vue = require('vue').default;

const app = new Vue({
    router,
    components: { App },
    template: '<App />'
}).$mount("#app");
