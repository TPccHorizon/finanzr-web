import Vue from "vue";
import Router from 'vue-router'
import MainLayout from "@/views/MainLayout";
import SettingsView from "@/views/SettingsView";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainLayout
        },
        {
            path: '/settings',
            name: 'settings',
            component: SettingsView
        }
    ]
})
