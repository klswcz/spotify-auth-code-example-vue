import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from "../components/HelloWorld.vue";
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HelloWorld,
            meta: {
                title: 'Spotify Authorization Code example page',
            },
        },
    ]
});
