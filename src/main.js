import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(VueAxios, axios);
Vue.use(Router);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
