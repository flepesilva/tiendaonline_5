require('./bootstrap');

window.Vue = require('vue').default;
//import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import App from './components/App.vue'
import Index from './components/Index.vue'



const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Index,
            name: 'index'
        },
    ]
});

const app = new Vue({
    el: '#app',
    components: { App },
    router
  });