
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'

import { Button } from 'mint-ui'
import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Button.name, Button);

import VueRouter from 'vue-router'
import router from './router.js'
Vue.use(VueRouter);

import App from './app.vue'
import './app.scss'
const vm = new Vue({
    el:"#app",
    data:{},
    render(c) {
        return c(App);
    },
    router
});














