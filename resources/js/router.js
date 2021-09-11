import Vue from "vue";
import Router from "vue-router";
import Home from './components/HomeComponent.vue'
import Concept from './components/ConceptComponent.vue'
import Menu from './components/MenuComponent.vue'
import Style from './components/StyleComponent.vue'
import Info from './components/InfoComponent.vue'
import Reserve from './components/ReserveComponent.vue'
import SystemError from './components/System.vue'
Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            meta: { bodyClass: '' },
            component: Home
        },
        {
            path: '/concept',
            name: 'concept',
            meta: { bodyClass: '' },//これはメタ情報をもたらしてくれるもの
            component: Concept
        },
        {
            path: '/menu',
            name: 'menu',
            component: Menu
        },
        {
            path: '/style',
            name: 'style',
            component: Style
        },
        {
            path: '/info',
            name: 'info',
            component: Info
        },
        {
            path: '/reserve',
            name: 'reserve',
            component: Reserve
        },
        {
            path: '/500',
            component: SystemError
        },
    ]
});
