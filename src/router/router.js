import Vue from "vue";
import Router from 'vue-router'
import HomeView from "@/views/HomeView";

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/settings',
            name: 'settings',
            component: () => import(/* webpackChunkName: "settings" */"@/views/SettingsView")
        }
    ]
})
